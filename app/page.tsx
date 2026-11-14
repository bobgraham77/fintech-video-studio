import LandingInteractions from '@/components/LandingInteractions';
import LeadForm from '@/components/LeadForm';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import VslVideo from '@/components/VslVideo';

const VSL_SRC =
  'https://res.cloudinary.com/dm0qswvjs/video/upload/v1741770117/CloserAI_demo_ncfjxq.mov';

export default function Home() {
  return (
    <>
      <div className="page-glow page-glow-one" />
      <div className="page-glow page-glow-two" />

      <SiteHeader
        nav={[
          { href: '#top', label: 'Home' },
          { href: '#video', label: 'Services' },
          { href: '#process', label: 'How it works' },
        ]}
        cta={{ href: '/video-analyze', label: 'Analyze your video' }}
      />

      <main id="top">
        <section className="hero section-shell">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="pulse-dot" /> AI-assisted. Human-directed.
            </p>
            <h1>
              Choose The Story <br />
              <em>that Moves people to Act.</em>
            </h1>
            <p className="hero-text">
              We make complex products easier to understand, trust and buy.
            </p>
          </div>
        </section>

        <section className="feature-video section-shell" id="video">
          <div className="feature-video-frame">
            <VslVideo src={VSL_SRC} />
          </div>
        </section>

        <section className="lead-section section-shell" id="get-started">
          <div className="lead-card">
            <p className="eyebrow">From brief to delivery in 7 days</p>
            <h2>
              Ready to move <em>faster?</em>
            </h2>
            <p>
              Leave your email — we&apos;ll send you the brief template and a
              slot to discuss your first video.
            </p>
            <LeadForm />
          </div>
        </section>

        <section className="process section-shell section-padding" id="process">
          <div className="section-heading">
            <p className="eyebrow">How it works</p>
            <h2>
              From brief
              <br />
              <em>to High-converting videos.</em>
            </h2>
          </div>
          <div className="process-grid">
            <div className="process-step">
              <span>01</span>
              <div className="process-icon">
                <svg viewBox="0 0 48 48" aria-hidden="true">
                  <path d="M18 35h12M19 40h10M16 27c-2-2-3-5-3-8a11 11 0 0 1 22 0c0 3-1 6-3 8-2 2-3 4-3 6H19c0-2-1-4-3-6Z" />
                  <path d="M24 2v5M7 9l4 4M41 9l-4 4M3 22h6M39 22h6" />
                </svg>
              </div>
              <h3>Creative concept</h3>
              <p>A sharp visual angle built around your message.</p>
            </div>
            <div className="process-step">
              <span>02</span>
              <div className="process-icon">
                <svg viewBox="0 0 48 48" aria-hidden="true">
                  <path d="M4 15a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v25H4V15Z" />
                  <path d="M4 15 10 6h28l6 9M10 6l6 9M19 6l6 9M28 6l6 9" />
                  <path d="M4 22h40" />
                </svg>
              </div>
              <h3>Cinematic production</h3>
              <p>Story, motion, voice and sound working as one.</p>
            </div>
            <div className="process-step">
              <span>03</span>
              <div className="process-icon">
                <svg viewBox="0 0 48 48" aria-hidden="true">
                  <rect x="12" y="12" width="24" height="24" rx="4" />
                  <path d="M18 12V7M24 12V5M30 12V7M18 36v5M24 36v7M30 36v-5M12 18H7M12 24H5M12 30H7M36 18h5M36 24h7M36 30h-5" />
                  <path d="m20 29 3-10 3 6 3-3" />
                </svg>
              </div>
              <h3>AI-driven post-production</h3>
              <p>Fast, precise finishing without the generic look.</p>
            </div>
            <div className="process-step">
              <span>04</span>
              <div className="process-icon">
                <svg viewBox="0 0 48 48" aria-hidden="true">
                  <path d="m24 4 18 10v20L24 44 6 34V14L24 4Z" />
                  <path d="m6 14 18 10 18-10M24 24v20M15 9l18 10M18 33l4 4 8-9" />
                </svg>
              </div>
              <h3>High-conversion delivery</h3>
              <p>Ready-to-publish assets, delivered in 7 days.</p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <LandingInteractions />
    </>
  );
}
