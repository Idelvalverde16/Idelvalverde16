import { useState } from 'react'

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false)

  return (
    <article className={`card ${open ? 'is-open' : ''}`}>
      <button
        className="card-head"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="card-id mono">{project.id}</span>
        <span className="card-titles">
          <span className="card-title">{project.title}</span>
          <span className="card-meta mono">
            {project.year} · {project.status}
          </span>
        </span>
        <span className="card-toggle mono" aria-hidden="true">
          {open ? '−' : '+'}
        </span>
      </button>

      {open && (
        <div className="card-body">
          <p className="card-summary">{project.summary}</p>
          <ul className="card-stack">
            {project.stack.map((s) => (
              <li key={s} className="mono">
                {s}
              </li>
            ))}
          </ul>
          <div className="card-links">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                Live site ↗
              </a>
            )}
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noreferrer">
                Source ↗
              </a>
            )}
          </div>
        </div>
      )}

      <style>{`
        .card {
          border: 1px solid var(--line);
          background: var(--card);
        }
        .card + .card {
          border-top: none;
        }
        .card-head {
          all: unset;
          box-sizing: border-box;
          display: grid;
          grid-template-columns: 3rem 1fr 2rem;
          align-items: center;
          width: 100%;
          padding: var(--space-2) var(--space-3);
          cursor: pointer;
        }
        .card-id {
          color: var(--accent);
          font-size: 0.85rem;
        }
        .card-titles {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }
        .card-title {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 1.05rem;
        }
        .card-meta {
          font-size: 0.72rem;
          letter-spacing: 0.04em;
          color: var(--ink-soft);
        }
        .card-toggle {
          justify-self: end;
          color: var(--ink-soft);
          font-size: 1.1rem;
        }
        .card-body {
          padding: 0 var(--space-3) var(--space-3) calc(3rem + var(--space-3));
        }
        .card-summary {
          margin: 0 0 var(--space-2);
          color: var(--ink);
          max-width: 38rem;
        }
        .card-stack {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          padding: 0;
          margin: 0 0 var(--space-2);
        }
        .card-stack li {
          font-size: 0.7rem;
          letter-spacing: 0.03em;
          padding: 0.2rem 0.5rem;
          border: 1px solid var(--line);
          color: var(--ink-soft);
        }
        .card-links {
          display: flex;
          gap: var(--space-3);
        }
        .card-links a {
          font-size: 0.8rem;
          text-decoration: none;
          color: var(--accent-2);
          border-bottom: 1px solid transparent;
        }
        .card-links a:hover {
          border-bottom-color: var(--accent-2);
        }
      `}</style>
    </article>
  )
}
