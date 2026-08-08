export default function About() {
  return (
    <section id="about" className="about">
      <div className="wrap about-inner">
        <div>
          <p className="eyebrow">About</p>
          <h2 className="about-title">A little more context</h2>
        </div>
        <p className="about-copy">
         I'm a software technologist with an Associate's degree and 
         a soft spot for full-stack work. 
         I like being useful anywhere in the stack, backend or front. 
         This site itself is project #0: everything below it is what 
         I've been building since. Currently back at the fundamentals: 
         HTML, CSS, JavaScript, React, Python — building the base 
         before I move into AI. I like touching every layer of a project 
         rather than staying in one lane, and this catalog is where that 
         shows up.
        </p>
      </div>

      <style>{`
        .about {
          padding: var(--space-5) 0;
          border-top: 1px solid var(--line);
        }
        .about-inner {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-3);
        }
        @media (min-width: 40rem) {
          .about-inner {
            grid-template-columns: 1fr 1.4fr;
            align-items: start;
          }
        }
        .about-title {
          font-size: var(--step-2);
          margin-top: var(--space-1);
        }
        .about-copy {
          color: var(--ink-soft);
          font-size: var(--step-1);
          max-width: 32rem;
        }
      `}</style>
    </section>
  )
}
