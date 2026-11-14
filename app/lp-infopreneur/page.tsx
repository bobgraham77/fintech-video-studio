import type { Metadata } from 'next';
import CtaLink from '@/components/CtaLink';
import LeadForm from '@/components/LeadForm';
import VslVideo from '@/components/VslVideo';

export const metadata: Metadata = {
  title: 'AI Viral School — Infopreneurs',
  description:
    'Create more content, spend less time on camera. Grow your personal brand without constantly recording yourself.',
  robots: { index: false, follow: false },
};

const VSL_SRC =
  'https://res.cloudinary.com/dm0qswvjs/video/upload/v1741770117/CloserAI_demo_ncfjxq.mov';

const CYCLE = [
  {
    n: '1',
    title: 'New content ideas',
    text: 'You constantly need fresh topics, hooks, scripts, and ideas to keep your audience engaged.',
  },
  {
    n: '2',
    title: 'Filming, editing & production',
    text: 'Camera, lighting, retakes, editing, subtitles — everything prepared for publishing.',
  },
  {
    n: '3',
    title: 'Hours lost every day',
    text: 'Instead of working on your business, you produce content that needs replacing tomorrow.',
  },
  {
    n: '4',
    title: 'Creative fatigue & inconsistency',
    text: 'You run out of ideas, postpone publishing, and struggle to stay consistent.',
  },
  {
    n: '5',
    title: 'Less time to grow',
    text: 'Less time serving customers, building offers, and generating revenue. Then the cycle restarts.',
  },
];

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
            Recruit my AI Agent
          </CtaLink>
        </div>
      </header>

      <main id="top">
        {/* ── Hero (ATTENTION) ── */}
        <section className="lp2-hero">
          <p className="lp2-kicker">For infopreneurs</p>
          <h1>
            <span className="lp2-title-dark">CREATE MORE CONTENT.</span>
            <br />
            <span className="lp2-title-cyan">WITHOUT SPENDING TIME ON CAMERA.</span>
          </h1>
          <p className="lp2-sub">
            Grow your personal brand without constantly recording yourself —
            your expertise becomes the script, your digital twin becomes the
            presenter.
          </p>
          <div className="lp2-hero-actions">
            <CtaLink href="#lead" location="hero" className="lp2-btn lp2-btn-cyan">
              Recruit my AI Agent
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

        {/* ── The vicious cycle (INTEREST, high on page) ── */}
        <section className="lp2-section" id="problem">
          <div className="lp2-split">
            <div className="lp2-visual lp2-visual-knot">
              <div className="lp2-cycle">
                {CYCLE.map((c, i) => (
                  <div key={c.n}>
                    <div className="lp2-cycle-step">
                      <span>{c.n}</span>
                      <div>
                        <b>{c.title}</b>
                        <p>{c.text}</p>
                      </div>
                    </div>
                    {i < CYCLE.length - 1 && (
                      <div className="lp2-cycle-arrow">↓</div>
                    )}
                  </div>
                ))}
                <div className="lp2-cycle-loop">
                  ↻ And the cycle starts all over again.
                </div>
              </div>
            </div>
            <div className="lp2-copy">
              <h2>
                The Content
                <br />
                <span className="lp2-vs-inline"> TRAP</span>
              </h2>
              <p className="lp2-lead-in">
                You need content to promote your service/product. But creating content is taking
                over your time.
              </p>
              <p>
                You handle almost every step: ideas, scripts, recording,
                editing, publishing. And while you&apos;re busy creating
                content, you&apos;re not working with clients, improving your
                offers, or growing your business.
              </p>
              <p>
                Better cameras won&apos;t make filming faster. Editors add
                recurring costs and deadlines.{' '}
                <strong>
                  You&apos;re not running out of ideas — you&apos;re running
                  out of time and energy to turn them into videos.
                </strong>
              </p>
              <CtaLink
                href="#lead"
                location="chaos"
                className="lp2-btn lp2-btn-cyan"
              >
                Break the cycle
              </CtaLink>
            </div>
          </div>
        </section>

        {/* ── VS cards ── */}
        <section className="lp2-section">
          <div className="lp2-versus">
            <article className="lp2-card lp2-card-magenta">
              <span className="lp2-card-tag">Traditional Workflow</span>
              <h3>TRADITIONAL</h3>
              <p>
                Every video demands your presence — filming, retakes, editing,
                publishing, repeat.
              </p>
              <ul>
                <li>Hours or days per video</li>
                <li>2–4 days per video</li>
                <li>€1,800–€3,000 per video</li>
                <li>New filming for every update</li>
                <li>Capacity limited by your filming time</li>
              </ul>
            </article>
            <div className="lp2-vs-badge">VS</div>
            <article className="lp2-card lp2-card-cyan">
              <span className="lp2-card-tag">AI Video Engine</span>
              <h3>AI CONTENT AGENT</h3>
              <p>
                One initial recording — then script in, video out, whenever you
                need it.
              </p>
              <ul>
                <li>As little as 2 minutes per video</li>
                <li>Few credits costs</li>
                <li>Update the script, regenerate</li>
                <li>Scalable automated generation</li>
              </ul>
              <CtaLink
                href="#lead"
                location="versus_after"
                className="lp2-btn lp2-btn-cyan"
              >
                Get my Agent
              </CtaLink>
            </article>
          </div>
          <p className="lp2-disclaimer">
            Illustrative benchmarks. Actual results depend on the software,
            video complexity, rendering time, and production workflow.
          </p>
        </section>

        {/* ── The AI Engine (DESIRE) ── */}
        <section className="lp2-section" id="solution">
          <div className="lp2-split lp2-split-reverse">
            <div className="lp2-copy">
              <h2>
                YOUR AI AGENT
                <br />
                BECOMES YOUR CONTENT MANAGER
              </h2>
              <p className="lp2-lead-in">
                Meet your AI content manager.
              </p>
              <p>
                Imagine writing down an idea and turning it into a professional
                video without recording yourself. Create a week of content
                without a week of filming — educational videos, social content,
                product demos and sales presentations, simple workflows.
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
                  <b>Step 1</b> — turn your ideas into ready-to-use scripts
                </li>
                <li>
                  <b>Step 2</b> — create your AI digital twin from ~15 seconds
                  of footage
                </li>
                <li>
                  <b>Step 3</b> — generate and publish your videos
                </li>
                <li>
                  <b>Result</b> — you stay the face, without filming each video
                </li>
              </ul>
            </div>
          </div>

          <div className="lp2-numbers">
            <h3 className="lp2-h3">
              What could you save by changing your production method?
            </h3>
            <div className="lp2-num-grid">
              <div>
                <strong>+1380%</strong>
                <span>video production speed</span>
              </div>
              <div>
                <strong>2min</strong>
                <span>from script to finished video</span>
              </div>
              <div>
                <strong>∞</strong>
                <span>content no longer limited by your availability</span>
              </div>
            </div>
            <p className="lp2-disclaimer">
              More freedom. More consistency. More opportunities to grow — the
              real benefit is the time you get back.
            </p>
          </div>

          <div className="lp2-stop">
            <h3 className="lp2-h3" style={{ textAlign: 'left' }}>
              STOP WORKING HARDER TO STAY VISIBLE
            </h3>
            <ul>
              <li>
                <b>Stop forcing yourself to record every day.</b> Your
                expertise doesn&apos;t become less valuable because you
                don&apos;t feel like filming today.
              </li>
              <li>
                <b>Stop spending thousands on recording equipment.</b> Better
                gear won&apos;t eliminate the time required to record and edit
                every video.
              </li>
              <li>
                <b>Stop outsourcing every video to freelancers.</b> Recurring
                costs, revisions and delivery delays slow down your content.
              </li>
              <li>
                <b>Stop relying on static slides and voiceovers.</b> Your
                audience wants to connect with a person — your digital twin
                keeps you present without requiring you to film.
              </li>
            </ul>
          </div>
        </section>

        {/* ── Imagine everything you could create (ACTION) ── */}
        <section className="lp2-section" id="offer">
          <div className="lp2-split">
            <div className="lp2-copy">
              <h2>
                GET YOUR
                <br />
                TIME BACK
              </h2>
              <p className="lp2-lead-in">
                Your content shouldn&apos;t run your life.
              </p>
              <p>
                Redirect the hours you spend filming toward serving customers,
                developing offers, building funnels and growing revenue. Your
                business should grow because of your expertise — not because
                of how many hours you can spend on camera.
              </p>
              <CtaLink
                href="#lead"
                location="empire"
                className="lp2-btn lp2-btn-cyan"
              >
                Reclaim my time
              </CtaLink>
            </div>
            <div className="lp2-visual lp2-visual-empire" aria-hidden="true">
              <div className="lp2-empire-grid">
                <div className="lp2-tile lp2-tile-main">
                  EVERYTHING YOU COULD CREATE
                </div>
                <div className="lp2-tile">Social media daily</div>
                <div className="lp2-tile">Course library</div>
                <div className="lp2-tile">Marketing videos</div>
                <div className="lp2-tile">VSLs &amp; sales</div>
                <div className="lp2-tile">Product demos</div>
                <div className="lp2-tile">170+ languages</div>
              </div>
            </div>
          </div>

          <div className="lp2-guarantee">
            <span className="lp2-guarantee-badge">30-day guarantee</span>
            <h3>Try it risk-free</h3>
            <p>
              If your video production speed isn&apos;t multiplied by at least
              5x, you can request a refund within 30 days, subject to the
              applicable guarantee terms. Experience a new way to create
              content without unnecessary financial risk.
            </p>
          </div>

          <div className="lp2-scarcity">
            <p>
              <strong>Limited monthly onboarding.</strong> To ensure the
              quality of each digital twin and its configuration, we limit the
              number of entrepreneurs onboarded each month. Don&apos;t wait
              until content creation becomes the reason you stop growing.
            </p>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="lp2-section" id="faq">
          <div className="lp2-faq">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              <details>
                <summary>Will my AI digital twin look fake or artificial?</summary>
                <p>
                  Your personal brand is built on trust. Advanced avatar
                  technologies create highly realistic replicas from short
                  video samples — synchronized lip movements, facial
                  expressions and natural delivery — maintaining your
                  recognizable identity.
                </p>
              </details>
              <details>
                <summary>Will my audience still recognize me?</summary>
                <p>
                  Yes. The purpose of your digital twin is to reproduce your
                  own appearance. You remain the expert and the face of your
                  brand — it simply presents new content without you recording
                  each video.
                </p>
              </details>
              <details>
                <summary>Can I create videos in different languages?</summary>
                <p>
                  Advanced AI voice technologies support multilingual
                  generation across 170+ languages and accents, depending on
                  the model — adapt your content for international audiences
                  without recording every version.
                </p>
              </details>
              <details>
                <summary>Do I need video editing or technical skills?</summary>
                <p>
                  Absolutely not. Enter your script, select your digital twin,
                  generate your video. No editing skills or complicated
                  workflow required.
                </p>
              </details>
              <details>
                <summary>
                  Can I create videos for Instagram, TikTok and YouTube?
                </summary>
                <p>
                  Yes — generate content for different platforms and formats:
                  short-form educational videos, promotional videos and longer
                  presentations, exported for major platform requirements.
                </p>
              </details>
              <details>
                <summary>Can I use it to create an entire online course?</summary>
                <p>
                  Yes — turn written lessons and training materials into video
                  modules presented by your digital twin, and expand your
                  library without recording every lesson.
                </p>
              </details>
              <details>
                <summary>Can I still update my videos?</summary>
                <p>
                  Absolutely — modify your script and generate a new version.
                  No new recording session needed to change an intro, update
                  information, or test a different message.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* ── YOUR NEXT MOVE ── */}
        <section className="lp2-section lp2-lead" id="lead">
          <div className="lead-card">
            <p className="eyebrow">Stop creating content the hard way</p>
            <h2>
              Create more <em>without filming more.</em>
            </h2>
            <p>
              Stay visible without being constantly on camera. Turn your
              expertise into an endless source of video content — your ideas
              deserve to be seen, and your time deserves to be yours.
            </p>
            <LeadForm />
            <p className="lp2-micro" style={{ marginTop: 18 }}>
              Create your AI digital twin now
            </p>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="lp2-footer">
        <div>
          <strong>AI Viral School</strong>
          <p>
            AI-powered video production for infopreneurs. Your text becomes
            your studio.
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
