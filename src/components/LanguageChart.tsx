import { useEffect, useState } from 'react';
import { projects } from '../data/projects';

const KNOWN_LANGUAGES = [
  'Python',
  'JavaScript',
  'TypeScript',
  'Kotlin',
  'Java',
  'C++',
  'C',
  'Go',
  'Rust',
  'SQL',
  'Swift',
  'Dart',
];

const LANG_COLORS: Record<string, string> = {
  Python: '#00ff88',
  Kotlin: '#3b82f6',
  TypeScript: '#06b6d4',
  JavaScript: '#818cf8',
  Java: '#f59e0b',
  'C++': '#ec4899',
  SQL: '#22d3ee',
  Swift: '#fb7185',
};

export default function LanguageChart() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 150);
    return () => clearTimeout(t);
  }, []);

  const counts: Record<string, number> = {};
  projects.forEach((p) => {
    p.technologies.forEach((tech) => {
      if (KNOWN_LANGUAGES.includes(tech)) {
        counts[tech] = (counts[tech] ?? 0) + 1;
      }
    });
  });

  const total = Object.values(counts).reduce((s, c) => s + c, 0);
  const data = Object.entries(counts)
    .map(([name, count]) => ({
      name,
      count,
      pct: (count / total) * 100,
    }))
    .sort((a, b) => b.count - a.count);

  const R = 50;
  const C = 2 * Math.PI * R;
  let acc = 0;
  const slices = data.map((lang) => {
    const slice = (lang.count / total) * C;
    const offset = acc;
    acc += slice;
    return { ...lang, slice, offset };
  });

  if (total === 0) return null;

  return (
    <div className="glass-card hud-card p-6 md:p-8 mt-8">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-accent-green font-mono">›</span>
        <h3 className="font-display text-lg font-semibold">
          Language <span className="gradient-text">mix</span>
        </h3>
      </div>
      <p className="text-text-muted text-sm mb-6">
        Programming languages across {projects.length} featured projects.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-8">
        <div className="relative w-44 h-44 flex-shrink-0">
          <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
            <circle
              cx="60"
              cy="60"
              r={R}
              fill="none"
              stroke="#1f2937"
              strokeWidth="14"
            />
            {slices.map((s) => (
              <circle
                key={s.name}
                cx="60"
                cy="60"
                r={R}
                fill="none"
                stroke={LANG_COLORS[s.name] ?? '#94a3b8'}
                strokeWidth="14"
                strokeDasharray={`${mounted ? s.slice : 0} ${C}`}
                strokeDashoffset={-s.offset}
                strokeLinecap="butt"
                style={{
                  transition: 'stroke-dasharray 1.1s ease-out',
                  filter: `drop-shadow(0 0 6px ${LANG_COLORS[s.name] ?? '#94a3b8'}40)`,
                }}
              />
            ))}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <div className="font-display text-3xl font-bold gradient-text leading-none">
              {projects.length}
            </div>
            <div className="font-mono text-[10px] text-text-dim uppercase tracking-widest mt-1">
              projects
            </div>
          </div>
        </div>

        <ul className="flex-1 w-full space-y-2.5">
          {data.map((lang) => (
            <li key={lang.name} className="flex items-center gap-3">
              <span
                className="w-3 h-3 rounded-sm flex-shrink-0"
                style={{
                  backgroundColor: LANG_COLORS[lang.name] ?? '#94a3b8',
                  boxShadow: `0 0 8px ${LANG_COLORS[lang.name] ?? '#94a3b8'}80`,
                }}
                aria-hidden="true"
              />
              <div className="flex-1 flex items-center justify-between gap-2 text-sm">
                <span className="font-medium">{lang.name}</span>
                <div className="flex items-center gap-3 text-text-muted">
                  <span className="font-mono text-xs">
                    {lang.count} {lang.count === 1 ? 'project' : 'projects'}
                  </span>
                  <span className="font-mono text-xs text-accent-green font-semibold tabular-nums w-9 text-right">
                    {lang.pct.toFixed(0)}%
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
