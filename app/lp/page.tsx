import type { Metadata } from 'next';
import CtaLink from '@/components/CtaLink';
import LeadForm from '@/components/LeadForm';
import VslVideo from '@/components/VslVideo';

export const metadata: Metadata = {
  title: 'AI Viral School | Become an AI director',
  description:
    'Turn a written script into a ready-to-publish video in as little as 15 minutes — no studio, no filming, no retakes.',
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
            AI VIRAL SCHOOL
            <small>AI VIDEO STUDIO</small>
          </span>
        </a>
        <nav className="lp2-nav">
          <a href="#problem">Problem</a>
          <a href="#solution">Solution</a>
          <a href="#offer">Offer</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="lp2-header-actions">
          <a href="#faq" className="lp2-login">
            Login
          </a>
          <CtaLink href="#lead" location="header" className="lp2-btn lp2-btn-cyan">
            Get started now
          </CtaLink>
        </div>
      </header>

      <main id="top">
        {/* ── Hero — Director's chair (ATTENTION) ── */}
        <section className="lp2-hero">
          <p className="lp2-kicker">Director&apos;s chair</p>
          <h1>
            <span className="lp2-title-dark">YOUR VIDEO PRODUCTION</span>
            <br />
            <span className="lp2-title-cyan">IS HOLDING YOU BACK</span>
          </h1>
          <p className="lp2-sub">
            If you still need to spend three full days locked in a studio just
            to record a 20-minute VSL, your sales funnel is already falling
            behind.
          </p>
          <div className="lp2-hero-actions">
            <CtaLink href="#lead" location="hero" className="lp2-btn lp2-btn-cyan">
              Get started now
            </CtaLink>
            <CtaLink
              href="#solution"
              location="hero_secondary"
              className="lp2-btn lp2-btn-ghost"
            >
              See how it works
            </CtaLink>
          </div>
          <div className="lp2-hero-visual">
            <div className="lp2-vsl-frame">
              <VslVideo src={VSL_SRC} />
            </div>
          </div>
        </section>

        {/* ── Chaos vs Clarity (INTEREST) ── */}
        <section className="lp2-section" id="problem">
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
                Manual <span className="lp2-vs-inline">vs</span> Automated
              </h2>
              <p className="lp2-lead-in">
                The real problem isn&apos;t your equipment.
              </p>
              <p>
                Every day you delay filming is another day your sales funnel
                isn&apos;t working at its full potential. Delayed launches mean
                lost revenue, text-only pages leave money on the table, and the
                production grind — camera anxiety, retakes, complicated setups —
                slows your growth.
              </p>
              <p>
                Better gear won&apos;t fix it. You don&apos;t need to become a
                better video producer —{' '}
                <strong>you need a smarter production system.</strong>
              </p>
              <CtaLink
                href="#lead"
                location="chaos"
                className="lp2-btn lp2-btn-cyan"
              >
                Untangle my production
              </CtaLink>
            </div>
          </div>
        </section>

        {/* ── VS cards (Before vs After) ── */}
        <section className="lp2-section">
          <div className="lp2-versus">
            <article className="lp2-card lp2-card-magenta">
              <span className="lp2-card-tag">Traditional Production</span>
              <h3>TRADITIONAL</h3>
              <p>
                Days of studio time, expensive gear, editor queues — for a
                single video.
              </p>
              <ul>
                <li>2–4 days per VSL</li>
                <li>€1,800–€3,000 per video</li>
                <li>2–3% conversion on text pages</li>
                <li>Camera anxiety &amp; endless retakes</li>
              </ul>
            </article>
            <div className="lp2-vs-badge">VS</div>
            <article className="lp2-card lp2-card-cyan">
              <span className="lp2-card-tag">AI Video Engine</span>
              <h3>THE NEW ERA SYSTEM</h3>
              <p>
                Script in, video out — automated from first word to published
                file.
              </p>
              <ul>
                <li>As little as 15 minutes per VSL</li>
                <li>Primarily software/export costs</li>
                <li>10–15% conversion on dynamic VSL pages</li>
                <li>No filming, no editing, no retakes</li>
              </ul>
              <CtaLink
                href="#lead"
                location="versus_after"
                className="lp2-btn lp2-btn-cyan"
              >
                Switch to AI
              </CtaLink>
            </article>
          </div>
          <p className="lp2-disclaimer">
            Illustrative benchmarks based on the referenced performance
            figures. Individual results will vary.
          </p>
        </section>

        {/* ── Persuasion Iceberg (DESIRE) ── */}
        <section className="lp2-section" id="solution">
          <div className="lp2-split lp2-split-reverse">
            <div className="lp2-copy">
              <h2>
                THE AI
                <br />
                ENGINE
              </h2>
              <p className="lp2-lead-in">
                Meet your AI-powered video production engine.
              </p>
              <p>
                Turn a written script into a professional, ready-to-publish
                video in as little as 15 minutes. No studio. No filming
                sessions. No retakes — just your script, your AI avatar, and a
                video ready for your campaigns.
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
                  <b>Step 1</b> — upload your script or product URL
                </li>
                <li>
                  <b>Step 2</b> — generate your AI avatar and voice
                </li>
                <li>
                  <b>Step 3</b> — generate and export your video
                </li>
                <li>
                  <b>Result</b> — HD visuals, voiceover, subtitles
                </li>
              </ul>
            </div>
          </div>

          <div className="lp2-numbers">
            <div className="lp2-num-grid">
              <div>
                <strong>-80%</strong>
                <span>video production costs</span>
              </div>
              <div>
                <strong>24–48h</strong>
                <span>to spot winning creatives (5 variations)</span>
              </div>
              <div>
                <strong>10–15%</strong>
                <span>conversion vs 2–3% text pages</span>
              </div>
            </div>
            <p className="lp2-disclaimer">
              Actual results depend on your offer, audience, creative quality,
              traffic source, and implementation.
            </p>
          </div>

          <div className="lp2-stop">
            <h3 className="lp2-h3" style={{ textAlign: 'left' }}>
              STOP wasting time on outdated production methods
            </h3>
            <ul>
              <li>
                Stop investing thousands in audiovisual equipment. Better
                cameras won&apos;t eliminate the filming process.
              </li>
              <li>
                Stop relying entirely on freelance video editors. Waiting 7–14
                days makes rapid creative testing difficult.
              </li>
              <li>
                Stop using static slides with voiceovers. Limited engagement
                loses your prospect&apos;s attention.
              </li>
            </ul>
          </div>
        </section>

        {/* ── Empire of Bricks (ACTION) ── */}
        <section className="lp2-section" id="offer">
          <div className="lp2-split">
            <div className="lp2-copy">
              <h2>
                Empire
                <br />
                of Bricks
              </h2>
              <p className="lp2-lead-in">
                Stop paying the price of doing nothing.
              </p>
              <p>
                Every day you rely on manual production, you accept costs far
                beyond the price of a video — for infopreneurs: lost hours,
                delayed launches, starving funnels. For agencies: fatigued
                creatives, doubling CPA, clients lost to faster competitors.
              </p>
              <p>
                The real cost isn&apos;t what you spend —{' '}
                <strong>
                  it&apos;s what your business loses while you&apos;re still
                  doing it manually.
                </strong>
              </p>
              <CtaLink
                href="#lead"
                location="empire"
                className="lp2-btn lp2-btn-cyan"
              >
                Automate my production
              </CtaLink>
            </div>
            <div className="lp2-visual lp2-visual-empire" aria-hidden="true">
              <div className="lp2-empire-grid">
                <div className="lp2-tile lp2-tile-main">INFOPRENEURS</div>
                <div className="lp2-tile">Hours lost filming</div>
                <div className="lp2-tile">Delayed launches</div>
                <div className="lp2-tile">Weak funnels</div>
                <div className="lp2-tile lp2-tile-main">AGENCIES</div>
                <div className="lp2-tile">Ad fatigue</div>
                <div className="lp2-tile">Rising CPA</div>
                <div className="lp2-tile">Slow testing</div>
              </div>
            </div>
          </div>

          <div className="lp2-guarantee">
            <span className="lp2-guarantee-badge">30-day guarantee</span>
            <h3>Try it risk-free</h3>
            <p>
              If your video production speed isn&apos;t multiplied by at least
              5x, you can request a refund within 30 days, subject to the
              applicable guarantee terms. No unnecessary risk — just a faster
              way to create videos.
            </p>
          </div>

          <div className="lp2-scarcity">
            <p>
              <strong>Limited monthly availability.</strong> Onboarding is
              limited to a selected number of businesses each month to ensure
              proper AI avatar setup. Don&apos;t wait until your competitors
              produce five times more content while you&apos;re still
              scheduling your next filming session.
            </p>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="lp2-section" id="faq">
          <div className="lp2-faq">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              <details>
                <summary>Will my AI avatar look fake or robotic?</summary>
                <p>
                  Not with today&apos;s latest-generation avatar technology.
                  Advanced solutions can create highly realistic digital
                  replicas from a video sample as short as 15 seconds —
                  synchronized lip movements, facial expressions and natural
                  delivery.
                </p>
              </details>
              <details>
                <summary>
                  Could AI-generated videos get rejected by ad platforms?
                </summary>
                <p>
                  Videos are generated in formats designed to meet the
                  technical specs of major platforms including Meta, TikTok and
                  Google. Acceptance depends on each platform&apos;s current
                  policies, disclosure requirements and content guidelines.
                </p>
              </details>
              <details>
                <summary>Do I need technical or editing skills?</summary>
                <p>
                  Absolutely not. Enter your text, configure your avatar, and
                  let the system handle generation. No editing software
                  expertise required.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* ── YOUR NEXT MOVE ── */}
        <section className="lp2-section lp2-lead" id="lead">
          <div className="lead-card">
            <p className="eyebrow">Your next move</p>
            <h2>
              Your next VSL shouldn&apos;t take <em>three days.</em>
              <br />
              It should take <em>minutes.</em>
            </h2>
            <p>
              Automate your video production, launch faster, test more
              creatives, and scale without being held back by a camera.
            </p>
            <LeadForm />
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="lp2-footer">
        <div>
          <strong>AI Viral School</strong>
          <p>
            AI-powered video production for infopreneurs and marketing
            agencies. From script to published video in minutes.
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
          <p>© 2026 AI Viral School</p>
        </div>
      </footer>
    </div>
  );
}
