import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const dynamic = 'force-dynamic';

// Setup check. Open /api/health in a browser to see which settings this site can
// read. It only ever answers "set" or "missing" and never shows a value.
export async function GET() {
  const has = (k: string) => (process.env[k] && process.env[k]!.trim() ? 'set' : 'missing');
  const url = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').trim();
  const key = (process.env.SUPABASE_SERVICE_ROLE_KEY || '').trim();

  let database = 'not tested: the two Supabase settings are needed first';
  if (url && key) {
    if (!/^https:\/\/.+\.supabase\.co\/?$/.test(url)) {
      database = 'problem: NEXT_PUBLIC_SUPABASE_URL should look like https://xxxx.supabase.co';
    } else {
      try {
        const supabase = createClient(url, key, { auth: { autoRefreshToken: false, persistSession: false } });
        const { error } = await supabase.from('applications').select('id', { count: 'exact', head: true });
        database = error ? `problem: ${error.message}` : 'connected: the applications list can be reached';
      } catch (e) {
        database = `problem: ${e instanceof Error ? e.message : 'could not connect'}`;
      }
    }
  }

  return NextResponse.json({
    settings: {
      NEXT_PUBLIC_SUPABASE_URL: has('NEXT_PUBLIC_SUPABASE_URL'),
      SUPABASE_SERVICE_ROLE_KEY: has('SUPABASE_SERVICE_ROLE_KEY'),
      RESEND_API_KEY: has('RESEND_API_KEY'),
      APPLICATIONS_FROM_EMAIL: has('APPLICATIONS_FROM_EMAIL'),
      APPLICATIONS_NOTIFY_EMAIL: has('APPLICATIONS_NOTIFY_EMAIL'),
      CONTACT_NOTIFY_EMAIL: has('CONTACT_NOTIFY_EMAIL')
    },
    database,
    environment: process.env.VERCEL_ENV || 'local'
  });
}
