export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  details: string[];
  current?: boolean;
};

export const education: EducationItem[] = [
  {
    degree: 'BSc (Hons) Computer Science — Artificial Intelligence',
    institution: 'Universiti Teknikal Malaysia Melaka (UTeM)',
    period: 'Mar 2025 — Present',
    details: [
      'Current CGPA: 3.56',
      'Relevant coursework: Natural Language Processing, Machine Learning, Neural Networks.',
    ],
    current: true,
  },
  {
    degree: 'Diploma in Computer Science',
    institution: 'Universiti Teknikal Malaysia Melaka (UTeM)',
    period: 'Aug 2022 — Jan 2025',
    details: [
      'CGPA: 3.46',
      'Relevant coursework: Data Structures, Web Development, Databases, Data Communication & Networking, Data Science, Cloud Computing.',
      'Final-year project: Camera Surveillance System using Multi-Modal LLMs.',
    ],
  },
];

export type Certification = {
  name: string;
  issuer: string;
  year: string;
  url?: string;
};

export const certifications: Certification[] = [
  {
    name: 'Google Cloud Computing Foundations: Data, ML, and AI',
    issuer: 'Google Cloud',
    year: '2024',
  },
  {
    name: 'Prompt Design in Vertex AI',
    issuer: 'Google',
    year: '2024',
  },
  {
    name: 'Prepare Data for ML APIs on Google Cloud',
    issuer: 'Google Cloud',
    year: '2024',
  },
  {
    name: 'Build with AI Hackathon Certificate',
    issuer: 'Google Developer Groups',
    year: '2026',
  },
];
