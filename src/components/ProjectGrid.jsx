import ProjectCard from './ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function ProjectGrid() {
  return (
    <section id="work" className="work">
      <div className="wrap">
        <p className="eyebrow">Catalog</p>
        <h2 className="work-title">Selected work</h2>
        <div className="work-list">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>

      <style>{`
        .work {
          padding: var(--space-5) 0;
        }
        .work-title {
          font-size: var(--step-2);
          margin: var(--space-1) 0 var(--space-4);
        }
        .work-list {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </section>
  )
}
