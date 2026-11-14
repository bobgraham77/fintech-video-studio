import Link from 'next/link';

type Props = {
  tagline?: string;
  nav: { href: string; label: string }[];
  cta: { href: string; label: string };
};

export default function SiteHeader({
  tagline = 'AI VIDEO STUDIO',
  nav,
  cta,
}: Props) {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="AI Viral School home">
        <img className="brand-logo" src="/assets/ai-springboard-logo.png" alt="" />
        <span>
          AI VIRAL SCHOOL
          <br />
          <small>{tagline}</small>
        </span>
      </Link>
      <button className="menu-toggle" aria-label="Open menu" aria-expanded="false">
        <span />
        <span />
      </button>
      <nav className="site-nav">
        {nav.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
        <Link href="/articles">Articles</Link>
      </nav>
      <a className="nav-cta" href={cta.href}>
        {cta.label} <span>↗</span>
      </a>
    </header>
  );
}
