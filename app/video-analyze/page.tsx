import type { Metadata } from 'next';
import LandingInteractions from '@/components/LandingInteractions';
import ScanForm from '@/components/ScanForm';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';

export const metadata: Metadata = {
  title: 'AI Springboard | Conversion Leak Scanner',
  description:
    'Find the conversion leaks in your marketing video before buyers do. AI-powered business audit for fintech, crypto, SaaS and B2B technology teams.',
};

export default function VideoAnalyzePage() {
  return (
    <>
      <div className="page-glow page-glow-one" />
      <div className="page-glow page-glow-two" />

      <SiteHeader
        tagline="CONVERSION INTELLIGENCE"
        nav={[
          { href: '#how-it-works', label: 'How it works' },
          { href: '#faq', label: 'FAQ' },
        ]}
        cta={{ href: '#analyzer', label: 'Scan your video' }}
      />

      <main id="top">
        <section className="hero section-shell">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="pulse-dot" /> Conversion intelligence for
              ambitious teams
            </p>
            <h1>
              Find the leaks
              <br />
              <em>before buyers do.</em>
            </h1>
            <p className="hero-text">
              The AI-powered Conversion Leak Scanner reveals why your marketing
              video loses potential buyers before they convert.
            </p>
          </div>
        </section>

        <section className="analyzer section-shell" id="analyzer">
          <ScanForm />
        </section>

        <section
          className="how-it-works section-shell section-padding"
          id="how-it-works"
        >
          <div className="section-heading centered-heading">
            <p className="eyebrow">Simple &amp; focused</p>
            <h2>
              How it <em>works.</em>
            </h2>
          </div>
          <div className="steps-grid">
            <article>
              <span>01</span>
              <div>
                <small>STEP ONE</small>
                <h3>Paste your video</h3>
                <p>
                  Share the YouTube URL of the marketing video you want to
                  understand.
                </p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <small>STEP TWO</small>
                <h3>We read the message</h3>
                <p>
                  The scanner reviews the hook, problem, agitation, solution
                  and CTA structure.
                </p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <small>STEP THREE</small>
                <h3>Find your leaks</h3>
                <p>
                  Get a focused report showing what may stop buyers from
                  converting.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="faq section-shell section-padding" id="faq">
          <div className="section-heading centered-heading">
            <p className="eyebrow">Questions, answered</p>
            <h2>
              Know before
              <br />
              <em>you scan.</em>
            </h2>
          </div>
          <div className="faq-list">
            <details>
              <summary>Is this an editing quality score?</summary>
              <p>
                No. The scanner focuses on business consequences: clarity,
                trust, attention, product understanding and CTA friction.
              </p>
            </details>
            <details>
              <summary>What do I receive in the free report?</summary>
              <p>
                You receive the overall readiness score, buyer loss risk and
                the first three conversion leaks detected. Additional
                opportunities remain available in the full blueprint.
              </p>
            </details>
            <details>
              <summary>Can I scan a YouTube video?</summary>
              <p>Yes. The first version is designed around a YouTube URL.</p>
            </details>
            <details>
              <summary>Does it replace a marketing strategist?</summary>
              <p>
                No. It gives your team a structured first-pass audit so
                strategic attention goes to the highest-impact issues first.
              </p>
            </details>
          </div>
        </section>

        <section className="final-cta section-shell">
          <p className="eyebrow">
            Your next conversion is hiding in plain sight
          </p>
          <h2>
            Stop guessing why
            <br />
            <em>your video underperforms.</em>
          </h2>
          <a className="button button-primary" href="#analyzer">
            Find my conversion leaks <span>↗</span>
          </a>
        </section>
      </main>

      <SiteFooter
        tagline="CONVERSION INTELLIGENCE"
        baseline="Make every second sell."
      />
      <LandingInteractions />
    </>
  );
}
