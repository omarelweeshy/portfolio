// All copy and links live here. Edit this file to update the site.

export const profile = {
  name: "Omar Ashraf",
  role: "AI & Automation Engineer",
  location: "Cairo, Egypt",
  timeZone: "Africa/Cairo",
  email: "omarelweshyy@gmail.com",
  github: "https://github.com/omarelweeshy",
  linkedin: "https://www.linkedin.com/in/omar-ashraf-a3575625a",
};

export const statement =
  "I build AI systems that do real work: automations with a human in control, forecasts people act on, and document tools that show their sources. Useful first, impressive second.";

export type Visual = "image" | "documents" | "forecast" | "vision";

export type Project = {
  slug: string;
  name: string;
  year: string;
  category: string;
  summary: string;
  stack: string[];
  status: string;
  visual: Visual;
  image?: string;
  demo?: string;
  /** Omit for private repos, so the card doesn't link to a 404. */
  repo?: string;
};

export const projects: Project[] = [
  {
    slug: "clientflow",
    name: "ClientFlow AI",
    year: "2026",
    category: "Automation / CRM",
    summary:
      "Turns unstructured enquiries into qualified opportunities. Extraction, transparent scoring, approval queue, delivery and recovery of failed runs, all with a human signing off.",
    stack: ["Next.js", "FastAPI", "PostgreSQL", "n8n", "Docker"],
    status: "Live demo, fictional data",
    visual: "image",
    image: "/work/clientflow.jpg",
    demo: "https://clientflow-ai-eight.vercel.app",
    repo: "https://github.com/omarelweeshy/clientflow-ai",
  },
  {
    slug: "auditcraft",
    name: "AuditCraft AI",
    year: "2026",
    category: "Audits / Proposals",
    summary:
      "Captures a website, records measurable evidence, and turns approved findings into a branded report and proposal. Evidence first, human judgment always.",
    stack: ["TypeScript", "Playwright", "PostgreSQL", "Redis", "Docker"],
    status: "Live demo, recorded evidence",
    visual: "image",
    image: "/work/auditcraft.jpg",
    demo: "https://auditcraft-ai.vercel.app",
    repo: "https://github.com/omarelweeshy/auditcraft-ai",
  },
  {
    slug: "docintel",
    name: "DocIntel AI",
    year: "2026",
    category: "Document intelligence / RAG",
    summary:
      "Self-hosted retrieval over PDFs, DOCX and text. Answers cite the exact passage and page, run on local models, and abstain when the evidence is not there. The public demo runs retrieval in your browser.",
    stack: ["Python", "FastAPI", "pgvector", "Ollama", "Next.js"],
    status: "Live demo, sample documents",
    visual: "image",
    image: "/work/docintel.jpg",
    demo: "https://docintel-ai-psi.vercel.app",
    repo: "https://github.com/omarelweeshy/docintel-ai",
  },
  {
    slug: "sirab",
    name: "Sirab Expeditions",
    year: "2026",
    category: "Motion design / WebGL",
    summary:
      "A cinematic site for a fictional desert expedition company. Hand-written WebGL dunes, a route map that draws itself from real coordinates, a sandstorm transition and a soundscape synthesised live in the browser. Every visual and sound is generated in code.",
    stack: ["TypeScript", "WebGL / GLSL", "Web Audio", "GSAP", "Vite"],
    status: "Concept site, fictional brand",
    visual: "image",
    image: "/work/sirab.jpg",
    demo: "https://omarelweeshy.vercel.app/sirab",
  },
  {
    slug: "sync",
    name: "SYNC Escape Rooms",
    year: "2026",
    category: "Real-time 3D / WebGL",
    summary:
      "A cinematic site for a fictional escape room venue in New Cairo. A three.js chamber built from photoscanned assets reacts to scroll: each room relights the scene, the chest opens, the exit door swings and the frame dissolves into white, all scored by sound synthesised live in the browser. On weak GPUs it lowers its render resolution instead of stuttering.",
    stack: ["TypeScript", "three.js", "GLSL", "Web Audio", "GSAP"],
    status: "Concept site, fictional venue",
    visual: "image",
    image: "/work/sync.jpg",
    demo: "https://omarelweeshy.vercel.app/sync",
  },
  {
    slug: "forecast",
    name: "Donation Forecast",
    year: "2026",
    category: "Predictive analytics",
    summary:
      "Daily donation forecasting with adaptive XGBoost and a bilingual Arabic and English dashboard. A public version of production work, rebuilt on synthetic data.",
    stack: ["Python", "XGBoost", "Streamlit", "Pandas"],
    status: "Synthetic data version",
    visual: "forecast",
    repo: "https://github.com/omarelweeshy/donations-forecast",
  },
  {
    slug: "vision",
    name: "Beyond the Surface",
    year: "2025",
    category: "Computer vision / Research",
    summary:
      "Multi-class skin condition classification with DenseNet201 and transfer learning, benchmarked against CNN, ResNet and EfficientNet. 94.6% test accuracy. Research, not a clinical tool.",
    stack: ["TensorFlow", "Keras", "DenseNet201", "Flutter"],
    status: "Graduation research",
    visual: "vision",
    repo: "https://github.com/omarelweeshy/AI-Dermatology-DenseNet201",
  },
];

export const services = [
  {
    title: "Workflow automation",
    body: "Intake, routing, approvals and follow-ups that run on their own, with retries, audit trails and a person in the loop where it matters.",
    tools: "n8n / Power Automate / Python / APIs",
  },
  {
    title: "Predictive models",
    body: "Forecasting and classification built on your data, evaluated honestly, and shipped into something your team will open every week.",
    tools: "XGBoost / scikit-learn / TensorFlow",
  },
  {
    title: "Document intelligence",
    body: "Search and question answering over your own documents, with citations you can check and models that can stay on your servers.",
    tools: "RAG / pgvector / Ollama / OpenAI",
  },
  {
    title: "Dashboards & apps",
    body: "Decision-ready dashboards and small internal tools that turn model output into actions for non-technical teams.",
    tools: "Power BI / Next.js / Streamlit",
  },
];

export const experience = [
  {
    company: "Egyptian Food Bank",
    role: "Digital Applications, BI & AI Specialist",
    period: "2026 – Now",
    note: "Predictive donation forecasting, ML pipelines, Power Automate workflows and executive BI dashboards.",
  },
  {
    company: "Hassan Allam Holding",
    role: "Full Stack Developer Intern",
    period: "2025",
    note: "ASP.NET Core MVC applications with clean architecture and SQL query optimisation.",
  },
  {
    company: "Universities of Canada in Egypt",
    role: "Applications & Web Developer Intern",
    period: "2024",
    note: "Responsive React applications, design to component, integrated with backend APIs.",
  },
  {
    company: "Code Samurai",
    role: "Machine Learning Intern",
    period: "2024",
    note: "Supervised models end to end: preprocessing, feature engineering and evaluation.",
  },
];

export const marquee = [
  "AI automation",
  "Predictive models",
  "Document intelligence",
  "Human in the loop",
  "Dashboards",
  "Threat intelligence",
];
