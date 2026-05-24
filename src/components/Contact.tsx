import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/profile';
import { SignalIcon } from './Illustrations';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="flex items-start justify-between gap-6 mb-6">
        <div className="section-tag mb-0">
          <span className="text-accent-green">$_</span> contact
        </div>
        <div className="w-12 sm:w-16 lg:w-24 flex-shrink-0">
          <SignalIcon className="w-full h-auto" />
        </div>
      </div>

      <div className="glass-card hud-card p-8 md:p-12 text-center relative overflow-hidden">
        <div
          className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-accent-green/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-accent-blue/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <div className="font-mono text-xs text-text-dim mb-3 tracking-widest">
            <span className="text-accent-green">›</span> initiate connection
          </div>

          <h2 className="section-heading mb-3">
            Let's <span className="gradient-text">build</span> something.
          </h2>
          <p className="text-text-muted max-w-xl mx-auto mb-8">
            I'm open to internships, research collaborations, and freelance work in AI/ML and full-stack engineering. The fastest way to reach me is email.
          </p>

          <a href={`mailto:${profile.email}`} className="btn-primary mb-8">
            <Mail size={18} />
            {profile.email}
          </a>

          <div className="flex items-center justify-center gap-3">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg border border-border bg-bg-surface text-text-muted hover:text-accent-green hover:border-accent-green/50 flex items-center justify-center transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg border border-border bg-bg-surface text-text-muted hover:text-accent-green hover:border-accent-green/50 flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
