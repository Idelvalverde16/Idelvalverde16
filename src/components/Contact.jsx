const links = [
  { label: 'Email', href: 'mailto:idelvalverde16work@outlook.com' },
  { label: 'GitHub', href: 'https://github.com/idelvalverde16' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/idelfonso-valverde-2389b5372' },
]

export default function Contact() {
  return (
    <footer id="contact" className="contact">
      <div className="wrap contact-inner">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h2 className="contact-title">Let's talk.</h2>
        </div>
        <ul className="contact-links">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="wrap">
        <p className="contact-foot mono">© {new Date().getFullYear()} Idelfonso Valverde</p>
      </div>

      <style>{`
        .contact {
          padding: var(--space-5) 0 var(--space-4);
          border-top: 1px solid var(--line);
        }
        .contact-inner {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: flex-end;
          gap: var(--space-3);
          margin-bottom: var(--space-4);
        }
        .contact-title {
          font-size: var(--step-2);
          margin-top: var(--space-1);
        }
        .contact-links {
          list-style: none;
          display: flex;
          gap: var(--space-3);
          padding: 0;
          margin: 0;
        }
        .contact-links a {
          text-decoration: none;
          color: var(--accent);
          font-size: 0.9rem;
          border-bottom: 1px solid var(--accent);
          padding-bottom: 1px;
        }
        .contact-foot {
          font-size: 0.72rem;
          color: var(--ink-soft);
        }
      `}</style>
    </footer>
  )
}
