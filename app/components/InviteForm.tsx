'use client';

import { useState } from 'react';
import { MEMBERSHIP_EMAIL } from '@/lib/site';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function InviteForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const f = new FormData(form);
    setStatus('sending');
    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: f.get('name'),
          email: f.get('email'),
          phone: f.get('phone'),
          company: f.get('company'),
          position: f.get('role'),
          referredBy: f.get('proposer'),
          interest: f.get('interest'),
          note: f.get('note'),
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
    <form id="invite-form" onSubmit={onSubmit}>
      <div className="field"><label htmlFor="f-name">Full name</label><input id="f-name" name="name" autoComplete="name" required /></div>
      <div className="field"><label htmlFor="f-email">Email</label><input id="f-email" name="email" type="email" autoComplete="email" required /></div>
      <div className="field"><label htmlFor="f-phone">Phone</label><input id="f-phone" name="phone" type="tel" autoComplete="tel" required /></div>
      <div className="field"><label htmlFor="f-company">Company</label><input id="f-company" name="company" autoComplete="organization" /></div>
      <div className="field"><label htmlFor="f-role">Position</label><input id="f-role" name="role" autoComplete="organization-title" /></div>
      <div className="field"><label htmlFor="f-proposer">Proposed by (member&apos;s name)</label><input id="f-proposer" name="proposer" /></div>
      <div className="field wide"><label htmlFor="f-interest">What brings you to the house</label>
        <select id="f-interest" name="interest" defaultValue="All three">
          <option>Business</option><option>Social</option><option>Recovery</option><option>All three</option>
        </select>
      </div>
      <div className="field wide"><label htmlFor="f-note">Anything we should know</label><textarea id="f-note" name="note" rows={2} /></div>
      <input className="hp" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="field wide" style={{ alignItems: 'flex-start' }}>
        <button className="btn" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending' : 'Request an invitation'}
        </button>
      </div>
      {status === 'sent' && (
        <p className="sent" role="status">Thank you. Your request has been received. The membership team will be in touch.</p>
      )}
      {status === 'error' && (
        <p className="form-error" role="alert">
          Your request was not sent. Please try again, or write to {MEMBERSHIP_EMAIL}.
        </p>
      )}
    </form>
  );
}
