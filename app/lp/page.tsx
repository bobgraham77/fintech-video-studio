import type { Metadata } from 'next';
import CtaLink from '@/components/CtaLink';
import LeadForm from '@/components/LeadForm';
import VslVideo from '@/components/VslVideo';

export const metadata: Metadata = {
  title: 'AI Viral School | Never run out of ad creatives again',
  description:
    'Generate 30+ fresh video ad variations without hiring more editors, managing UGC creators, or waiting weeks for new content.',
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
            Get access now
          </CtaLink>
        </div>
      </header>

      <main id="top">
        {/* ── Hero (ATTENTION) ── */}
        <section className="lp2-hero">
          <p className="lp2-kicker">For agencies</p>
          <h1>
            <span className="lp2-title-dark">NEVER RUN OUT OF</span>
            <br />
            <span className="lp2-title-cyan">AD CREATIVES AGAIN</span>
          </h1>
          <p className="lp2-sub">
            Generate 30+ fresh video ad variations without hiring more
            editors, managing UGC creators, or waiting weeks for new content.
          </p>
          <div className="lp2-hero-actions">
            <CtaLink href="#lead" location="hero" className="lp2-btn lp2-btn-cyan">
              Get access now
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

        {/* ── Manual vs Automated (INTEREST) ── */}
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
                The problem isn&apos;t your targeting. It&apos;s your creatives.
              </p>
              <p>
                Every successful ad has a limited lifespan. As audiences
                repeatedly see the same creatives, they become desensitized —
                and performance drops fast:
              </p>
              <ul className="lp2-pain-list">
                <li>
                  <b>Declining purchase intent</b> — above 3.0 impressions per
                  user, purchase probability can decrease by 4.1%.
                </li>
                <li>
                  <b>Lower click-through rates</b> — repeated exposure can
                  reduce CTR by as much as 33%.
                </li>
                <li>
                  <b>Rising acquisition costs</b> — CPC can increase by 20%
                  while CPA climbs dramatically.
                </li>
                <li>
                  <b>Operational bottlenecks</b> — hours spent coordinating
                  UGC creators, freelancers and revisions.
                </li>
              </ul>
              <p>
                Meanwhile, your clients still expect consistent ROAS. You can&apos;t
                scale creative testing if you can&apos;t scale creative
                production.{' '}
                <strong>
                  You&apos;re running an automated advertising business with a
                  manual creative process.
                </strong>
              </p>
              <CtaLink
                href="#lead"
                location="chaos"
                className="lp2-btn lp2-btn-cyan"
              >
                Fix my production
              </CtaLink>
            </div>
          </div>
        </section>

        {/* ── VS cards ── */}
        <section className="lp2-section">
          <div className="lp2-versus">
            <article className="lp2-card lp2-card-magenta">
              <span className="lp2-card-tag">Traditional Agency Workflow</span>
              <h3>TRADITIONAL</h3>
              <p>
                UGC queues, editor backlogs and creatives that die before the
                next batch arrives.
              </p>
              <ul>
                <li>Creative refresh every 2–3 weeks</li>
                <li>7–14 business days per UGC video</li>
                <li>CTR declining up to 33% with fatigue</li>
                <li>CPA climbing 20–100% on tired creatives</li>
                <li>Testing limited by production resources</li>
              </ul>
            </article>
            <div className="lp2-vs-badge">VS</div>
            <article className="lp2-card lp2-card-cyan">
              <span className="lp2-card-tag">AI Creative Production</span>
              <h3>THE NEW SYSTEM</h3>
              <p>
                Script in, video out — a continuous engine for fresh hooks,
                faces and angles.
              </p>
              <ul>
                <li>Continuous refresh, every 24–48 hours</li>
                <li>Less than 60 minutes per creative</li>
                <li>Frequent testing of hooks and variations</li>
                <li>Up to 80% lower production costs</li>
                <li>Scalable generation of multiple variations</li>
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
            These figures represent referenced benchmarks and operational
            targets, not guaranteed campaign outcomes.
          </p>
        </section>

        {/* ── The AI Engine (DESIRE) ── */}
        <section className="lp2-section" id="solution">
          <div className="lp2-split lp2-split-reverse">
            <div className="lp2-copy">
              <h2>
                THE AI
                <br />
                ENGINE
              </h2>
              <p className="lp2-lead-in">
                Your AI-powered creative production engine.
              </p>
              <p>
                Turn a product URL or advertising script into a ready-to-launch
                video creative in less than 60 minutes — without coordinating
                UGC creators, waiting for editors, or managing endless
                production requests. One product. Multiple angles. Multiple
                faces. Endless creative possibilities.
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
                  <b>Step 1</b> — paste your client&apos;s URL or script
                </li>
                <li>
                  <b>Step 2</b> — generate AI actors and voices per persona,
                  angle and hook
                </li>
                <li>
                  <b>Step 3</b> — export ready-to-launch ad formats
                </li>
                <li>
                  <b>Result</b> — concept to creative without filming or
                  editing
                </li>
              </ul>
            </div>
          </div>

          <div className="lp2-numbers">
            <h3 className="lp2-h3">
              The numbers behind AI-powered creative production
            </h3>
            <div className="lp2-num-grid">
              <div>
                <strong>-80%</strong>
                <span>video production costs</span>
              </div>
              <div>
                <strong>24–48h</strong>
                <span>to identify winning creatives (5 variations)</span>
              </div>
              <div>
                <strong>&lt;60min</strong>
                <span>per creative vs 7–14 days of UGC production</span>
              </div>
            </div>
            <p className="lp2-disclaimer">
              Performance figures are illustrative benchmarks and may vary
              depending on campaign conditions, platform requirements, creative
              quality, and implementation.
            </p>
          </div>

          <div className="lp2-stop">
            <h3 className="lp2-h3" style={{ textAlign: 'left' }}>
              STOP throwing money at outdated creative production
            </h3>
            <ul>
              <li>
                <b>Stop depending on expensive UGC agencies.</b> High recurring
                costs, 7–14 day deliveries, limited creator availability and
                endless revisions — by the time creatives arrive, your campaign
                needs another round of testing.
              </li>
              <li>
                <b>Stop hiring more video editors.</b> More editing capacity
                doesn&apos;t create new faces, fresh footage or new creative
                concepts — it just raises your fixed costs.
              </li>
              <li>
                <b>Stop tweaking targeting to fix creative fatigue.</b>{' '}
                Sometimes the problem isn&apos;t the audience — it&apos;s the
                ad they&apos;ve already seen too many times.
              </li>
            </ul>
          </div>
        </section>

        {/* ── Stop wasting your budget (ACTION) ── */}
        <section className="lp2-section" id="offer">
          <div className="lp2-split">
            <div className="lp2-copy">
              <h2>
                STOP WASTING
                <br />
                YOUR BUDGET
              </h2>
              <p className="lp2-lead-in">
                Every day you delay, your competitors get faster.
              </p>
              <p>
                The cost of doing nothing goes far beyond the price of another
                UGC video: budgets become less efficient as creatives fatigue,
                your team gets trapped in production management instead of
                strategy, and faster competitors take your clients.
              </p>
              <p>
                The agencies that scale tomorrow will be the ones that{' '}
                <strong>solve creative production today.</strong>
              </p>
              <CtaLink
                href="#lead"
                location="empire"
                className="lp2-btn lp2-btn-cyan"
              >
                Scale my production
              </CtaLink>
            </div>
            <div className="lp2-visual lp2-visual-empire" aria-hidden="true">
              <div className="lp2-empire-grid">
                <div className="lp2-tile lp2-tile-main">
                  COST OF DOING NOTHING
                </div>
                <div className="lp2-tile">
                  Budgets losing efficiency
                </div>
                <div className="lp2-tile">
                  Team trapped in production
                </div>
                <div className="lp2-tile">
                  Competitors testing faster
                </div>
                <div className="lp2-tile lp2-tile-main">WITH AI ENGINE</div>
                <div className="lp2-tile">30+ variations</div>
                <div className="lp2-tile">&lt;60 min per creative</div>
                <div className="lp2-tile">-80% costs</div>
              </div>
            </div>
          </div>

          <div className="lp2-guarantee">
            <span className="lp2-guarantee-badge">30-day guarantee</span>
            <h3>Try it risk-free</h3>
            <p>
              If your video production speed isn&apos;t multiplied by at least
              5x, you can request a refund within 30 days, subject to the
              applicable guarantee terms. Reduce production bottlenecks,
              increase creative output, and give your agency a faster way to
              serve its clients.
            </p>
          </div>

          <div className="lp2-scarcity">
            <p>
              <strong>Limited monthly onboarding.</strong> We limit the number
              of agencies onboarded each month to ensure proper configuration
              of AI avatar models and creative workflows. Don&apos;t let
              outdated production workflows become the reason your agency loses
              its competitive edge.
            </p>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="lp2-section" id="faq">
          <div className="lp2-faq">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              <details>
                <summary>
                  Will AI-generated actors look artificial or unrealistic?
                </summary>
                <p>
                  Not with today&apos;s latest-generation avatar technology.
                  Advanced solutions can generate highly realistic digital
                  presenters from a video sample as short as 15 seconds —
                  synchronized lip movements, facial expressions and natural
                  delivery. Your agency gets a wider range of creative
                  identities without new filming sessions.
                </p>
              </details>
              <details>
                <summary>
                  Can AI-generated videos be used on Meta, TikTok and Google
                  Ads?
                </summary>
                <p>
                  Yes — videos are exported in formats designed to meet major
                  platforms&apos; technical specifications. However, technical
                  compatibility does not guarantee approval: all creatives must
                  comply with each platform&apos;s advertising policies and AI
                  disclosure requirements.
                </p>
              </details>
              <details>
                <summary>
                  Does my team need advanced video editing skills?
                </summary>
                <p>
                  No. Your team enters a script or product URL, selects a
                  virtual presenter, and generates the finished video. No
                  editing skills, filming equipment or complicated workflows
                  required.
                </p>
              </details>
              <details>
                <summary>Can I use this system for multiple clients?</summary>
                <p>
                  The system is designed for agency workflows — generate
                  different concepts, presenters, scripts and variations per
                  client campaign, without increasing reliance on external
                  creators and editors.
                </p>
              </details>
              <details>
                <summary>Can I produce variations for A/B testing?</summary>
                <p>
                  Absolutely — generate multiple variations with different
                  hooks, scripts, presenters and angles to identify promising
                  performers and iterate on campaign data. The objective
                  isn&apos;t just more videos — it&apos;s more opportunities to
                  find winning creatives.
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
              Scale your creative production.
              <br />
              <em>Not your overhead.</em>
            </h2>
            <p>
              Your clients need fresh creatives. Your team needs more capacity.
              Generate more creatives, test more angles, refresh campaigns
              faster — and scale your agency.
            </p>
            <LeadForm />
            <p className="lp2-micro" style={{ marginTop: 18 }}>
              Get access to your AI creative production engine now
            </p>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="lp2-footer">
        <div>
          <strong>AI Viral School</strong>
          <p>
            AI-powered creative production for agencies. From script to
            ready-to-launch ad creatives in minutes.
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
