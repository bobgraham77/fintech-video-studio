import Link from 'next/link';

export default function SiteFooter({
  tagline = 'AI VIDEO STUDIO',
  baseline = 'Turn tech into trust.',
}: {
  tagline?: string;
  baseline?: string;
}) {
  return (
    <footer className="site-footer section-shell">
      <Link className="brand" href="/">
        <img className="brand-logo" src="/assets/ai-springboard-logo.png" alt="" />
        <span>
          AI VIRAL SCHOOL
          <br />
          <small>{tagline}</small>
        </span>
      </Link>
      <div>
        <p>{baseline}</p>
        <span>© 2026 AI Viral School</span>
      </div>
      <div className="footer-links">
        <a href="mailto:hello@aispringboard.com">hello@aispringboard.com</a>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
