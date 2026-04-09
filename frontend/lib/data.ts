/**
 * All portfolio content in one place. Edit here to update the site.
 */

export const siteConfig = {
  name: "Abhinav Mitra",
  tagline:
    "Full Stack Developer — I build web apps, cloud systems, and digital products that deliver results.",
  repoUrl: "https://github.com/iAbhiNaV2005/portfolio",
  resumeUrl:
    "https://drive.google.com/file/d/1ZQUve17fnmI3b3teJGMVVX7OZOAR90rV/view?usp=sharing",
  resumeDownloadUrl:
    "https://drive.google.com/uc?export=download&id=1ZQUve17fnmI3b3teJGMVVX7OZOAR90rV",
};

export const bio = {
  short:
    "I'm Abhinav — a full stack developer who turns ideas into production-ready digital products. I specialize in building performant web applications, scalable backends, and cloud-native solutions for businesses and startups.",
  location: "Haryana, India",
  email: "meabhinav2005@gmail.com",
  available: true,
};

/**
 * Education — only rendered on the Resume page.
 * Kept here so recruiters still see it where it matters.
 */
export const education = {
  degree: "B.Tech in Computer Science and Engineering",
  institution: "Central University of Haryana",
  period: "",
};

export const skills = {
  Frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Redux",
    "Vite",
    "Framer Motion",
  ],
  Backend: ["Node.js", "Spring Boot", "Express.js", "FastAPI"],
  Databases: ["MySQL", "PostgreSQL", "Firebase", "Redis"],
  Languages: ["C++", "Java", "Python"],
  Tools: [
    "VS Code",
    "Antigravity",
    "Cursor",
    "Postman",
    "Jest Testing",
    "Git",
  ],
  "Cloud & Infrastructure": [
    "AWS (EC2, S3, RDS, IAM)",
    "Docker",
    "GitHub Actions",
  ],
};

/* ---------- Services ---------- */

export interface Service {
  title: string;
  description: string;
  icon: string; // heroicon name or emoji
  highlights: string[];
}

export const services: Service[] = [
  {
    title: "Full Stack Web Development",
    description:
      "End-to-end web applications built with modern frameworks. From landing pages to complex SaaS platforms — designed for performance and scale.",
    icon: "code",
    highlights: ["Next.js / React", "Node.js / Express", "TypeScript", "Responsive Design"],
  },
  {
    title: "Cloud Architecture & DevOps",
    description:
      "Cloud-native infrastructure that scales with your business. AWS services, containerization, and automated deployment pipelines.",
    icon: "cloud",
    highlights: ["AWS (EC2, S3, RDS)", "Docker", "CI/CD Pipelines", "GitHub Actions"],
  },
  {
    title: "UI/UX Development",
    description:
      "Pixel-perfect, animated interfaces that feel premium. Accessibility-first design with smooth micro-interactions that keep users engaged.",
    icon: "sparkles",
    highlights: ["Tailwind CSS", "Framer Motion", "Responsive Layouts", "Dark Mode"],
  },
  {
    title: "API & Backend Systems",
    description:
      "Robust APIs and backend architectures built for reliability. RESTful services, database design, and third-party integrations.",
    icon: "server",
    highlights: ["REST APIs", "Database Design", "Authentication", "Rate Limiting"],
  },
];

/* ---------- Stats ---------- */

export const stats = [
  { label: "Projects Delivered", value: "7+" },
  { label: "Happy Clients", value: "5+" },
  { label: "Months Experience", value: "12+" },
];

/* ---------- Projects ---------- */

export type ProjectType = "client" | "personal" | "openSource";

export interface Project {
  title: string;
  description: string;
  tech: string[];
  repo: string;
  live?: string;
  thumbnail?: string;
  type: ProjectType;
}

export const projects: Project[] = [
  {
    title: "Eleveon",
    description:
      "Full-featured e-learning platform with course management, secure payments via Cashfree, OTP authentication, and a custom admin panel for content control.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Cashfree", "Firebase"],
    repo: "",
    live: "https://eleveon.in",
    thumbnail: "/eleveon-thumb.png",
    type: "client",
  },
  {
    title: "DentalCare",
    description:
      "Modern dental clinic website with appointment booking features, streamlined patient management, and service showcases.",
    tech: ["Next.js", "Tailwind CSS", "Responsive Design"],
    repo: "",
    live: "https://truecaredental.in/",
    thumbnail: "/dentalcare.png",
    type: "client",
  },
  {
    title: "Loopless",
    description:
      "Agency website for a mobile development company — showcasing services, portfolio, and client success stories with high-performance animations.",
    tech: ["React.js", "Framer Motion", "Tailwind CSS"],
    repo: "",
    live: "https://loopless.agency/site",
    thumbnail: "/loopless.png",
    type: "client",
  },
  {
    title: "GrabPic",
    description:
      "Turn chaotic photo collections into a personalized gallery of you, powered by smart face recognition and seamless discovery.",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "AWS Lambda",
      "DynamoDB",
      "AWS S3",
      "Python face-recognition",
      "Docker",
    ],
    repo: "https://github.com/iAbhiNaV2005/GrabPic.git",
    live: "https://grab-pic-one.vercel.app/",
    thumbnail: "/image.png",
    type: "personal",
  },
  {
    title: "FitFlex",
    description:
      "A fitness discovery platform with real-time exercise previews, searchable routines, and curated workout categories.",
    tech: ["React.js", "RapidAPI", "Tailwind CSS", "Express.js"],
    repo: "https://github.com/iAbhiNaV2005/Fit-Flex",
    live: "https://fit-flex-112.netlify.app/",
    thumbnail: "/fitflex-thumb.png",
    type: "personal",
  },
  {
    title: "ZipTales",
    description:
      "AI-powered news verification platform that filters misinformation and provides community-verified credibility scores for authentic journalism.",
    tech: ["TypeScript", "React.js", "RAG", "Supabase"],
    repo: "https://github.com/iAbhiNaV2005/Zip_Tales",
    live: "https://ziptales.netlify.app/",
    thumbnail: "/ziptales-thumb.png",
    type: "openSource",
  },
  {
    title: "Anti-Pollution Routes",
    description:
      "Navigate through routes with the least air quality index, fetched in real time for healthier commutes.",
    tech: ["React.js", "Express.js", "REST APIs"],
    repo: "",
    type: "personal",
  },
];

/* ---------- Experience ---------- */

export interface Experience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Noodiyos",
    period: "Feb 2026 – Present",
    bullets: [
      'Engineered the "Appetite Sense AI" backend using FastAPI and RAG architecture, leveraging OpenAI embeddings for context-aware food recommendations.',
      "Implemented full-stack features using React and TypeScript, ensuring seamless data flow between the AI model and the user interface.",
      "Optimized API latency for real-time inference, enabling instant menu customization based on user preferences.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Neximprove (Trade-Tech SaaS)",
    period: "Dec 2025 – Feb 2026",
    bullets: [
      "Took ownership of high-priority (P0) backend development, building stable RESTful APIs for Department and Organizational Chart modules using Express.js and TypeScript.",
      "Built full-stack User Management features, integrating React interfaces with secure TypeScript backends to handle complex admin workflows and data updates.",
    ],
  },
  {
    role: "Open Source Contributor",
    company: "ZipTales — AI News Verification Platform",
    period: "Aug 2025 – Sep 2025",
    bullets: [
      "Contributed to an AI-powered news verification platform by engineering responsive UI components using React.js.",
      "Refactored legacy frontend code, reducing page load latency and improving component reusability.",
      "Collaborated with maintainers to merge 5+ pull requests focusing on mobile responsiveness and UI consistency.",
    ],
  },
];

/* ---------- Social / Nav ---------- */

export const socialLinks = {
  github: "https://github.com/iAbhiNaV2005",
  linkedin: "https://www.linkedin.com/in/abhinav-mitra2005",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];
