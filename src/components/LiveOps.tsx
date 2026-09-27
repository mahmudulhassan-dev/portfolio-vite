"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Activity, Server, Cpu, HardDrive, Globe, Clock } from "lucide-react";
import { SectionHeader } from "./ui/motion";

type Snapshot = {
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

const REFRESH_MS = 15_000;

/** Pick a health colour band from a percentage: good / warn / bad. */
function health(pct: number) {
  if (pct >= 90) return { bar: "bg-red-400", text: "text-red-400", label: "Critical" };
  if (pct >= 75) return { bar: "bg-amber-400", text: "text-amber-400", label: "Elevated" };
  return { bar: "bg-cyan", text: "text-cyan", label: "Healthy" };
}

function StatCard({
  icon: Icon,
  label,
  value,
  sub,
  pct,
  delay,
}: {
  icon: typeof Cpu;
  label: string;
  value: string;
  sub?: string;
  pct?: number;
  delay: number;
}) {
  const h = pct !== undefined ? health(pct) : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.55 }}
      className="glass-card rounded-[2rem] p-7 interactive-card transition-all duration-500"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="w-11 h-11 rounded-xl bg-cyan/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-cyan" />
        </div>
        {h && (
          <span
            className={`text-[10px] font-bold uppercase tracking-widest ${h.text}`}
          >
            {h.label}
          </span>
        )}
      </div>

      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-4 mb-2">
        {label}
      </p>
      <p className="text-3xl font-bold text-text tabular-nums leading-none mb-2">
        {value}
      </p>
      {sub && <p className="text-xs text-text-3 mb-4">{sub}</p>}

      {h && (
        <div className="h-1.5 w-full rounded-full bg-surface-2 overflow-hidden mt-4">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${Math.min(pct ?? 0, 100)}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className={`h-full rounded-full ${h.bar}`}
          />
        </div>
      )}
    </motion.div>
  );
}

export default function LiveOps() {
  const [data, setData] = useState<Snapshot | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let alive = true;

    const load = async () => {
      try {
        const res = await fetch("/api/server-stats", { cache: "no-store" });
        if (!res.ok) throw new Error("stats unavailable");
        const json: Snapshot = await res.json();
        if (!alive) return;
        setData(json);
        setFailed(false);
      } catch {
        if (!alive) return;
        setFailed(true);
      }
    };

    load();
    const id = setInterval(load, REFRESH_MS);
    return () => {
      alive = false;
      clearInterval(id);
    };
  }, []);

  const load1 = data?.loadAvg?.[0];
  const loadPct =
    data && data.cpuCount > 0 && load1 !== undefined
      ? Math.min(Math.round((load1 / data.cpuCount) * 100), 100)
      : undefined;

  return (
    <section id="ops" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-5 sm:px-8">
        <SectionHeader
          badge="Live Infrastructure"
          title="Production Ops, In Real Time"
          subtitle="Not a mock-up — these numbers are read from the live server that runs this portfolio and 30+ production sites."
        />

        {failed || !data ? (
          <div className="glass-card rounded-[2rem] p-10 text-center">
            <Server className="w-8 h-8 text-text-4 mx-auto mb-4" />
            <p className="text-sm text-text-3">
              Live metrics are temporarily unavailable. The infrastructure is fine —
              this panel just can&apos;t reach it right now.
            </p>
          </div>
        ) : (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <StatCard
                icon={Cpu}
                label="CPU Load"
                value={load1 !== undefined ? load1.toFixed(2) : "—"}
                sub={`${data.cpuCount} cores · 1-min average`}
                pct={loadPct}
                delay={0}
              />
              <StatCard
                icon={Activity}
                label="Memory In Use"
                value={`${data.memUsedPct}%`}
                sub={`${(data.memUsedMb / 1024).toFixed(1)} GB of ${(
                  data.memTotalMb / 1024
                ).toFixed(0)} GB`}
                pct={data.memUsedPct}
                delay={0.1}
              />
              <StatCard
                icon={HardDrive}
                label="Disk Used"
                value={`${data.diskUsedPct}%`}
                sub={`${data.diskUsedGb} GB of ${data.diskTotalGb} GB`}
                pct={data.diskUsedPct}
                delay={0.2}
              />
              <StatCard
                icon={Globe}
                label="Sites Served"
                value={String(data.siteCount)}
                sub="Production vhosts on this host"
                delay={0.3}
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex items-center justify-center gap-2 text-[11px] text-text-4"
            >
              <Clock className="w-3.5 h-3.5" />
              Uptime {data.uptimeDays} days · refreshed every{" "}
              {REFRESH_MS / 1000}s
            </motion.p>
          </>
        )}
      </div>
    </section>
  );
}
