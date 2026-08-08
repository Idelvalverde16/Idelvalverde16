const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="nav-mark mono">
          Idelfonso Valverde · 2026
        </a>
        <nav className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="mono">
              {l.label}
            </a>
          ))}
        </nav>
      </div>

      <style>{`
        .nav {
          position: sticky;
          top: 0;
          z-index: 10;
          background: color-mix(in srgb, var(--paper) 92%, transparent);
          backdrop-filter: blur(6px);
          border-bottom: 1px solid var(--line);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: var(--space-2);
          padding-bottom: var(--space-2);
        }
        .nav-mark {
          font-size: 0.85rem;
          letter-spacing: 0.08em;
          color: var(--accent);
          text-decoration: none;
        }
        .nav-links {
          display: flex;
          gap: var(--space-3);
        }
        .nav-links a {
          font-size: 0.8rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          text-decoration: none;
          color: var(--ink-soft);
          transition: color 0.15s ease;
        }
        .nav-links a:hover {
          color: var(--accent);
        }
      `}</style>
    </header>
  )
}
