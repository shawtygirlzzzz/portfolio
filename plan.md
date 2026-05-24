# PLAN.md

# Professional Portfolio Website Plan  
## Computer Science (Artificial Intelligence) Student Portfolio

---

## 1. Product Requirements Document (PRD)

---

# 1.1 Product Overview

## Product Name

AI Student Portfolio Website

## Product Description

A professional, mobile-responsive portfolio website for a Computer Science student specializing in Artificial Intelligence. The website will showcase the student's background, technical skills, AI-related projects, academic experience, and contact information.

The portfolio should be suitable for:

- Internship applications
- Graduate program applications
- Freelance opportunities
- GitHub project presentation
- Professional networking
- Personal branding

---

# 1.2 Product Goals

| Goal | Description |
|---|---|
| Showcase technical ability | Present AI, machine learning, programming, and software development projects clearly |
| Build professional credibility | Create a clean and polished online identity |
| Improve employability | Help recruiters, lecturers, and companies quickly understand the student's skills |
| Encourage contact | Provide simple ways for visitors to connect via email, LinkedIn, GitHub, or contact form |
| Support future growth | Allow easy addition of new projects, certifications, and achievements |

---

# 1.3 Target Audience

| Audience | Needs |
|---|---|
| Recruiters | Quickly assess skills, projects, and suitability for internship or junior roles |
| Lecturers / Academic supervisors | Review academic projects and research interests |
| Potential collaborators | Understand technical strengths and project experience |
| Freelance clients | View previous work and contact the student |
| Peers / Community | Learn from projects, GitHub repositories, and technical write-ups |

---

# 1.4 User Personas

## Persona 1: Recruiter

- Wants to quickly understand the student's technical skills.
- Looks for AI/ML projects, GitHub links, and contact information.
- Will spend less than 2 minutes reviewing the site.

## Persona 2: Lecturer / Supervisor

- Wants to view academic projects and research direction.
- Looks for clarity, project methodology, and learning outcomes.

## Persona 3: Fellow Developer

- Wants to explore GitHub repositories and technical stack.
- Looks for code quality, documentation, and project demos.

---

# 1.5 Core Features

---

## 1.5.1 Hero Section

### Purpose

Create a strong first impression and clearly introduce the student.

### Content

- Full name
- Role/title, for example:
  - Computer Science Student
  - Artificial Intelligence Enthusiast
  - Aspiring Machine Learning Engineer
- Short personal tagline
- Call-to-action buttons:
  - View Projects
  - Contact Me
  - Download Resume

### Acceptance Criteria

- Hero section is visible immediately on page load.
- CTA buttons are clearly visible.
- Layout works on desktop and mobile.
- Text is concise and professional.

---

## 1.5.2 About Section

### Purpose

Explain the student's background, interests, and career direction.

### Content

- Short biography
- Academic background
- Interest areas:
  - Artificial Intelligence
  - Machine Learning
  - Data Science
  - Software Engineering
  - Web Development
- Optional photo/avatar

### Acceptance Criteria

- About section is readable and concise.
- Content should not exceed 2–3 short paragraphs.
- Section should support future editing without structural changes.

---

## 1.5.3 Projects Section

### Purpose

Showcase the student's best technical work.

### Project Card Content

Each project should include:

| Field | Description |
|---|---|
| Project title | Clear name of the project |
| Description | Short explanation of what the project does |
| Technologies used | Example: Python, React, TensorFlow, Scikit-learn |
| Category | AI, Web App, Data Science, Mobile, etc. |
| GitHub link | Link to source code |
| Live demo link | Optional deployment link |
| Key learning | Short note about what was learned |

### Suggested Initial Projects

| Project | Category |
|---|---|
| AI Image Classifier | Machine Learning |
| Student Performance Prediction | Data Science |
| Chatbot using NLP | Artificial Intelligence |
| Personal Portfolio Website | Web Development |
| Object Detection Demo | Computer Vision |

### Acceptance Criteria

- At least 3 project cards are displayed.
- Each project card has consistent layout.
- GitHub/demo links open in a new tab.
- Cards are responsive on mobile and desktop.

---

## 1.5.4 Skills Section

### Purpose

Display technical competencies clearly.

### Skill Categories

| Category | Example Skills |
|---|---|
| Programming Languages | JavaScript, Python, Java, C++ |
| Frontend | React, HTML, CSS, Tailwind CSS |
| AI / ML | TensorFlow, PyTorch, Scikit-learn, Pandas, NumPy |
| Tools | Git, GitHub, VS Code, Jupyter Notebook |
| Concepts | Machine Learning, Neural Networks, Data Preprocessing, APIs |

### Acceptance Criteria

- Skills are grouped by category.
- Skill badges are visually consistent.
- Section remains readable on small screens.

---

## 1.5.5 Resume / Education Section

### Purpose

Provide academic and professional summary.

### Content

- Degree program
- University name
- Expected graduation year
- Relevant coursework
- Certifications
- Awards or achievements

### Acceptance Criteria

- Information is structured and easy to scan.
- Resume download button is available if resume file exists.
- The section can be updated easily later.

---

## 1.5.6 Contact Section

### Purpose

Allow visitors to contact the student easily.

### Contact Options

- Email link
- LinkedIn link
- GitHub link
- Optional contact form

### MVP Recommendation

For MVP, use direct mail link instead of backend form.

Example:

```html
<a href="mailto:student@example.com">Email Me</a>
```

### Acceptance Criteria

- All contact links are clickable and open the correct application (mail client, LinkedIn, GitHub).
- External links open in a new tab using `target="_blank"` with `rel="noopener noreferrer"`.
- Email address is obfuscated or rendered in a way that reduces spam risk where possible.
- Section is reachable from the navigation bar and footer.

---

# 1.6 Non-Functional Requirements

## 1.6.1 Performance

| Metric | Target |
|---|---|
| Lighthouse Performance score | ≥ 90 |
| Largest Contentful Paint (LCP) | < 2.5s on 4G |
| Cumulative Layout Shift (CLS) | < 0.1 |
| Total page weight (initial load) | < 500 KB gzipped |

- Images must be optimized (WebP/AVIF preferred, lazy-loaded below the fold).
- Fonts must be preloaded and use `font-display: swap`.

## 1.6.2 Accessibility

- Must meet WCAG 2.1 Level AA.
- All interactive elements reachable by keyboard.
- Color contrast ratio ≥ 4.5:1 for text.
- All images have descriptive `alt` text.
- Semantic HTML landmarks (`<header>`, `<main>`, `<nav>`, `<footer>`) used correctly.

## 1.6.3 Responsive Design

| Breakpoint | Target Width |
|---|---|
| Mobile | 320px – 767px |
| Tablet | 768px – 1023px |
| Desktop | 1024px – 1439px |
| Large desktop | ≥ 1440px |

- Mobile-first layout.
- No horizontal scrolling at any supported width.

## 1.6.4 Browser Support

- Latest two versions of Chrome, Firefox, Safari, and Edge.
- Mobile Safari (iOS 15+) and Chrome on Android (last 2 versions).

## 1.6.5 SEO

- Unique `<title>` and `<meta description>` per page.
- Open Graph and Twitter Card meta tags for social sharing.
- `robots.txt` and `sitemap.xml` generated at build time.
- Structured data (JSON-LD `Person` schema) included on the homepage.

---

# 1.7 Design System

## 1.7.1 Visual Style

- Clean, minimal, modern.
- Generous whitespace and clear typographic hierarchy.
- Light theme by default; optional dark mode toggle.

## 1.7.2 Color Palette (suggested)

| Token | Usage | Example |
|---|---|---|
| `--color-bg` | Page background | `#FFFFFF` / `#0B0F17` (dark) |
| `--color-fg` | Primary text | `#0F172A` / `#E2E8F0` (dark) |
| `--color-accent` | Buttons, links, highlights | `#2563EB` |
| `--color-muted` | Secondary text, borders | `#64748B` |
| `--color-surface` | Cards, panels | `#F8FAFC` / `#111827` (dark) |

## 1.7.3 Typography

| Role | Font (suggested) |
|---|---|
| Headings | Inter, Space Grotesk, or Geist Sans |
| Body | Inter or system UI stack |
| Code | JetBrains Mono or Fira Code |

## 1.7.4 Components

- Reusable components: Button, Card, Badge, Section, Navbar, Footer.
- Components must be theme-aware (respect dark/light tokens).

---

# 1.8 Information Architecture

## 1.8.1 Site Map

- Single-page application with anchored sections, OR multi-page with the following routes:
  - `/` — Home (Hero + About preview + featured Projects)
  - `/projects` — Full project list
  - `/projects/[slug]` — Project detail (optional)
  - `/about` — About + Skills + Education
  - `/contact` — Contact

## 1.8.2 Navigation

- Persistent top navigation bar with links to: Home, Projects, About, Contact.
- Sticky on scroll; collapses to a hamburger menu on mobile.
- Footer mirrors primary nav and includes social icons.

---

# 1.9 Out of Scope (MVP)

The following are explicitly **not** part of the MVP and may be considered later:

- Blog or article system
- Backend-powered contact form with database storage
- User authentication / admin dashboard
- CMS integration (e.g., Sanity, Contentful)
- Multi-language support (i18n)
- Analytics beyond a privacy-friendly page-view tracker
- Comment system on projects

---

# 1.10 Success Metrics

| Metric | Target (first 3 months post-launch) |
|---|---|
| Unique visitors | ≥ 200 |
| Average session duration | ≥ 60 seconds |
| Contact actions (mail click / form submit) | ≥ 10 |
| Resume downloads | ≥ 15 |
| Lighthouse scores (Perf / A11y / Best Practices / SEO) | ≥ 90 each |

---

## 2. Technical Specification

---

# 2.1 Recommended Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | React + Vite, or Next.js (App Router) | Fast DX, strong ecosystem, easy deployment |
| Language | TypeScript | Type safety, better tooling |
| Styling | Tailwind CSS | Rapid styling, consistent design tokens |
| Icons | Lucide React | Lightweight, consistent icon set |
| Animation | Framer Motion (optional) | Subtle, performant micro-interactions |
| Linting | ESLint + Prettier | Code quality and formatting |
| Package manager | pnpm or npm | — |

## 2.2 Project Structure (suggested)

```
portfolio/
├─ public/
│  ├─ resume.pdf
│  └─ images/
├─ src/
│  ├─ components/
│  │  ├─ Hero.tsx
│  │  ├─ About.tsx
│  │  ├─ Projects.tsx
│  │  ├─ ProjectCard.tsx
│  │  ├─ Skills.tsx
│  │  ├─ Education.tsx
│  │  ├─ Contact.tsx
│  │  ├─ Navbar.tsx
│  │  └─ Footer.tsx
│  ├─ data/
│  │  ├─ projects.ts
│  │  ├─ skills.ts
│  │  └─ profile.ts
│  ├─ styles/
│  │  └─ globals.css
│  ├─ App.tsx
│  └─ main.tsx
├─ index.html
├─ tailwind.config.ts
├─ vite.config.ts
├─ tsconfig.json
└─ package.json
```

## 2.3 Data Model

Project entries should be authored as typed data, not hard-coded JSX:

```ts
type Project = {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  category: "AI" | "ML" | "Web" | "Data Science" | "Computer Vision" | "Other";
  githubUrl?: string;
  demoUrl?: string;
  keyLearning: string;
  featured?: boolean;
  coverImage?: string;
};
```

## 2.4 Deployment

| Option | Notes |
|---|---|
| Vercel (recommended) | Zero-config for Vite/Next.js, free tier, custom domain support |
| Netlify | Comparable to Vercel, also free tier |
| GitHub Pages | Free, but limited for SPA routing |

- Production builds must be triggered automatically on push to `main`.
- Preview deployments should be generated for pull requests.
- A custom domain (e.g., `firstname-lastname.dev`) is recommended.

---

## 3. Implementation Roadmap

| Phase | Duration | Deliverables |
|---|---|---|
| Phase 1 — Setup | Day 1 | Repo, tooling, CI, deploy pipeline, base layout |
| Phase 2 — Core sections | Days 2–4 | Hero, About, Projects, Skills components built with placeholder content |
| Phase 3 — Content | Day 5 | Real project data, resume PDF, profile photo, copy review |
| Phase 4 — Polish | Days 6–7 | Responsive QA, accessibility audit, Lighthouse tuning, dark mode |
| Phase 5 — Launch | Day 8 | Custom domain, social meta tags, sitemap, announce |

---

## 4. Content Checklist

Before development can fully complete, the following content must be gathered:

- [ ] Full name and preferred title
- [ ] Short personal tagline (1 sentence)
- [ ] Bio (2–3 paragraphs)
- [ ] Profile photo or avatar (square, ≥ 400×400)
- [ ] Resume PDF
- [ ] Project details for at least 3 projects (title, description, stack, links, learnings)
- [ ] Project screenshots or cover images
- [ ] Education details (degree, university, expected graduation, GPA if relevant)
- [ ] Certifications and awards (if any)
- [ ] Email address for contact
- [ ] LinkedIn profile URL
- [ ] GitHub profile URL
- [ ] Optional: Twitter/X, personal blog, Kaggle, Hugging Face profile URLs

---

## 5. Future Enhancements (Post-MVP)

- Blog or technical write-ups section
- Backend-backed contact form (e.g., Resend, Formspree, or a serverless function)
- CMS integration for project entries
- Privacy-friendly analytics (Plausible, Umami)
- Project filtering by category and technology
- Animated transitions between sections
- Interactive AI demo embedded directly in the site (e.g., a hosted classifier)
- Light/dark theme persistence via `localStorage`
- RSS feed (if blog is added)

---

## 6. Open Questions

These need to be answered before or during Phase 1:

1. Single-page anchored layout, or multi-page with routing?
2. Next.js or Vite + React?
3. Will there be a contact form, or only direct contact links?
4. Will a custom domain be purchased, and if so, what is it?
5. Dark mode at launch, or post-MVP?
6. Are there any existing brand colors, fonts, or visual references to match?