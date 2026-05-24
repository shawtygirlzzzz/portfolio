import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/profile';
import { useTypewriter } from '../hooks/useTypewriter';
import { RobotMascot } from './Illustrations';

export default function Hero() {
  const { displayed, done } = useTypewriter(profile.tagline, 30, 500);
  const sectionRef = useRef<HTMLElement>(null);
  const [mouse, setMouse] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    const onLeave = () => setMouse(null);
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg" aria-hidden="true" />

      <div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent-green/15 blur-3xl animate-pulse-glow"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent-blue/15 blur-3xl animate-pulse-glow"
        aria-hidden="true"
      />

      <div className="absolute top-24 inset-x-0 overflow-hidden" aria-hidden="true">
        <div className="data-line" />
      </div>
      <div
        className="absolute bottom-32 inset-x-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="data-line"
          style={{ animationDelay: '2s', animationDuration: '5s' }}
        />
      </div>

      {mouse && (
        <div
          className="pointer-events-none absolute w-[28rem] h-[28rem] rounded-full transition-opacity duration-200"
          style={{
            background:
              'radial-gradient(circle at center, rgba(0, 255, 136, 0.08), transparent 65%)',
            left: mouse.x - 224,
            top: mouse.y - 224,
          }}
          aria-hidden="true"
        />
      )}

      <div className="section relative w-full">
        <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-center">
          <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-accent-green/30 bg-accent-green/5 backdrop-blur-sm mb-6 font-mono text-xs">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent-green" />
            </span>
            <span className="text-accent-green">system.online</span>
            <span className="text-text-dim">·</span>
            <span className="text-text-muted">{profile.availability}</span>
          </div>

          <div className="font-mono text-sm text-text-dim mb-3">
            <span className="text-accent-green">$</span> whoami
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight mb-4">
            <span className="gradient-text">{profile.name}</span>
          </h1>
          <p className="font-display text-2xl md:text-3xl text-text-muted mb-6">
            {profile.title}
          </p>

          <p className="text-text-muted text-lg leading-relaxed max-w-2xl mb-10 min-h-[3.5rem] font-mono text-base">
            <span className="text-accent-green mr-2">›</span>
            {displayed}
            {!done && <span className="cursor-blink" />}
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <a href="#projects" className="btn-primary">
              View Projects <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Resume
            </a>
          </div>

          <div className="flex items-center gap-4 text-text-muted">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-green transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-green transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-accent-green transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          </div>

          <div className="flex justify-center lg:justify-end relative z-10 mt-6 lg:mt-0">
            <div className="w-56 sm:w-72 lg:w-auto">
              <RobotMascot />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
