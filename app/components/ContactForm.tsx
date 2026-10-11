'use client';

import { useState } from 'react';
import { ENQUIRY_EMAIL } from '@/lib/site';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const f = new FormData(form);
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: f.get('name'),
          email: f.get('email'),
          phone: f.get('phone'),
          subject: f.get('subject'),
          message: f.get('message'),
          website: f.get('website')
        })
      });
      if (!res.ok) throw new Error('failed');
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <form id="contact-form" onSubmit={onSubmit}>
      <div className="field"><label htmlFor="c-name">Full name</label><input id="c-name" name="name" autoComplete="name" required /></div>
      <div className="field"><label htmlFor="c-email">Email</label><input id="c-email" name="email" type="email" autoComplete="email" required /></div>
      <div className="field"><label htmlFor="c-phone">Phone (optional)</label><input id="c-phone" name="phone" type="tel" autoComplete="tel" /></div>
      <div className="field"><label htmlFor="c-subject">Subject</label>
        <select id="c-subject" name="subject" defaultValue="General enquiry">
          <option>General enquiry</option><option>Membership</option><option>Accel Collection</option>
          <option>Private events and dining</option><option>Partnerships and press</option>
        </select>
      </div>
      <div className="field wide"><label htmlFor="c-msg">Message</label><textarea id="c-msg" name="message" rows={4} required /></div>
      <input className="hp" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="field wide" style={{ alignItems: 'flex-start' }}>
        <button className="btn" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending' : 'Send message'}
        </button>
      </div>
      {status === 'sent' && (
        <p className="sent" role="status">Thank you. Your message has been received. Our team will be in touch.</p>
      )}
      {status === 'error' && (
        <p className="form-error" role="alert">
          Your message was not sent. Please try again, or write to {ENQUIRY_EMAIL}.
        </p>
      )}
    </form>
  );
}
