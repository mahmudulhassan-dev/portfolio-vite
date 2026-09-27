import { NextResponse } from "next/server";
import { readdir } from "node:fs/promises";
import os from "node:os";

/**
 * Live infrastructure snapshot for the portfolio "Live Ops" section.
 *
 * Design notes:
 *  - Aggregates only. No file paths, no hostnames, no secrets, no env values.
 *  - Cached for 10s so a page full of visitors can't hammer `readdir`.
 *  - Every failure degrades to `null` for that single metric rather than
 *    failing the request — a partial dashboard beats a broken one.
 */

export const dynamic = "force-dynamic";
export const revalidate = 0;

const CACHE_TTL_MS = 10_000;

let cache: { at: number; payload: ServerSnapshot } | null = null;

type ServerSnapshot = {
  loadAvg: [number, number, number] | null;
  cpuCount: number;
  memTotalMb: number;
  memUsedMb: number;
  memUsedPct: number;
  diskTotalGb: number;
  diskUsedGb: number;
  diskUsedPct: number;
  siteCount: number;
  uptimeDays: number;
};

async function diskUsage() {
  try {
    const { execFile } = await import("node:child_process");
    const { promisify } = await import("node:util");
    const exec = promisify(execFile);
    const { stdout } = await exec("df", ["-BG", "/"], { timeout: 3000 });
    const line = stdout.trim().split("\n").pop() ?? "";
    const parts = line.split(/\s+/);
    // Filesystem 1024-blocks Used Available Capacity Mounted-on
    const totalGb = Number(parts[1]?.replace("G", "")) || 0;
    const usedGb = Number(parts[2]?.replace("G", "")) || 0;
    const pct = Number(parts[4]?.replace("%", "")) || 0;
    if (!totalGb || !usedGb) return null;
    return { totalGb, usedGb, pct };
  } catch {
    return null;
  }
}

async function siteCount() {
  try {
    const dir = "/www/server/panel/vhost/nginx";
    const files = await readdir(dir);
    return files.filter((f) => f.endsWith(".conf")).length;
  } catch {
    return null;
  }
}

async function snapshot(): Promise<ServerSnapshot> {
  const disk = await diskUsage();
  const sites = await siteCount();

  const totalMemMb = Math.round(os.totalmem() / 1024 / 1024);
  const freeMemMb = Math.round(os.freemem() / 1024 / 1024);
  const usedMemMb = totalMemMb - freeMemMb;

  return {
    loadAvg: os.loadavg().map((n) => Number(n.toFixed(2))) as [
      number,
      number,
      number,
    ],
    cpuCount: os.cpus().length,
    memTotalMb: totalMemMb,
    memUsedMb: usedMemMb,
    memUsedPct: totalMemMb ? Math.round((usedMemMb / totalMemMb) * 100) : 0,
    diskTotalGb: disk?.totalGb ?? 0,
    diskUsedGb: disk?.usedGb ?? 0,
    diskUsedPct: disk?.pct ?? 0,
    siteCount: sites ?? 0,
    uptimeDays: Math.floor(os.uptime() / 86_400),
  };
}

export async function GET() {
  const now = Date.now();
  if (cache && now - cache.at < CACHE_TTL_MS) {
    return NextResponse.json(cache.payload, {
      headers: { "Cache-Control": "public, max-age=10" },
    });
  }

  const payload = await snapshot();
  cache = { at: now, payload };

  return NextResponse.json(payload, {
    headers: { "Cache-Control": "public, max-age=10" },
  });
}
