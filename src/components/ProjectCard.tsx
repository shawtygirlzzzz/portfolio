import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '../data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass-card hud-card scan-container p-6 flex flex-col h-full group">
      <header className="mb-3 flex items-start justify-between gap-3 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-green">
              {project.category}
            </span>
            {project.wip && (
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-accent-blue/10 border border-accent-blue/40 text-accent-blue">
                <span className="relative flex h-1 w-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-75" />
                  <span className="relative inline-flex rounded-full h-1 w-1 bg-accent-blue" />
                </span>
                in progress
              </span>
            )}
          </div>
          <h3 className="font-display text-xl font-semibold">{project.title}</h3>
        </div>
        <div className="flex items-center gap-2 text-text-muted">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="hover:text-accent-green transition-colors"
            >
              <Github size={18} />
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="hover:text-accent-green transition-colors"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </header>

      <p className="text-text-muted text-sm leading-relaxed mb-4 flex-1 relative z-10">
        {project.description}
      </p>

      <div className="mb-4 relative z-10">
        <div className="text-xs font-mono uppercase tracking-widest text-text-dim mb-2">
          <span className="text-accent-green">›</span> key learning
        </div>
        <p className="text-sm text-text/90 italic">{project.keyLearning}</p>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-border relative z-10">
        {project.technologies.map((t) => (
          <span key={t} className="badge">
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}
