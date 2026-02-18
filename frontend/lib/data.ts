/**
 * All portfolio content in one place. Edit here to update the site.
 */

export const siteConfig = {
  name: "Abhinav Mitra",
  tagline: "Full Stack Developer • Cloud Computing • Low Level System Design",
  repoUrl: "https://github.com/iAbhiNaV2005/portfolio",
};

export const bio = {
  short:
    "I am Abhinav Mitra. I think in systems. I build in code. I grow through challenge.",
  location: "Mahendragarh, Haryana, India",
  email: "meabhinav2005@gmail.com",
  phone: "+91 9472635512",
};

export const education = {
  degree: "B.Tech in Computer Science and Engineering",
  institution: "Central University of Haryana",
  period: "",
};

export const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Vite", "Framer Motion"],
  Backend: ["Node.js", "Spring Boot", "Express.js", "FastAPI"],
  Databases: ["MySQL", "PostgreSQL", "Firebase", "Redis"],
  Languages: ["C++", "Java", "Python"],
  Tools: ["VS Code", "Antigravity", "Cursor", "Postman", "Jest Testing", "Git"],
  "Cloud & Infrastructure": ["AWS (EC2, S3, RDS, IAM)", "Docker", "GitHub Actions"],
};

export interface Project {
  title: string;
  description: string;
  tech: string[];
  repo: string;
  live?: string;
  thumbnail?: string;
}

export const projects: Project[] = [
  {
    title: "FitFlex",
    description:
      "A fitness discovery platform with real-time exercise previews, searchable routines, and curated workout categories.",
    tech: ["React.js", "RapidAPI", "Tailwind CSS", "Express.js"],
    repo: "https://github.com/iAbhiNaV2005/Fit-Flex",
    live: "https://fit-flex-112.netlify.app/",
    thumbnail: "/fitflex-thumb.png",
  },
  {
    title: "ZipTales (Open Source Contribution)",
    description:
      "AI-powered news verification platform that filters misinformation and provides community-verified credibility scores for authentic journalism.",
    tech: ["TypeScript", "React.js", "RAG", "Supabase"],
    repo: "https://github.com/iAbhiNaV2005/Zip_Tales",
    live: "https://ziptales.netlify.app/",
    thumbnail: "/ziptales-thumb.png",
  },
  {
    title: "GrabPic",
    description:
      "Turn chaotic photo collections into a personalized gallery of you, powered by smart recognition and seamless discovery.",
    tech: ["Next.js", "Tailwind CSS", "AWS Lambda", "AWS RDS (PostgreSQL)", "AWS Rekognition"],
    repo: "",
  },
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    role: "Full Stack Developer Intern",
    company: "Noodiyos",
    period: "Feb 2026 – Present",
    bullets: [
      "Engineered the \"Appetite Sense AI\" backend using FastAPI and RAG architecture, leveraging OpenAI embeddings for context-aware food recommendations.",
      "Implemented full-stack features using React and TypeScript, ensuring seamless data flow between the AI model and the user interface.",
      "Optimized API latency for real-time inference, enabling instant menu customization based on user preferences.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Neximprove (Trade-Tech SaaS)",
    period: "Dec 2025 – Feb 2026",
    bullets: [
      "Took ownership of high-priority (P0) backend development, building stable RESTful APIs for Department and Organizational Chart modules using Express.js and TypeScript.",
      "Built full-stack User Management features, integrating React interfaces with secure TypeScript backends to handle complex admin workflows and data updates.",
    ],
  },
  {
    role: "Open Source Contributor",
    company: "GirlScript Summer of Code (GSSOC'25)",
    period: "Aug 2025 – Sep 2025",
    bullets: [
      "Contributed to Zip Tales, an AI-powered news verification platform, by engineering responsive UI components using React.js.",
      "Refactored legacy frontend code, reducing page load latency and improving component reusability.",
      "Collaborated with maintainers to merge 5+ pull requests focusing on mobile responsiveness and UI consistency.",
    ],
  },
];

export const socialLinks = {
  github: "https://github.com/iAbhiNaV2005",
  linkedin: "https://www.linkedin.com/in/abhinav-mitra2005",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];
