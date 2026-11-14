'use client';

import { useRef } from 'react';
import { trackInternal } from '@/lib/tracking/trackEvent';

/**
 * Portage du formulaire #scan-form de script.js (démo front, pas de backend).
 */
export default function ScanForm() {
  const resultRef = useRef<HTMLDivElement>(null);
  const urlRef = useRef<HTMLInputElement>(null);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const scanResult = resultRef.current;
    if (!scanResult) return;
    const loader = scanResult.querySelector('.result-loader');
    const message = scanResult.querySelector('.result-message');
    const hasUrl = urlRef.current?.value.trim();

    scanResult.classList.add('visible');
    if (!hasUrl) {
      if (loader) loader.textContent = 'ADD A VIDEO TO BEGIN';
      if (message)
        message.textContent =
          'Paste a YouTube URL or upload a video to surface the moments most likely to lose a buyer.';
      return;
    }

    trackInternal('scan_submit', { source: 'video_analyze' });
    if (loader) loader.textContent = 'RUNNING CONVERSION RULES •••';
    if (message)
      message.textContent =
        'Extracting buyer signals: hook, clarity, trust, attention and CTA timing…';
    window.setTimeout(() => {
      if (loader) loader.textContent = 'FIRST-PASS ANALYSIS READY';
      if (message)
        message.innerHTML =
          '<strong>3 conversion leaks detected.</strong> Your free preview is ready below. Unlock the complete report for all recommendations, the rewritten script and storyboard blueprint.';
      document
        .querySelector('#report')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 950);
  }

  return (
    <>
      <form className="scan-form" id="scan-form" onSubmit={onSubmit}>
        <div className="input-wrap">
          <span>↗</span>
          <input
            ref={urlRef}
            id="video-url"
            type="url"
            placeholder="Paste your YouTube URL"
            aria-label="YouTube URL"
          />
        </div>
        <button className="button button-primary" type="submit">
          Scan for leaks <span>↗</span>
        </button>
      </form>
      <p className="form-note">
        <span>●</span> No editing critique. Just business consequences and what
        to fix first.
      </p>
      <div className="scan-result" id="scan-result" ref={resultRef} aria-live="polite">
        <div className="result-loader">
          RUNNING CONVERSION RULES <span>•••</span>
        </div>
        <div className="result-message" />
      </div>
    </>
  );
}
