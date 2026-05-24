import { Award, GraduationCap } from 'lucide-react';
import { certifications, education } from '../data/education';
import { OrbitIcon } from './Illustrations';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="flex items-start justify-between gap-6">
        <div className="flex-1">
          <div className="section-tag">
            <span className="text-accent-green">$_</span> education
          </div>
          <h2 className="section-heading">
            <span className="gradient-text">Education</span> & certifications
          </h2>
          <p className="section-subheading">
            Academic background and continued learning.
          </p>
        </div>
        <div className="hidden md:block w-24 lg:w-32 flex-shrink-0">
          <OrbitIcon className="w-full h-auto" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-4 text-text-muted">
            <GraduationCap size={18} className="text-accent-green" />
            <span className="font-mono text-xs uppercase tracking-widest">
              Degree
            </span>
          </div>
          <div className="space-y-4">
            {education.map((e) => (
              <div key={e.degree} className="glass-card hud-card p-6">
                <div className="flex items-start justify-between gap-3 mb-1">
                  <h3 className="font-display text-lg font-semibold">
                    {e.degree}
                  </h3>
                  {e.current && (
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] font-mono uppercase tracking-widest bg-accent-green/10 border border-accent-green/40 text-accent-green flex-shrink-0">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent-green" />
                      </span>
                      active
                    </span>
                  )}
                </div>
                <div className="text-text-muted text-sm mb-3">
                  {e.institution} ·{' '}
                  <span className="font-mono">{e.period}</span>
                </div>
                <ul className="space-y-1.5 text-sm text-text-muted">
                  {e.details.map((d, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-accent-green mt-0.5 flex-shrink-0 font-mono">
                        ›
                      </span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4 text-text-muted">
            <Award size={18} className="text-accent-green" />
            <span className="font-mono text-xs uppercase tracking-widest">
              Certifications
            </span>
          </div>
          <div className="space-y-3">
            {certifications.map((c) => (
              <div
                key={c.name}
                className="glass-card hud-card p-4 flex items-center justify-between gap-4"
              >
                <div className="min-w-0">
                  <div className="font-medium truncate">{c.name}</div>
                  <div className="text-sm text-text-muted truncate">
                    {c.issuer}
                  </div>
                </div>
                <div className="font-mono text-xs text-text-dim flex-shrink-0">
                  {c.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
