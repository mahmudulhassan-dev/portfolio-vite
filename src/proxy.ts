import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// In-memory store (Note: limited to current edge isolate, but effective against single-client bursts)
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();

const LIMIT = 10; // max 10 requests
const WINDOW = 60 * 1000; // 1 minute window

export function proxy(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
  const url = request.nextUrl.pathname;

  // Only rate-limit AI and Contact API routes
  if (url.startsWith('/api/chat') || url.startsWith('/api/contact')) {
    const now = Date.now();
    const key = `${ip}:${url}`;
    const rateData = rateLimitMap.get(key) || { count: 0, lastReset: now };

    // Reset window if expired
    if (now - rateData.lastReset > WINDOW) {
      rateData.count = 0;
      rateData.lastReset = now;
    }

    rateData.count++;
    rateLimitMap.set(key, rateData);

    if (rateData.count > LIMIT) {
      return new NextResponse(
        JSON.stringify({ error: 'Too many requests. Please try again in 1 minute.' }),
        { status: 429, headers: { 'Content-Type': 'application/json' } }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};
