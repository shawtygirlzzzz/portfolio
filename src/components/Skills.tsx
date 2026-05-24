import { Brain, Code2, Layout, Sparkles, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { skillCategories } from '../data/skills';
import { HexGridIcon } from './Illustrations';

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Brain,
  Layout,
  Wrench,
  Sparkles,
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="flex items-start justify-between gap-6">
        <div className="flex-1">
          <div className="section-tag">
            <span className="text-accent-green">$_</span> skills
          </div>
          <h2 className="section-heading">
            <span className="gradient-text">Skills</span> & tools
          </h2>
          <p className="section-subheading">
            Technologies and concepts I use day-to-day.
          </p>
        </div>
        <div className="w-14 sm:w-20 lg:w-32 flex-shrink-0">
          <HexGridIcon className="w-full h-auto" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map((cat) => {
          const Icon = iconMap[cat.icon] ?? Sparkles;
          return (
            <div key={cat.name} className="glass-card hud-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-accent-green/20 to-accent-blue/20 border border-accent-green/30 flex items-center justify-center text-accent-green">
                  <Icon size={18} />
                  <div className="absolute inset-0 rounded-lg bg-accent-green/10 blur-md -z-10" />
                </div>
                <h3 className="font-display font-semibold">{cat.name}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((s) => (
                  <span key={s} className="badge">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
