export default function Hero({ projectCount }) {
  return (
    <section id="top" className="hero">
      <div className="wrap hero-inner">
        <p className="eyebrow">Field catalog — {new Date().getFullYear()}</p>
        <h1 className="hero-title">
          Idelfonso Valverde,
          <br />
          Software Engineer
        </h1>
        <p className="hero-sub">
          I'm a software engineer who likes turning
          rough ideas into working software. Below is a catalog of{' '}
          {projectCount} things I've built, roughly in the order I built
          them.
        </p>
        <a href="#work" className="hero-cta mono">
          View the catalog ↓
        </a>
      </div>

      <style>{`
        .hero {
          padding: var(--space-6) 0 var(--space-5);
          border-bottom: 1px solid var(--line);
        }
        .hero-title {
          font-size: var(--step-3);
          line-height: 1.02;
          margin: var(--space-2) 0 var(--space-3);
          color: var(--ink);
        }
        .hero-sub {
          max-width: 34rem;
          color: var(--ink-soft);
          font-size: var(--step-1);
          margin: 0 0 var(--space-3);
        }
        .hero-cta {
          display: inline-block;
          text-decoration: none;
          color: var(--accent);
          font-size: 0.85rem;
          letter-spacing: 0.04em;
          border-bottom: 1px solid var(--accent);
          padding-bottom: 2px;
          transition: opacity 0.15s ease;
        }
        .hero-cta:hover {
          opacity: 0.7;
        }
      `}</style>
    </section>
  )
}
