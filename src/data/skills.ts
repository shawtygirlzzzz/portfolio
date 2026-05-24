export type SkillCategory = {
  name: string;
  icon: 'Code2' | 'Brain' | 'Layout' | 'Wrench' | 'Sparkles';
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    icon: 'Code2',
    skills: ['Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    name: 'AI / ML',
    icon: 'Brain',
    skills: [
      'Google Gemini',
      'Vertex AI',
      'Multi-Modal LLMs',
      'Prompt Engineering',
      'Machine Learning',
      'Neural Networks',
    ],
  },
  {
    name: 'Frontend & Mobile',
    icon: 'Layout',
    skills: [
      'React',
      'React Native',
      'Expo',
      'Streamlit',
      'Tailwind CSS',
      'HTML',
      'CSS',
    ],
  },
  {
    name: 'Tools & Cloud',
    icon: 'Wrench',
    skills: ['Google Cloud', 'Git', 'GitHub', 'SQLite', 'VS Code'],
  },
  {
    name: 'Concepts',
    icon: 'Sparkles',
    skills: [
      'AI Agents',
      'Computer Vision',
      'NLP',
      'Data Science',
      'Cloud Computing',
      'Data Structures',
    ],
  },
];
