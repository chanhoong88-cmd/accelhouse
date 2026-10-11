import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const dynamic = 'force-dynamic';

const s = (v: unknown, max: number) => (v ? String(v).trim().slice(0, max) : '');

// Contact messages are emailed to the team. Nothing is stored in the database.
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body) return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  if (body.website) return NextResponse.json({ ok: true }); // hidden field: only bots fill it

  const name = s(body.name, 200);
  const email = s(body.email, 200);
  const message = s(body.message, 4000);
  const subject = s(body.subject, 80) || 'General enquiry';
  const phone = s(body.phone, 60);
  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }
  if (!process.env.RESEND_API_KEY) {
    console.error('contact: RESEND_API_KEY is not set on this site');
    return NextResponse.json({ error: 'Not configured' }, { status: 503 });
  }

  const to =
    subject === 'Membership'
      ? process.env.APPLICATIONS_NOTIFY_EMAIL || 'membership@accel-elite.asia'
      : process.env.CONTACT_NOTIFY_EMAIL || 'enquiry@accel-elite.asia';

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: process.env.APPLICATIONS_FROM_EMAIL || 'Accel House <onboarding@resend.dev>',
      to,
      replyTo: email,
      subject: `Accel House enquiry (${subject}): ${name}`,
      text: [`Name: ${name}`, `Email: ${email}`, `Phone: ${phone || '-'}`, `Subject: ${subject}`, '', message].join('\n')
    });
    if (error) throw error;
  } catch (e) {
    console.error('contact: email failed', e);
    return NextResponse.json({ error: 'Could not send message' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
