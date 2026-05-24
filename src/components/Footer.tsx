import { profile } from '../data/profile';

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-8 text-center text-sm text-text-muted">
        © {new Date().getFullYear()} {profile.name}.
      </div>
    </footer>
  );
}
