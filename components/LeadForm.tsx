'use client';

import { useState } from 'react';
import { trackEvent, trackLead } from '@/lib/tracking/trackEvent';
import { getConsent } from '@/lib/consent';
import { getVisitorId } from '@/lib/tracking/visitor';
import { getUtm } from '@/lib/tracking/utm';

export default function LeadForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>(
    'idle',
  );

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const value = email.trim();
    if (!value || status === 'loading') return;

    setStatus('loading');
    trackEvent('lead_submit', { source: 'sales_page' });

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: value,
          visitorId: getConsent() === 'accepted' ? getVisitorId() : null,
          utm: getUtm(),
        }),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus('done');
      trackLead({ source: 'sales_page' });
    } catch {
      setStatus('error');
      trackEvent('lead_error', { source: 'sales_page' });
    }
  }

  if (status === 'done') {
    return (
      <p className="lead-success">
        You&apos;re in. We&apos;ll reach out shortly with next steps.
      </p>
    );
  }

  return (
    <>
      <form className="lead-form" onSubmit={onSubmit}>
        <div className="input-wrap">
          <span>↗</span>
          <input
            type="email"
            required
            placeholder="Your work email"
            aria-label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          className="button button-primary"
          type="submit"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Sending…' : 'Get started'} <span>↗</span>
        </button>
      </form>
      {status === 'error' && (
        <p className="lead-error">Something went wrong — please try again.</p>
      )}
    </>
  );
}
