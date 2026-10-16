/**
 * Portfolio Data Layer — Tailored for Full Stack Software Engineering Profiles.
 * Synchronized with Resume & Production Track Record.
 */

export const siteConfig = {
  name: "Abhinav Mitra",
  title: "Full Stack Software Engineer",
  tagline: "Full Stack Software Engineer | Java, Spring Boot, React, AWS Serverless",
  subTagline:
    "Engineering high-throughput backend services, autonomous RAG & MCP agents, and event-driven serverless cloud systems.",
  repoUrl: "https://github.com/iAbhiNav2005/portfolio",
  portfolioUrl: "https://abhinavm-portfolio.vercel.app",
  resumeUrl:
    "https://drive.google.com/file/d/1ZQUve17fnmI3b3teJGMVVX7OZOAR90rV/view?usp=sharing",
  resumeDownloadUrl:
    "https://drive.google.com/uc?export=download&id=1ZQUve17fnmI3b3teJGMVVX7OZOAR90rV",
};

export const bio = {
  headline: "Software Engineer specializing in scalable backends, AI agents, and serverless systems.",
  short:
    "Full Stack Software Engineer (B.Tech Computer Science, graduating 2027) with internship, open-source, and production client engineering experience across Java (Spring Boot), TypeScript, React, Next.js, and AWS Serverless architectures. Proven track record building production RAG engines, autonomous MCP coding agents, and payment pipelines processing INR 100,000+ at 100% success rate.",
  location: "Delhi, India (Open to Relocate)",
  email: "abhinavmitra2@gmail.com",
  phone: "+91-9472635512",
  available: true,
  statusBadge: "Open to Full-Time Software Engineering Roles",
};

export const education = {
  degree: "Bachelor of Technology (B.Tech), Computer Science and Engineering",
  institution: "Central University of Haryana, India",
  period: "Expected 2027",
  grade: "CGPA: 7.19 / 10 (through 6th semester)",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (OOP)",
    "Database Management Systems (DBMS)",
    "Operating Systems",
    "Computer Networks",
    "Software Engineering",
  ],
};

export const skills = {
  "Languages": ["Java", "TypeScript", "JavaScript (ES6+)", "Python", "SQL", "C++"],
  "Backend & Frameworks": [
    "Spring Boot",
    "Hibernate",
    "JPA",
    "Node.js",
    "Express.js",
    "REST APIs",
    "JWT",
    "FastAPI",
    "GraphQL",
  ],
  "Frontend & UI": [
    "React.js",
    "Next.js 14",
    "Redux",
    "Tailwind CSS",
    "Vite",
    "Framer Motion",
  ],
  "Cloud, DevOps & Testing": [
    "AWS Lambda",
    "Amazon S3",
    "API Gateway",
    "AWS SAM",
    "Docker",
    "Git",
    "GitHub Actions",
    "CI/CD",
    "JUnit",
    "Bun Test",
  ],
  "Databases & Vector": [
    "PostgreSQL",
    "pgvector",
    "DynamoDB",
    "Firebase",
    "Pinecone",
    "Redis",
    "MySQL",
  ],
  "AI & Agentic Systems": [
    "Retrieval-Augmented Generation (RAG)",
    "Model Context Protocol (MCP)",
    "LangChain",
    "LangGraph",
    "OpenAI Embeddings",
    "Vector Search",
  ],
  "Core CS Fundamentals": [
    "Data Structures & Algorithms (300+ Solved)",
    "Object-Oriented Programming (OOP)",
    "DBMS & Indexing",
    "Operating Systems",
    "Computer Networks",
  ],
};

/* ---------- Engineering Metrics ---------- */

export interface Metric {
  value: string;
  label: string;
  detail: string;
}

export const stats: Metric[] = [
  {
    value: "100K+",
    label: "Live Payment Volume (INR)",
    detail: "Automated webhook reconciliation at 100% success rate on Eleveon",
  },
  {
    value: "300+",
    label: "LeetCode DSA Solved",
    detail: "Data structures, graph algorithms, DP, and system fundamentals",
  },
  {
    value: "41K+ ⭐",
    label: "Open Source Contributor",
    detail: "ai-job-search CLI scrapers, regex normalization, and 35+ Bun tests",
  },
  {
    value: "< 2s",
    label: "Vector & Face Retrieval",
    detail: "Sub-2s DLib indexing on Lambda & sub-3s AST pgvector search",
  },
];

/* ---------- Work Experience ---------- */

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  tag: string;
  category: "freelance" | "internship" | "openSource";
  impact: string;
  bullets: string[];
  logo?: string;
  website?: string;
}

export const experiences: Experience[] = [
  {
    role: "Freelance Full Stack Developer",
    company: "Eleveon (eleveon.in)",
    period: "May 2026 – Jun 2026",
    location: "Remote",
    tag: "Client Delivery",
    category: "freelance",
    website: "https://eleveon.in",
    impact: "Scaled e-commerce to 1,000+ users with automated Cashfree reconciliation; processed INR 100K+ at 100% success rate.",
    bullets: [
      "Built an e-commerce platform with Next.js 14, TypeScript, and Firebase for 1,000+ concurrent users; cut FCP by 35%.",
      "Integrated Cashfree Payment Gateway with automated webhook reconciliation; processed INR 100,000+ at 100% success rate.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Noodiyos (AI QSR)",
    period: "Jan 2026 – Mar 2026",
    location: "Bihar, India",
    tag: "Production AI RAG",
    category: "internship",
    logo: "/Noodiyos.png",
    impact: "Built Appetite Sense AI with LangChain & OpenAI embeddings, delivering sub-400ms perceived UI latency.",
    bullets: [
      'Built "Appetite Sense AI" RAG engine using LangChain, OpenAI embeddings, and vector similarity search.',
      "Engineered ordering flows in React and TypeScript with optimistic UI updates, achieving sub-400ms perceived latency.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Neximprove (SaaS)",
    period: "Nov 2025 – Jan 2026",
    location: "Kolkata, India",
    tag: "Backend & APIs",
    category: "internship",
    logo: "/Neximprove.png",
    impact: "Built Express.js REST APIs for org charts, cutting SQL report query times by 22% with RBAC consoles.",
    bullets: [
      "Built REST API endpoints with Express.js and TypeScript for organizational hierarchy; cut SQL report query time by 22%.",
      "Developed React admin consoles with Role-Based Access Control (RBAC) and Zod runtime validation.",
    ],
  },
  {
    role: "Open Source Contributor",
    company: "ai-job-search",
    period: "Sep 2026",
    location: "Remote",
    tag: "41k+ ⭐ Contributor",
    category: "openSource",
    impact: "Fixed scrapers with regex normalization and authored 35+ Bun unit tests maintaining 100% CI pass rate.",
    bullets: [
      "Fixed URL-parsing and crash bugs in 4 scrapers (LinkedIn, Jobbank, Jobdanmark, Jobnet) with regex normalization.",
      "Authored 35+ Bun unit tests; kept 100% pass rate across 290+ CLI test suites and 330+ CI checks.",
    ],
  },
  {
    role: "Open Source Contributor",
    company: "ZipTales",
    period: "Apr 2025 – Jun 2025",
    location: "Remote",
    tag: "Open Source RAG",
    category: "openSource",
    impact: "Engineered responsive UI and refactored core components for an AI news verification platform.",
    bullets: [
      "Engineered modular React components and streamlined Supabase data fetching pipelines across 5+ merged PRs.",
    ],
  },
];

/* ---------- Projects ---------- */

export type ProjectType = "flagship" | "client" | "openSource" | "personal";

export interface Project {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  repo: string;
  live?: string;
  thumbnail?: string;
  type: ProjectType;
  highlights: string[];
  metrics?: string;
}

export const projects: Project[] = [
  {
    title: "Grabpic",
    tagline: "Serverless Facial Recognition Search",
    description:
      "Event-driven serverless facial recognition engine. Automatically extracts facial embeddings from S3 image uploads using containerized DLib and NumPy on AWS Lambda, indexing vectors in under 2 seconds.",
    tech: [
      "AWS Lambda",
      "Amazon S3",
      "API Gateway",
      "AWS SAM",
      "Docker",
      "Python",
      "Next.js",
    ],
    repo: "https://github.com/iAbhiNaV2005/grabpic",
    live: "https://grab-pic-one.vercel.app/",
    thumbnail: "/image.png",
    type: "flagship",
    metrics: "Indexed in < 2 seconds",
    highlights: [
      "Designed an event-driven, S3-triggered AWS Lambda pipeline with AWS SAM, removing EC2 overhead and cutting compute cost.",
      "Packaged Python facial recognition (DLib, NumPy) in Docker on AWS Lambda; indexes images in under 2 seconds.",
      "Zero EC2 maintenance with 100% serverless auto-scaling on image ingest.",
    ],
  },
  {
    title: "CodeRAG",
    tagline: "Natural Language Codebase Search & Autonomous Agent",
    description:
      "Enterprise codebase intelligence engine that parses GitHub repositories into AST chunks, embeds them into pgvector, and exposes repository analysis as tools via a custom Model Context Protocol (MCP) server run by LangGraph.",
    tech: [
      "Spring Boot",
      "FastAPI",
      "Next.js",
      "pgvector",
      "DynamoDB",
      "LangChain",
      "LangGraph",
      "MCP",
    ],
    repo: "https://github.com/iAbhiNaV2005/CodeRAG",
    live: "https://codrag-xi.vercel.app/",
    thumbnail: "/coderag.png",
    type: "flagship",
    metrics: "Sub-3s retrieval · 40% token savings",
    highlights: [
      "Built a codebase parser storing AST-chunked embeddings in pgvector with retrieval under 3 seconds.",
      "Engineered commit-keyed DynamoDB caching that cut LLM token usage by 40%.",
      "Extended CodeRAG into an autonomous coding agent: repository search and analysis exposed as tools via a custom MCP server, run by a LangGraph multi-step loop that re-queries the codebase before answering.",
    ],
  },
  {
    title: "Eleveon",
    tagline: "High-Throughput E-Commerce & Learning Platform",
    description:
      "Client production system supporting 1,000+ concurrent users with automated payment webhook reconciliation, transactional notifications, and custom admin workflows.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Cashfree", "Firebase"],
    repo: "",
    live: "https://eleveon.in",
    thumbnail: "/eleveon-thumb.png",
    type: "client",
    metrics: "INR 100,000+ live transactions · 1,000+ users",
    highlights: [
      "Built an e-commerce platform with Next.js 14, TypeScript, and Firebase for 1,000+ concurrent users; cut FCP by 35%.",
      "Integrated Cashfree Payment Gateway with automated webhook reconciliation; processed INR 100,000+ at a 100% success rate.",
      "Delivered production-grade security, OTP auth, and merchant course publishing tools.",
    ],
  },
  {
    title: "ai-job-search",
    tagline: "CLI Job Scraping Engine (41k+ Stars)",
    description:
      "High-scale open-source job aggregator CLI. Fixed core scraping parsers and stabilized the test harness across international job portals.",
    tech: ["TypeScript", "Bun", "CI/CD", "Scrapers"],
    repo: "https://github.com/iAbhiNaV2005/portfolio",
    live: "https://github.com/iAbhiNaV2005/portfolio",
    type: "openSource",
    metrics: "41k+ ⭐ repository · 100% CI pass rate",
    highlights: [
      "Fixed URL-parsing and CLI crash bugs in 4 scrapers (LinkedIn, Jobbank, Jobdanmark, Jobnet) with regex normalization (PR #412, #430).",
      "Wrote 35+ Bun unit tests; kept a 100% pass rate across 290+ CLI test suites and 330+ CI checks.",
    ],
  },
  {
    title: "DentalCare (TrueCare)",
    tagline: "Clinic Patient Management Platform",
    description:
      "Modern healthcare clinic platform featuring appointment scheduling, digital service showcases, and patient intake workflows.",
    tech: ["Next.js", "Tailwind CSS", "Responsive Design"],
    repo: "",
    live: "https://truecaredental.in/",
    thumbnail: "/dentalcare.png",
    type: "client",
    metrics: "Client production deployment",
    highlights: [
      "Delivered high-performance booking flows with responsive layouts across mobile and desktop devices.",
      "Optimized local SEO and accessibility scores for clinic discoverability.",
    ],
  },
  {
    title: "Loopless",
    tagline: "Agency Mobile Systems Showcase",
    description:
      "Client engineering portfolio presenting mobile development services, technical case studies, and interactive service showcases.",
    tech: ["React.js", "Framer Motion", "Tailwind CSS"],
    repo: "",
    live: "https://loopless.agency/site",
    thumbnail: "/loopless.png",
    type: "client",
    metrics: "Client production deployment",
    highlights: [
      "Engineered fluid component transitions and micro-interactions optimized for smooth 60fps rendering.",
    ],
  },
  {
    title: "FitFlex",
    tagline: "Fitness Discovery & Routine Platform",
    description:
      "Exercise and fitness routine discovery engine with searchable muscle categories and video tutorials.",
    tech: ["React.js", "RapidAPI", "Tailwind CSS", "Express.js"],
    repo: "https://github.com/iAbhiNaV2005/Fit-Flex",
    live: "https://fit-flex-112.netlify.app/",
    thumbnail: "/fitflex-thumb.png",
    type: "personal",
    metrics: "RapidAPI integration",
    highlights: [
      "Integrated third-party fitness endpoints with responsive search and client-side filtering.",
    ],
  },
  {
    title: "ZipTales",
    tagline: "AI News Verification Platform",
    description:
      "Community-driven misinformation filter leveraging RAG and vector verification for authentic journalism.",
    tech: ["TypeScript", "React.js", "RAG", "Supabase"],
    repo: "https://github.com/iAbhiNaV2005/Zip_Tales",
    live: "https://ziptales.netlify.app/",
    thumbnail: "/ziptales-thumb.png",
    type: "openSource",
    metrics: "Open source community delivery",
    highlights: [
      "Engineered modular React components and streamlined Supabase data fetching pipelines.",
    ],
  },
];

/* ---------- System Architecture Highlights ---------- */

export interface SystemArchitecture {
  id: string;
  title: string;
  summary: string;
  diagram: string[];
  techStack: string[];
  tradeoffs: string;
}

export const architectures: SystemArchitecture[] = [
  {
    id: "coderag-mcp",
    title: "CodeRAG: AST Chunking + MCP Autonomous Loop",
    summary:
      "Hybrid RAG system extracting AST nodes into vector chunks in pgvector with commit-keyed DynamoDB caching. Exposed as Model Context Protocol (MCP) tools to allow a LangGraph loop to iteratively query the repository before synthesising responses.",
    diagram: [
      "GitHub Repo Ingestion",
      "Tree-sitter AST Parser (Chunk by Function/Class)",
      "OpenAI Text Embeddings → pgvector",
      "Commit Hash Cache Lookup (DynamoDB - 40% Token Cut)",
      "Custom MCP Tool Server",
      "LangGraph Autonomous Multi-Step Reasoning Loop",
    ],
    techStack: ["Spring Boot", "FastAPI", "pgvector", "DynamoDB", "LangGraph", "MCP"],
    tradeoffs:
      "AST chunking preserves semantic boundaries unlike naive character splitting, while commit-keyed caching eliminates redundant embedding calls across identical commits.",
  },
  {
    id: "grabpic-serverless",
    title: "Grabpic: Event-Driven S3 to Lambda Face Pipeline",
    summary:
      "Zero-EC2 image indexing pipeline. Images uploaded to Amazon S3 trigger an event bridge to an AWS Lambda container running DLib and NumPy to extract face descriptors in under 2 seconds.",
    diagram: [
      "Client Uploads Image to Presigned S3 URL",
      "S3 ObjectCreated Event Notification",
      "AWS SAM Managed Lambda (Dockerized DLib + NumPy)",
      "128-d Face Vector Extraction (< 2s)",
      "Cosine Similarity Matching & Gallery Grouping",
      "Zero Idle Compute Cost ($0 when inactive)",
    ],
    techStack: ["AWS Lambda", "Amazon S3", "API Gateway", "AWS SAM", "Docker", "Python"],
    tradeoffs:
      "Packaging heavy C++ computer vision dependencies (DLib) inside a lightweight container image on Lambda eliminated 100% of static EC2 server costs while scaling instantly to concurrent photo batches.",
  },
  {
    id: "eleveon-webhook",
    title: "Eleveon: Idempotent Webhook Payment Engine",
    summary:
      "E-commerce payment processing pipeline handling INR 100,000+ at 100% success rate with automated Cashfree webhook reconciliation, optimistic UI updates, and sub-35% FCP reduction.",
    diagram: [
      "Next.js 14 Server Action Initiates Cashfree Order",
      "User Completes Payment Gateway Modal",
      "Cashfree Asynchronous Webhook with Signature Verification",
      "Idempotency Check via Atomic Firestore Transaction",
      "Real-Time Entitlement Provisioning & Course Access",
      "100% Reconciliation Success Rate (INR 100K+ Volume)",
    ],
    techStack: ["Next.js 14", "TypeScript", "Cashfree Gateway", "Firebase", "Tailwind CSS"],
    tradeoffs:
      "Relying on signature-verified webhooks backed by atomic idempotency keys prevents duplicate fulfillment even during network retries or transient gateway outages.",
  },
];

/* ---------- Social & Navigation ---------- */

export const socialLinks = {
  github: "https://github.com/iAbhiNav2005",
  linkedin: "https://www.linkedin.com/in/abhinav-mitra2005",
  leetcode: "https://leetcode.com/u/NWP618qAOp",
  email: "mailto:abhinavmitra2@gmail.com",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Skills & Systems", href: "/skills" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];
