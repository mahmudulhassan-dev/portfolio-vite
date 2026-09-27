import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

/**
 * Supabase is optional at build time.
 *
 * `createClient("", "")` throws during `next build` (page-data collection), which
 * breaks the whole build even though most of the site never touches the database.
 * Exporting `null` instead lets the site build and run; the routes that genuinely
 * need persistence return a clear 503 rather than crashing the server.
 */
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseKey);

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseKey)
  : null;
