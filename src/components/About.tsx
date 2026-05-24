import { profile } from '../data/profile';
import { NeuralNetIcon } from './Illustrations';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="flex items-start justify-between gap-6">
        <div className="flex-1">
          <div className="section-tag">
            <span className="text-accent-green">$_</span> about
          </div>
          <h2 className="section-heading">
            About <span className="gradient-text">me</span>
          </h2>
          <p className="section-subheading">
            A bit about who I am and what I'm working towards.
          </p>
        </div>
        <div className="w-14 sm:w-20 lg:w-32 flex-shrink-0">
          <NeuralNetIcon className="w-full h-auto" />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2 space-y-4 text-text-muted leading-relaxed">
          {profile.bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <aside className="glass-card hud-card p-6 space-y-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-text-dim mb-1">
              <span className="text-accent-green">›</span> Location
            </div>
            <div className="text-text">{profile.location}</div>
          </div>
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-text-dim mb-1">
              <span className="text-accent-green">›</span> Email
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="text-accent-green hover:underline break-all"
            >
              {profile.email}
            </a>
          </div>
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-text-dim mb-1">
              <span className="text-accent-green">›</span> Focus areas
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['AI Agents', 'Computer Vision', 'NLP', 'Mobile'].map((t) => (
                <span key={t} className="badge">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-text-dim mb-1">
              <span className="text-accent-green">›</span> Languages
            </div>
            <div className="flex flex-wrap gap-1.5">
              {profile.spokenLanguages.map((l) => (
                <span key={l} className="badge">
                  {l}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
