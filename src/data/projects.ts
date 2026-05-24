export type Project = {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  category:
    | 'AI'
    | 'ML'
    | 'NLP'
    | 'Computer Vision'
    | 'Data Science'
    | 'Mobile'
    | 'Web';
  githubUrl?: string;
  demoUrl?: string;
  keyLearning: string;
  featured?: boolean;
  wip?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'heycyan-tourism-assistant',
    title: 'HeyCyan — AI Tourist Guide for Malacca',
    description:
      'A multimodal AI tourist guide for Malacca that uses computer vision and voice interaction to identify landmarks and restaurants in real time. Includes restaurant mode with Google Places integration, multilingual support (EN / MS / ZH), and optional BLE smart-glasses pairing for hands-free exploration.',
    technologies: [
      'Kotlin',
      'Jetpack Compose',
      'Python',
      'FastAPI',
      'Gemini 2.5 Flash',
      'Google Places API',
    ],
    category: 'Mobile',
    githubUrl:
      'https://github.com/shawtygirlzzzz/Multimodal-AI-Personal-Assistant-for-Tourism',
    keyLearning:
      "Integrating a vision LLM into a real-time mobile experience — grounding Gemini's responses with Google Search and Places data, handling multilingual TTS, and pairing with BLE smart glasses for hands-free use.",
    featured: true,
    wip: true,
  },
  {
    slug: 'camera-surveillance-llm',
    title: 'Camera Surveillance System using Multi-Modal LLMs',
    description:
      'Final-year diploma project: a camera surveillance system powered by Google Gemini 1.5 Flash for object and behavior recognition. Reduces false alarms and improves monitoring through structured multi-modal reasoning over video frames.',
    technologies: [
      'Python',
      'Gemini 1.5 Flash',
      'Computer Vision',
      'Streamlit',
    ],
    category: 'Computer Vision',
    githubUrl:
      'https://github.com/shawtygirlzzzz/Camera-Surveillance-System-using-Multi-Modal-LLMs',
    keyLearning:
      'Designing alert systems around probabilistic model output — handling false positives and structuring prompts so a vision LLM produces actionable decisions, not just descriptions.',
    featured: true,
  },
  {
    slug: 'diabot-analytics-forge',
    title: 'DiaBot Analytics Forge',
    description:
      'An autonomous AI agent swarm built with the Gemini Nexus ADK. DiaBot dynamically cleans messy medical datasets and trains predictive ML models using self-healing code execution and Gemini 2.5 Flash. Built at The Agentverse: Gemini Nexus hackathon by GDG on Campus UTM.',
    technologies: [
      'Python',
      'Gemini 2.5 Flash',
      'Gemini Nexus ADK',
      'AI Agents',
    ],
    category: 'AI',
    githubUrl: 'https://github.com/shawtygirlzzzz/diabot-forge',
    keyLearning:
      'How agent swarms coordinate via shared context, and how self-healing code execution lets an LLM recover from runtime errors without human intervention.',
    featured: true,
  },
  {
    slug: 'home-assistant-mobile',
    title: 'Home Assistant Mobile Client',
    description:
      'A custom cross-platform mobile interface for the Home Assistant smart-home ecosystem. Built with React Native and Expo, it provides streamlined control and monitoring of smart devices from a single mobile app.',
    technologies: ['React Native', 'Expo', 'TypeScript', 'JavaScript'],
    category: 'Mobile',
    githubUrl: 'https://github.com/shawtygirlzzzz/home-assistant-mobile',
    keyLearning:
      'Cross-platform mobile architecture with Expo — bridging native APIs with a shared JS/TS codebase while keeping the UI consistent across iOS and Android.',
    featured: true,
  },
];
