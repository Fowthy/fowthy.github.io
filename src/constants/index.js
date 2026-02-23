import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  mongodb,
  git,
  figma,
  docker,
  creator,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "AI Automation Specialist",
    icon: creator,
  },
  {
    title: "Software Architect",
    icon: backend,
  },
  {
    title: "Data Analyst",
    icon: web,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

// Extended tech stack displayed as text badges
const techStack = {
  "Frontend": ["Next.js", "React", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion", "shadcn/ui", "Radix UI"],
  "Backend": ["Python", "FastAPI", "Flask", "Node.js", "Next.js API Routes"],
  "AI & ML": ["OpenAI", "Anthropic Claude", "Google Gemini", "Mastra.ai", "Vercel AI SDK", "LangChain", "Whisper", "Spacy", "TensorFlow"],
  "Databases": ["PostgreSQL", "Redis", "MongoDB", "MySQL", "pgvector", "Prisma", "Drizzle ORM", "SQLAlchemy"],
  "DevOps & Infra": ["Docker", "Kubernetes", "Nginx", "GitHub Actions", "n8n", "AWS", "Vercel", "Firebase"],
  "Tools & Other": ["Git", "FFmpeg", "Selenium", "Grafana", "Stripe", "GLSL Shaders", "WebGL"],
};

const experiences = [
  {
    title: "Founder & Lead Developer",
    company_name: "Folt Labs",
    icon: './foltlabs.png',
    iconBg: "#1a1a2e",
    date: "September 2024 - Present",
    points: [
      "Founded a software development company providing B2B full-stack and AI solutions.",
      "Architected and delivered 10+ SaaS platforms for SEO/marketing clients including rank trackers, AI-powered fact-checkers, and document assistants.",
      "Built AI agent systems using Mastra.ai, RAG with pgvector, and multi-LLM orchestration (OpenAI, Anthropic, Gemini).",
      "Designed production infrastructure with Docker, PostgreSQL, Redis, Nginx, and n8n workflow automation.",
    ],
  },
  {
    title: "AI Engineer (Internship)",
    company_name: "d-centralize",
    icon: './d_centralize.jpeg',
    iconBg: "#383E56",
    date: "February 2024 - July 2024",
    points: [
      "Worked on the implementation of LLM (Large Language Model) workflows within the Appsemble platform.",
      "Research for optimization of current LLMs and future possibilities for the low-code platform.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Capital Tool Company",
    icon: './capitool.jpeg',
    iconBg: "#383E56",
    date: "March 2021 - September 2024",
    points: [
      "Developing and maintaining the fintech software by Capitool using jQuery, SCSS and PHP.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to continuously develop the software.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full-Stack Developer (Internship)",
    company_name: "Capital Tool Company",
    icon: './capitool.jpeg',
    iconBg: "#383E56",
    date: "August 2022 - January 2023",
    points: [
      "Worked on a restaurant system called Repido, which uses the Capitool payment system.",
      "Collaborating with company supervisor and the client, using Agile methodology.",
      "Developed the whole system ready for production, connected with the Capitool API.",
      "Created and implemented the web design using Figma, Bootstrap and SCSS.",
    ],
  },
  {
    title: "Junior Front-End Developer",
    company_name: "AuxCode",
    icon: './auxcode.jpeg',
    iconBg: "#383E56",
    date: "January 2019 - March 2021",
    points: [
      "Developing and maintaining web applications using jQuery and other related technologies. (Capitool and Dialogue by KPMG)",
      "Working with cross-functional teams including product managers, designers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser and device compatibility.",
      "Participating in code reviews and team meetings.",
    ],
  },
];

const projects = [
  {
    name: "AI Music Video Generator",
    description:
      "AI-powered platform that generates professional music videos from audio files. Features audio analysis (BPM detection, section detection, energy analysis), AI character generation, creative direction with shot planning, keyframe and video clip generation via FAL.ai, and FFmpeg assembly with beat-synced cuts, crossfades, and color grading.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "Mastra.ai", color: "orange-text-gradient" },
      { name: "Anthropic Claude", color: "green-text-gradient" },
      { name: "FFmpeg", color: "pink-text-gradient" },
      { name: "FAL.ai", color: "blue-text-gradient" },
      { name: "TypeScript", color: "orange-text-gradient" },
    ],
    image: './videogen.png',
    source_code_link: "https://github.com/Fowthy",
  },
  {
    name: "PS1 Web Game Engine",
    description:
      "A TypeScript game engine recreating PlayStation 1 graphics aesthetics through custom GLSL shaders. Features vertex snapping, affine texture mapping, color quantization, 320x240 rendering, first/third-person cameras, and collision detection — all running in the browser.",
    tags: [
      { name: "TypeScript", color: "blue-text-gradient" },
      { name: "Three.js", color: "orange-text-gradient" },
      { name: "GLSL Shaders", color: "green-text-gradient" },
      { name: "Vite", color: "pink-text-gradient" },
      { name: "WebGL", color: "blue-text-gradient" },
    ],
    image: './ps1game.png',
    source_code_link: "https://github.com/Fowthy/ps1_webgame",
  },
  {
    name: "3D NEXUS - Neural Architecture",
    description:
      "Immersive 3D web experience simulating descent through 7 layers of a digital neural architecture. Built with Three.js featuring 15,000 star particles, lightning systems, bloom post-processing, scroll-based navigation, and 60fps performance — all in a single HTML file.",
    tags: [
      { name: "Three.js", color: "blue-text-gradient" },
      { name: "WebGL", color: "orange-text-gradient" },
      { name: "GLSL", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
    ],
    image: './3dnexus.png',
    source_code_link: "https://github.com/Fowthy",
  },
  {
    name: "SUE AI - K8s Anomaly Detection",
    description:
      "Machine learning system for detecting and predicting irregularities in Kubernetes networking logs. Implements multiple models including SVM, Isolation Forest, Transformers, and ANNs with DVC pipeline for experiment tracking and reproducibility.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Machine Learning", color: "orange-text-gradient" },
      { name: "Kubernetes", color: "green-text-gradient" },
      { name: "DVC", color: "pink-text-gradient" },
      { name: "Streamlit", color: "blue-text-gradient" },
    ],
    image: './sueai.png',
    source_code_link: "https://github.com/Fowthy/SueAI",
  },
  {
    name: "Capitool",
    image: './capitool.jpeg',
    description:
      "Capitool is a financial web application that allows users to manage their finances, track their expenses and pay card-less using QR code payments. I developed parts of the front-end, including custom design for the bank ABN AMRO.",
    tags: [
      { name: "jQuery", color: "orange-text-gradient" },
      { name: "PHP", color: "blue-text-gradient" },
      { name: "Bootstrap", color: "green-text-gradient" },
      { name: "SCSS", color: "pink-text-gradient" },
      { name: "Webpack", color: "blue-text-gradient" },
    ],
    source_code_link: "https://capitool.com/",
  },
  {
    name: "DAF Maintenance Predictor",
    description:
      "Condition-based maintenance prediction system for DAF's Engine Factory. Monitors machine data across multiple axes, detects anomalies, and schedules preventive maintenance using ML models and Grafana dashboards.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Grafana", color: "orange-text-gradient" },
      { name: "MySQL", color: "green-text-gradient" },
      { name: "Docker", color: "blue-text-gradient" },
      { name: "Bash", color: "pink-text-gradient" },
    ],
    image: './daf.jpg',
    source_code_link: "https://github.com/Fowthy/DAF-Maintenance-Prediction",
  },
  {
    name: "Appsemble AI",
    description:
      "Designed to simplify the process of integrating and chaining multiple Large Language Models (LLMs) to create powerful AI workflows. Built during internship at d-centralize for the Appsemble low-code platform.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "LangChain", color: "orange-text-gradient" },
      { name: "Ollama", color: "green-text-gradient" },
      { name: "Python", color: "blue-text-gradient" },
    ],
    image: './appsembleai.png',
    source_code_link: "https://gitlab.com/appsemble/appsemble-ai/",
  },
  {
    name: "StudioNest",
    description:
      "Full-stack web app for booking rehearsal rooms and studios. Built with microservices architecture, fully tested with integration tests, CI/CD via GitHub Actions, and deployed to Kubernetes.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "FastAPI", color: "green-text-gradient" },
      { name: "Docker", color: "blue-text-gradient" },
      { name: "Kubernetes", color: "orange-text-gradient" },
      { name: "GitHub Actions", color: "pink-text-gradient" },
    ],
    image: './studionest.png',
    source_code_link: "https://github.com/Fowthy/StudioNest-API",
  },
  {
    name: "NLP Playground",
    description:
      "Collection of AI applications leveraging NLP: an AI Album Generator, Mood Analyzer with emotional tone evaluation, and Health & Fitness Advisor with personalized guidance — all built with LangChain and Streamlit.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "LangChain", color: "orange-text-gradient" },
      { name: "OpenAI", color: "green-text-gradient" },
      { name: "Streamlit", color: "pink-text-gradient" },
    ],
    image: './nlp.png',
    source_code_link: "https://github.com/Fowthy/NLP_Playground",
  },
  {
    name: "Ordina Train Predictor",
    description:
      "AI tool to predict train delays in the Dutch railway system. Built with ML models for forecasting delays based on historical data. Developed for the company Ordina.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "TensorFlow", color: "orange-text-gradient" },
      { name: "Jupyter", color: "green-text-gradient" },
      { name: "Data Science", color: "pink-text-gradient" },
    ],
    image: './ordina.jpg',
    source_code_link: "https://github.com/Fowthy/Train-Delay-Predictor",
  },
];

export { services, technologies, techStack, experiences, projects };
