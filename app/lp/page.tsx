import type { Metadata } from 'next';
import CtaLink from '@/components/CtaLink';
import LeadForm from '@/components/LeadForm';
import VslVideo from '@/components/VslVideo';

export const metadata: Metadata = {
  title: 'AI Springboard | Become the director of your product story',
  description:
    'We turn complex fintech and B2B SaaS products into clear, high-converting explainer videos — scripted, produced and delivered in 7 days.',
  robots: { index: false, follow: false },
};

const VSL_SRC =
  'https://res.cloudinary.com/dm0qswvjs/video/upload/v1741770117/CloserAI_demo_ncfjxq.mov';

export default function LandingPage() {
  return (
    <div className="lp2">
      {/* ── Header ── */}
      <header className="lp2-header">
        <a className="lp2-logo" href="#top">
          <img src="/assets/ai-springboard-logo.png" alt="" />
          <span>
            AI SPRINGBOARD
            <small>AI VIDEO STUDIO</small>
          </span>
        </a>
        <nav className="lp2-nav">
          <a href="#offer">Offer</a>
          <a href="#process">Process</a>
          <a href="#proof">Proof</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="lp2-header-actions">
          <a href="#faq" className="lp2-login">
            Login
          </a>
          <CtaLink href="#lead" location="header" className="lp2-btn lp2-btn-cyan">
            Get my brief
          </CtaLink>
        </div>
      </header>

      <main id="top">
        {/* ── Hero — Director's chair ── */}
        <section className="lp2-hero">
          <p className="lp2-kicker">Director&apos;s chair</p>
          <h1>
            <span className="lp2-title-dark">BECOME YOUR</span>
            <br />
            <span className="lp2-title-cyan">AI VIDEO DIRECTOR</span>
          </h1>
          <p className="lp2-sub">
            We turn complex products into cinematic explainer videos that
            convert — script, motion, voice and sound, delivered in 7 days.
          </p>
          <div className="lp2-hero-actions">
            <CtaLink href="#lead" location="hero" className="lp2-btn lp2-btn-cyan">
              Get my video brief
            </CtaLink>
            <CtaLink
              href="#offer"
              location="hero_secondary"
              className="lp2-btn lp2-btn-ghost"
            >
              See the offer
            </CtaLink>
          </div>
          <div className="lp2-hero-visual">
            <div className="lp2-vsl-frame">
              <VslVideo src={VSL_SRC} />
            </div>
          </div>
        </section>

        {/* ── Chaos vs Clarity ── */}
        <section className="lp2-section" id="offer">
          <div className="lp2-split">
            <div className="lp2-visual lp2-visual-knot" aria-hidden="true">
              <svg viewBox="0 0 400 260" className="lp2-knot-svg">
                <defs>
                  <linearGradient id="knot" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#c86bf0" />
                    <stop offset="1" stopColor="#3fd9e0" />
                  </linearGradient>
                </defs>
                <path
                  d="M40 130 C40 60 160 60 200 130 C240 200 360 200 360 130 C360 60 240 60 200 130 C160 200 40 200 40 130 Z"
                  fill="none"
                  stroke="url(#knot)"
                  strokeWidth="34"
                  strokeLinecap="round"
                  strokeDasharray="1 8"
                />
              </svg>
            </div>
            <div className="lp2-copy">
              <h2>
                Chaos <span className="lp2-vs-inline">vs</span> Clarity
              </h2>
              <p>
                Your product is powerful — but to a cold visitor it&apos;s a
                knot of features, jargon and pricing tiers. We untangle it into
                one clear story a buyer understands in 90 seconds.
              </p>
              <CtaLink
                href="#lead"
                location="chaos"
                className="lp2-btn lp2-btn-cyan"
              >
                Untangle my product
              </CtaLink>
            </div>
          </div>
        </section>

        {/* ── VS cards ── */}
        <section className="lp2-section">
          <div className="lp2-versus">
            <article className="lp2-card lp2-card-cyan">
              <span className="lp2-card-tag">Before</span>
              <h3>The pitch that loses them</h3>
              <p>
                Ten minutes of feature tour, three tabs of documentation, and a
                &quot;let me explain how it works&quot; on every call.
              </p>
              <ul>
                <li>Visitors bounce before the value lands</li>
                <li>Ads pay for clicks that never convert</li>
                <li>Sales repeats the same intro daily</li>
              </ul>
              <CtaLink
                href="#lead"
                location="versus_before"
                className="lp2-btn lp2-btn-cyan"
              >
                Fix this
              </CtaLink>
            </article>
            <div className="lp2-vs-badge">VS</div>
            <article className="lp2-card lp2-card-magenta">
              <span className="lp2-card-tag">After</span>
              <h3>The story that sells them</h3>
              <p>
                One cinematic video that hooks, explains and closes — working
                on your page, your ads and your sales calls.
              </p>
              <ul>
                <li>Product understood in 90 seconds</li>
                <li>Ad traffic finally converts</li>
                <li>Calls start with &quot;how do we start?&quot;</li>
              </ul>
              <CtaLink
                href="#lead"
                location="versus_after"
                className="lp2-btn lp2-btn-magenta"
              >
                Get this
              </CtaLink>
            </article>
          </div>
        </section>

        {/* ── Persuasion Iceberg ── */}
        <section className="lp2-section">
          <div className="lp2-split lp2-split-reverse">
            <div className="lp2-copy">
              <h2>
                Persuasion
                <br />
                Iceberg
              </h2>
              <p>
                The script is 20% of what makes a video convert. The rest is
                invisible: pacing, sound, proof timing and the exact frame your
                buyer doubts you. That&apos;s where we work.
              </p>
            </div>
            <div className="lp2-visual lp2-visual-iceberg">
              <svg viewBox="0 0 300 260" className="lp2-iceberg-svg" aria-hidden="true">
                <polygon points="150,20 195,80 170,95 150,70 130,95 105,80" fill="#d9f2f5" opacity=".9" />
                <polygon points="150,60 210,130 240,190 150,250 60,190 90,130" fill="#1c5f8a" opacity=".85" />
                <line x1="30" y1="95" x2="270" y2="95" stroke="#3fd9e0" strokeWidth="1" strokeDasharray="4 4" opacity=".7" />
              </svg>
              <ul className="lp2-annotations">
                <li>
                  <b>Hook</b> — first 3 seconds decide everything
                </li>
                <li>
                  <b>Problem framing</b> — the pain they already feel
                </li>
                <li>
                  <b>Mechanism</b> — why your way works
                </li>
                <li>
                  <b>Proof &amp; CTA</b> — doubt handled, action taken
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── Empire of Bricks ── */}
        <section className="lp2-section" id="proof">
          <div className="lp2-split">
            <div className="lp2-copy">
              <h2>
                Empire
                <br />
                of Bricks
              </h2>
              <p>
                One production, an entire system of assets. Your hero video,
                three ad cutdowns, thumbnails and the script — a fortress of
                content built in a single week.
              </p>
              <CtaLink
                href="#lead"
                location="empire"
                className="lp2-btn lp2-btn-cyan"
              >
                Build my assets
              </CtaLink>
            </div>
            <div className="lp2-visual lp2-visual-empire" aria-hidden="true">
              <div className="lp2-empire-grid">
                <div className="lp2-tile lp2-tile-main">HERO VIDEO</div>
                <div className="lp2-tile">15s CUT</div>
                <div className="lp2-tile">30s CUT</div>
                <div className="lp2-tile">60s CUT</div>
                <div className="lp2-tile">SCRIPT</div>
                <div className="lp2-tile">THUMBS</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="lp2-section" id="faq">
          <div className="lp2-faq">
            <h2>
              Know before
              <br />
              you direct.
            </h2>
            <div className="faq-list">
              <details>
                <summary>How fast is it really?</summary>
                <p>
                  Seven calendar days from brief validation to final delivery.
                  You approve the script before production starts.
                </p>
              </details>
              <details>
                <summary>Do I need footage of my product?</summary>
                <p>
                  Screen recordings help but aren&apos;t required — we can work
                  from your UI, a demo account or existing assets.
                </p>
              </details>
              <details>
                <summary>What does it cost?</summary>
                <p>
                  Scope-dependent. Leave your email and we&apos;ll send the
                  rate card plus available production slots.
                </p>
              </details>
              <details>
                <summary>Who owns the result?</summary>
                <p>
                  You do — full commercial rights on every asset, script
                  included.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* ── Lead ── */}
        <section className="lp2-section lp2-lead" id="lead">
          <div className="lead-card">
            <p className="eyebrow">Limited production slots</p>
            <h2>
              Take the <em>director&apos;s seat.</em>
            </h2>
            <p>
              Leave your work email — we&apos;ll send the rate card and the
              next available production slot.
            </p>
            <LeadForm />
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="lp2-footer">
        <div>
          <strong>AI Springboard</strong>
          <p>
            Cinematic explainer videos for fintech and B2B SaaS teams.
            Delivered in 7 days.
          </p>
        </div>
        <div>
          <span>Company</span>
          <a href="/">Home</a>
          <a href="/articles">Articles</a>
          <a href="/video-analyze">Video analyzer</a>
        </div>
        <div>
          <span>Contact</span>
          <a href="mailto:hello@aispringboard.com">hello@aispringboard.com</a>
          <p>© 2026 AI Springboard</p>
        </div>
      </footer>
    </div>
  );
}
