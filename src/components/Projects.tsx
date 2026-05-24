import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import { CircuitIcon } from './Illustrations';
import LanguageChart from './LanguageChart';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="flex items-start justify-between gap-6">
        <div className="flex-1">
          <div className="section-tag">
            <span className="text-accent-green">$_</span> projects
          </div>
          <h2 className="section-heading">
            Featured <span className="gradient-text">projects</span>
          </h2>
          <p className="section-subheading">
            A selection of work spanning machine learning, computer vision, NLP, and full-stack engineering.
          </p>
        </div>
        <div className="w-14 sm:w-20 lg:w-32 flex-shrink-0">
          <CircuitIcon className="w-full h-auto" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>

      <LanguageChart />
    </section>
  );
}
