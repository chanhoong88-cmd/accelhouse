import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

export const dynamic = 'force-dynamic';

const s = (v: unknown, max: number) => (v ? String(v).trim().slice(0, max) : '');

// Saves a request into the same Supabase "applications" table the accel-elite.asia
// admin panel reads, then emails the membership team. The table has no columns for
// company, position or interest, so those are written at the top of the note.
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body) return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  if (body.website) return NextResponse.json({ ok: true }); // hidden field: only bots fill it

  const fullName = s(body.fullName, 200);
  const email = s(body.email, 200);
  const phone = s(body.phone, 60);
  if (!fullName || !email || !phone) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    console.error('apply: Supabase keys are not set on this site');
    return NextResponse.json({ error: 'Not configured' }, { status: 503 });
  }

  const company = s(body.company, 200);
  const position = s(body.position, 200);
  const interest = s(body.interest, 60);
  const referredBy = s(body.referredBy, 200);
  const about = s(body.note, 1600);
  const note = [
    'Source: accelhouse.com',
    company && `Company: ${company}`,
    position && `Position: ${position}`,
    interest && `Interest: ${interest}`,
    about && `\n${about}`
  ]
    .filter(Boolean)
    .join('\n');

  const supabase = createClient(url, key, { auth: { autoRefreshToken: false, persistSession: false } });
  const { error } = await supabase.from('applications').insert({
    full_name: fullName,
    email,
    phone,
    referred_by: referredBy || null,
    note
  });
  if (error) {
    console.error('apply: applications insert failed', error);
    return NextResponse.json({ error: 'Could not save application' }, { status: 500 });
  }

  // Email is best-effort: the request is already saved and visible in the admin panel.
  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: process.env.APPLICATIONS_FROM_EMAIL || 'Accel Elite <onboarding@resend.dev>',
        to: process.env.APPLICATIONS_NOTIFY_EMAIL || 'membership@accel-elite.asia',
        replyTo: email,
        subject: `New invitation request: ${fullName}`,
        text: [
          `Name: ${fullName}`,
          `Email: ${email}`,
          `Phone: ${phone}`,
          `Proposed by: ${referredBy || '-'}`,
          '',
          note
        ].join('\n')
      });
    } catch (e) {
      console.error('apply: notification email failed', e);
    }
  }

  return NextResponse.json({ ok: true });
}
