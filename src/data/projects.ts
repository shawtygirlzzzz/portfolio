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
      'A hands-free AI tourist guide for Malacca built on HeyCyan smart glasses. A press of the temple button captures the landmark through the glasses camera and records the question through their mic; a FastAPI backend sends both to Gemini, and the answer is spoken back through the glasses in English or Malay. A cue tone opens a follow-up window so each stop becomes a conversation rather than a one-shot lookup.',
    technologies: [
      'Kotlin',
      'Jetpack Compose',
      'Python',
      'FastAPI',
      'Gemini 3.5 / 2.5 Flash',
      'BLE + WiFi Direct',
    ],
    category: 'Mobile',
    githubUrl: 'https://github.com/shawtygirlzzzz/Code_FYP_Latest',
    keyLearning:
      "Most of the work was below the AI layer. The glasses SDK's capture call is secretly two-phase and returns the photo in 1KB chunks the caller has to reassemble, and Android's SpeechRecognizer kept hijacking the phone mic — so I dropped it and recorded the audio myself, letting Gemini transcribe. Splitting recognition and follow-ups across two Gemini models cut a 45-second wait down to about three.",
    featured: true,
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
