/**
 * Supabase Configuration
 *
 * Setup instructions:
 * 1. Create a project at https://supabase.com
 * 2. Copy the project URL and anon key
 * 3. Create a .env.local file with:
 *    NEXT_PUBLIC_SUPABASE_URL=your-project-url
 *    NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
 *    SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
 *
 * 4. Install Supabase:
 *    npm install @supabase/supabase-js
 *
 * 5. Uncomment the code below
 */

// import { createClient } from '@supabase/supabase-js';
//
// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
//
// export const supabase = createClient(supabaseUrl, supabaseAnonKey);
//
// // Server-side client with service role
// export function createServerClient() {
//   return createClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.SUPABASE_SERVICE_ROLE_KEY!,
//     { auth: { autoRefreshToken: false, persistSession: false } }
//   );
// }

export const SUPABASE_READY = false;
