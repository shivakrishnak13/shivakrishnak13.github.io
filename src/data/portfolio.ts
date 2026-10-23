import type {
  Profile,
  Project,
  ProfessionalProject,
  ExperienceItem,
  Category,
  Certificate,
  NavLink,
} from "@/types";

// ─── Profile ─────────────────────────────────────────────────────────────────

export const profile: Profile = {
  name: "Shivakrishna Kosari",
  title: "Full Stack Developer",
  experience: "2+",
  description:
    "I'm a Full Stack Developer with 2+ years of experience building responsive, scalable, and production-ready web applications. I've worked across the full stack — from AI-powered presentation editors and SEO platforms to SaaS products with complex subscription and payment systems. On the frontend, I build with React, Vue, Next.js, and TypeScript, using tools like Redux Toolkit, Pinia, TanStack Query, and Tailwind CSS. On the backend, I work with Node.js, Express, and MongoDB to design clean APIs and scalable server-side logic. I've integrated payment providers like Stripe and Shopify, built subscription management systems, and shipped features that directly impacted real users. I care about writing maintainable code, delivering great user experiences, and building things that actually work in production.",
  email: "shivakrishna.codes@gmail.com",
  phone: "+91 9440997107",
  location: "Jagtial, Telangana",
  github: "https://github.com/shivakrishnak13",
  linkedin: "https://www.linkedin.com/in/shivakrishna-kosari",
  instagram: "https://www.instagram.com/shivakrishnakosari",
  resumeUrl:
    "https://drive.google.com/uc?export=download&id=1wjE6SC90-ur1QzGU4vRs4yHZN4eKzWs8",
  resumeLiveUrl:
    "https://drive.google.com/file/d/1wjE6SC90-ur1QzGU4vRs4yHZN4eKzWs8/view?usp=sharing",
  stats: [
    { number: "2+", label: "Years Experience" },
    { number: "15+", label: "Projects Completed" },
    { number: "20+", label: "Technologies" },
  ],
};

// ─── Nav Links ────────────────────────────────────────────────────────────────

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Stats", href: "#statistics" },
  { label: "Contact", href: "#contact" },
];

// ─── Professional Projects (Company — Internal) ───────────────────────────────
// These are real work projects. No live/github links. Contribution-forward.


export const professionalProjects: ProfessionalProject[] = [
  {
    id: 1,
    company: "Revent AI",
    companyPeriod: "Oct 2023 – Sep 2025",
    name: "AI Presentation Platform",
    tagline:
      "Full-stack AI presentation platform with a React dashboard, Vue.js editor, and Node.js backend for presentation generation, editing, importing, and exporting.",
    contributions: [
      "Built Prompt-to-PPT, Doc-to-PPT, and AI chat-based slide generation features in the React dashboard, enabling users to create presentations from conversational inputs.",
      "Developed a PowerPoint import workflow that converts existing presentations into a custom JSON format for AI-assisted editing.",
      "Built and maintained a Vue.js presentation editor, prototyping with Fabric.js before moving to a DOM-based div renderer with custom typography, shape manipulation, and layout controls.",
      "Implemented presentation export workflows for PDF and PPTX, alongside conversion between PowerPoint OpenXML and the platform's custom JSON format.",
      "Developed Node.js/Express.js REST APIs for presentation generation, import/export workflows, and frontend synchronization.",
      "Optimized dashboard performance by restructuring Redux Toolkit state slices and memoizing expensive component subtrees with React.memo and useMemo.",
      "Built a multilingual Next.js marketing platform with JSON-LD structured data and Google Search Console integration.",
      "Contributed to code reviews and authored custom ESLint rules to encourage reusable component patterns and UI consistency.",
    ],
    impact: [
      "Contributed to a platform that supported 34,000+ AI-generated presentations.",
      "Supported presentation workflows from AI generation and editing through file export.",
      "Contributed to a multilingual marketing platform that supported 13,000+ sign-ups.",
    ],
    technologies: [
      { name: "React", icon: "/images/icons/react.svg" },
      { name: "Vue.js", icon: "/images/icons/vuejs.svg" },
      { name: "Next.js", icon: "/images/icons/nextjs.svg" },
      { name: "TypeScript", icon: "/images/icons/typescript.svg" },
      { name: "Node.js", icon: "/images/icons/nodejs.svg" },
      { name: "Express", icon: "/images/icons/express.svg" },
    ],
  },
  {
    id: 2,
    company: "Byldd",
    companyPeriod: "Dec 2025 – Mar 2026",
    name: "Sentimentracker",
    tagline:
      "SaaS platform for tracking market sentiment and trending keywords across stocks, crypto, IPOs, NFTs, and airdrops, with subscription billing and internal administration tools.",
    contributions: [
      "Contributed to subscription management for recurring and lifetime plans, including upgrades, downgrades, cancellations, renewals, and cross-provider transitions.",
      "Integrated Stripe and Shopify APIs with webhook processing to synchronize billing and subscription state across payment providers.",
      "Contributed to payment and subscription workflows covering provider transitions and billing state updates.",
      "Built an internal admin dashboard using Next.js, TanStack Query, Zustand, and Tailwind CSS to streamline subscription tracking and reduce manual management.",
      "Implemented form validation using React Hook Form and Zod across subscription-related flows.",
      "Contributed to backend migration from Ruby to Node.js and data migration from PostgreSQL to MongoDB.",
      "Exported PostgreSQL data using DBeaver, wrote a JavaScript transformation script to map tabular data into MongoDB document structures with additional fields, and imported the transformed data using MongoDB Compass.",
      "Worked across frontend and backend features using Next.js, Node.js, Express.js, and MongoDB.",
    ],
    impact: [
      "Contributed to the initial product launch and subscription billing workflows.",
      "Helped maintain billing synchronization across Stripe and Shopify.",
      "Contributed to the backend and database transition from Ruby/PostgreSQL to Node.js/MongoDB.",
    ],
    technologies: [
      { name: "Next.js", icon: "/images/icons/nextjs.svg" },
      { name: "React", icon: "/images/icons/react.svg" },
      { name: "TypeScript", icon: "/images/icons/typescript.svg" },
      { name: "Node.js", icon: "/images/icons/nodejs.svg" },
      { name: "MongoDB", icon: "/images/icons/mongodb.svg" },
      { name: "Express", icon: "/images/icons/express.svg" },
      { name: "TanStack Query", icon: "/images/icons/tanstack.svg" },
      { name: "React Hook Form", icon: "/images/icons/reacthookform.svg" },
      { name: "Zod", icon: "/images/icons/zod.svg" },
    ],
  },
];


// ─── Personal Projects (Open-source — have live + github links) ───────────────

export const projects: Project[] = [
  {
    id: 8,
    name: "CertiFlow",
    description:
      "CertiFlow is a full-stack provisional certificate application platform that streamlines certificate requests from submission to administrative verification and certificate generation. It supports draft recovery, application tracking workflows, secure document uploads using private AWS S3 storage and pre-signed URLs, and server-side PDF certificate generation. The backend uses Express.js and TypeScript with Mongoose schema modeling, centralized error handling, and Zod request validation.",
    image: "/images/projects/certiflow.png",
    liveUrl: "https://certiflow-ivory.vercel.app/signin",
    githubUrl: "https://github.com/shivakrishnak13/certiflow",
    technologies: [
      { name: "Next.js", icon: "/images/icons/nextjs.svg" },
      { name: "React", icon: "/images/icons/react.svg" },
      { name: "TypeScript", icon: "/images/icons/typescript.svg" },
      { name: "Express", icon: "/images/icons/express.svg" },
      { name: "MongoDB", icon: "/images/icons/mongodb.svg" },
      { name: "Mongoose", icon: "/images/icons/mongoose.svg" },
      { name: "AWS S3", icon: "/images/icons/aws.svg" },
      { name: "Zod", icon: "/images/icons/zod.svg" },
    ],
  },
  {
    id: 7,
    name: "CareerOS",
    description:
      "CareerOS is an AI-powered career management platform that helps users organize their entire job search journey. Users can track job applications, manage interview rounds, monitor career analytics, generate personalized cover letters, tailor resumes, and prepare for interviews using AI-powered tools. The platform features secure authentication, real-time dashboards, modern React async patterns, and a responsive SaaS-style user experience.",
    image: "/images/projects/careeros.png",
    liveUrl: "https://careeeros.vercel.app/",
    githubUrl: "https://github.com/shivakrishnak13/careeeros",
    technologies: [
      { name: "Next.js", icon: "/images/icons/nextjs.svg" },
      { name: "React", icon: "/images/icons/react.svg" },
      { name: "TypeScript", icon: "/images/icons/typescript.svg" },
      { name: "PostgreSQL", icon: "/images/icons/postgresql.svg" },
      { name: "Prisma", icon: "/images/icons/prisma.svg" },
      { name: "Tailwind CSS", icon: "/images/icons/tailwind.svg" },
      { name: "shadcn/ui", icon: "/images/icons/shadcn.svg" },
      { name: "AI", icon: "/images/icons/ai.svg" },
    ],
  },
  {
    id: 1,
    name: "EduHub",
    description:
      "EduHub is a course management platform where students enroll and instructors create AI-powered assignments. It features an announcement system and dashboard. My contribution included building the instructor tools, integrating enrollment, and ensuring seamless course workflows.",
    image: "/images/projects/eduhub.png",
    liveUrl: "https://edu-sphere-seven.vercel.app/",
    githubUrl: "https://github.com/shivakrishnak13/EduSphere",
    technologies: [
      { name: "Angular", icon: "/images/icons/angular.svg" },
      { name: "Node.js", icon: "/images/icons/nodejs.svg" },
      { name: "MySQL", icon: "/images/icons/mysql.svg" },
      { name: "Express", icon: "/images/icons/express.svg" },
      { name: "TypeScript", icon: "/images/icons/typescript.svg" },
    ],
  },
  {
    id: 2,
    name: "StyleSpot",
    description:
      "StyleSpot is an eCommerce website for fashion clothing with a modern React frontend and Redux for state. The backend uses JSON server for product storage. My contribution was UI design, product display pages, and cart logic, ensuring smooth interaction across devices with a responsive layout.",
    image: "/images/projects/stylespot.png",
    liveUrl: "https://style-spot-dusky.vercel.app/",
    githubUrl: "https://github.com/shivakrishnak13/stylespot_project",
    technologies: [
      { name: "React", icon: "/images/icons/react.svg" },
      { name: "Redux", icon: "/images/icons/redux.svg" },
      { name: "Chakra UI", icon: "/images/icons/chakraui.svg" },
      { name: "JavaScript", icon: "/images/icons/javascript.svg" },
    ],
  },
  {
    id: 3,
    name: "CarTrade",
    description:
      "CarTrade is a second-hand car platform for buyers and dealers, featuring filtering, listings, and dealer dashboards. Built with React, Redux, and Express, it offers smooth navigation. My contribution included creating dealer tools, advanced filters, and UI enhancements for streamlined transactions.",
    image: "/images/projects/cartrade.png",
    liveUrl: "https://cartrade-ten.vercel.app/",
    githubUrl: "https://github.com/shivakrishnak13/attryb_project",
    technologies: [
      { name: "React", icon: "/images/icons/react.svg" },
      { name: "Redux", icon: "/images/icons/redux.svg" },
      { name: "Chakra UI", icon: "/images/icons/chakraui.svg" },
      { name: "Express", icon: "/images/icons/express.svg" },
      { name: "JavaScript", icon: "/images/icons/javascript.svg" },
    ],
  },
  {
    id: 4,
    name: "MegaMart",
    description:
      "MegaMart is a clone of IndiaMart for buying and selling products online. Developed with React and Chakra UI, it uses a JSON server for backend simulation. My contribution included product pages, search functionality, and cart integration, handling responsive design and deployment end-to-end.",
    image: "/images/projects/megamart.png",
    liveUrl: "https://megamart.vercel.app/",
    githubUrl: "https://github.com/shivakrishnak13/MegaMart",
    technologies: [
      { name: "React", icon: "/images/icons/react.svg" },
      { name: "Chakra UI", icon: "/images/icons/chakraui.svg" },
      { name: "JavaScript", icon: "/images/icons/javascript.svg" },
    ],
  },
  {
    id: 5,
    name: "FashionKart",
    description:
      "FashionKart is a Flipkart clone for browsing and purchasing items online. Built as a collaborative project with HTML, CSS, JavaScript, and JSON server. My contribution included product listing pages, cart features, and enhancing the UI for a consistent look, ensuring smooth team collaboration.",
    image: "/images/projects/fashionkart.png",
    liveUrl: "https://effortless-lolly-d28d4e.netlify.app/",
    githubUrl: "https://github.com/sharadParadhi/flipkart-clone",
    technologies: [
      { name: "HTML", icon: "/images/icons/html.svg" },
      { name: "CSS", icon: "/images/icons/css.svg" },
      { name: "JavaScript", icon: "/images/icons/javascript.svg" },
    ],
  },
  {
    id: 6,
    name: "FashionVerce",
    description:
      "FashionVerce is an individual eCommerce project selling a wide range of clothing online. Built with HTML, CSS, and JavaScript, it focuses on a clean responsive design. My contribution was full development, including UI, interactivity, and deployment to create a smooth and modern experience.",
    image: "/images/projects/fashionverce.png",
    liveUrl: "https://eloquent-cocada-745764.netlify.app/",
    githubUrl: "https://github.com/shivakrishnak13/FashionVerce-Belk.com",
    technologies: [
      { name: "HTML", icon: "/images/icons/html.svg" },
      { name: "CSS", icon: "/images/icons/css.svg" },
      { name: "JavaScript", icon: "/images/icons/javascript.svg" },
    ],
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────


export const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: "Byldd",
    location: "Remote",
    companyStartDate: "2025-12-01",
    companyEndDate: "2026-03-22",
    roles: [
      {
        title: "Full Stack Engineer",
        startDate: "2025-12-01",
        endDate: "2026-03-22",
        type: "Full-Time",
        highlights: [
          {
            title: "Subscription Management System",
            description:
              "Contributed to the design and implementation of subscription management for recurring and lifetime plans, including upgrades, downgrades, cancellations, renewals, and cross-provider transitions.",
            icon: "💳",
          },
          {
            title: "Stripe & Shopify Integration",
            description:
              "Integrated Stripe and Shopify APIs with webhook processing for real-time billing synchronization and subscription state updates across payment providers.",
            icon: "🔗",
          },
          {
            title: "Admin Dashboard",
            description:
              "Built an internal admin dashboard using Next.js, TanStack Query, Zustand, and Tailwind CSS to streamline subscription tracking and reduce manual management.",
            icon: "📊",
          },
          {
            title: "Backend & Database Migration",
            description:
              "Contributed to migrating backend services from Ruby to Node.js and data from PostgreSQL to MongoDB using DBeaver, a JavaScript transformation script, and MongoDB Compass.",
            icon: "🚀",
          },
        ],
      },
    ],
    technologies: {
      frontend: ["Next.js", "React", "TypeScript"],
      styling: ["Tailwind CSS"],
      state: ["TanStack Query", "Zustand", "React Hook Form", "Zod"],
      backend: ["Node.js", "Express.js", "MongoDB", "PostgreSQL"],
      tools: ["Stripe API", "Shopify API", "Webhooks", "Cron Jobs", "DBeaver", "MongoDB Compass"],
    },
  },
  {
    id: 2,
    company: "Revent AI",
    location: "Remote",
    companyStartDate: "2023-10-01",
    companyEndDate: "2025-09-30",
    roles: [
      {
        title: "Full Stack Developer (Frontend-Focused)",
        startDate: "2023-10-01",
        endDate: "2025-09-30",
        type: "Full-Time",
        highlights: [
          {
            title: "AI Presentation Editor",
            description:
              "Built and maintained a Vue.js presentation editor, prototyping with Fabric.js before moving to a DOM-based renderer with custom typography, shape manipulation, and layout controls for a platform with 34,000+ AI presentations.",
            icon: "🎨",
          },
          {
            title: "Presentation APIs & File Conversion",
            description:
              "Developed Node.js and Express.js REST APIs for AI presentation generation, PDF/PPTX export, and PowerPoint import/export through OpenXML-to-JSON parsing.",
            icon: "🧩",
          },
          {
            title: "Dashboard Performance",
            description:
              "Optimized dashboard performance by restructuring Redux Toolkit state slices, memoizing expensive component subtrees with React.memo and useMemo, and applying TypeScript.",
            icon: "⚡",
          },
          {
            title: "Marketing Platform & SEO",
            description:
              "Built a multilingual Next.js marketing platform with JSON-LD structured data and Google Search Console integration, supporting 13,000+ platform sign-ups.",
            icon: "🚀",
          },
          {
            title: "Code Quality",
            description:
              "Contributed to code reviews and authored custom ESLint rules to encourage reusable component patterns and UI consistency across codebases.",
            icon: "🛠️",
          },
        ],
      },
    ],
    technologies: {
      frontend: ["React.js", "Vue.js", "Next.js", "TypeScript", "Fabric.js"],
      styling: ["Material-UI", "SCSS", "Tailwind CSS", "Responsive Design"],
      state: ["Redux Toolkit", "Pinia"],
      backend: ["Node.js", "Express.js", "REST APIs"],
      tools: [
        "PowerPoint Integration",
        "OpenXML",
        "SEO Optimization",
        "Google Search Console",
        "Vite",
        "Webpack",
        "Jest",
        "ESLint",
      ],
    },
  },
];


// ─── Skills ───────────────────────────────────────────────────────────────────

export const skillsCategory: Category[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'React', color: '#61DAFB', iconKey: 'react' },
      { name: 'Next.js', color: '#ffffff', iconKey: 'nextjs' },
      { name: 'Vue.js', color: '#4FC08D', iconKey: 'vue' },
      { name: 'JavaScript', color: '#F7DF1E', iconKey: 'javascript' },
      { name: 'TypeScript', color: '#3178C6', iconKey: 'typescript' },
      { name: 'Redux Toolkit', color: '#764ABC', iconKey: 'redux' },
      { name: 'Pinia', color: '#FFD859', iconKey: 'pinia' },
      { name: 'TanStack Query', color: '#76CA8F', iconKey: 'tanstack' },
      { name: 'React Hook Form', color: '#EC5990', iconKey: 'reacthookform' },
      { name: 'React Native', color: '#61DAFB', iconKey: 'reactnative', badge: 'new' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      { name: 'Node.js', color: '#339933', iconKey: 'nodejs' },
      { name: 'Express.js', color: '#888888', iconKey: 'express' },
      { name: 'Zod', color: '#3068B7', iconKey: 'zod', badge: 'new' },
      { name: 'Webhooks', color: '#6366F1', iconKey: 'webhooks', badge: 'new' },
      { name: 'Stripe', color: '#635BFF', iconKey: 'stripe', badge: 'new' },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    skills: [
      { name: 'MongoDB', color: '#47A248', iconKey: 'mongodb' },
      { name: 'PostgreSQL', color: '#336791', iconKey: 'postgresql' },
    ],
  },
  {
    id: 'styling',
    label: 'UI / Styling',
    skills: [
      { name: 'Tailwind CSS', color: '#38BDF8', iconKey: 'tailwind' },
      { name: 'Shadcn/ui', color: '#ffffff', iconKey: 'shadcn', badge: 'new' },
      { name: 'Material UI', color: '#0081CB', iconKey: 'mui' },
      { name: 'Chakra UI', color: '#319795', iconKey: 'chakra' },
      { name: 'SCSS', color: '#CC6699', iconKey: 'scss' },
    ],
  },
  {
    id: 'devops',
    label: 'DevOps & Tools',
    skills: [
      { name: 'Git', color: '#F05032', iconKey: 'git' },
      { name: 'GitHub', color: '#ffffff', iconKey: 'github', badge: 'new' },
      { name: 'GitHub Actions', color: '#2088FF', iconKey: 'githubactions', badge: 'new' },
      { name: 'Vercel', color: '#ffffff', iconKey: 'vercel', badge: 'new' },
      { name: 'Figma', color: '#F24E1E', iconKey: 'figma' },
    ],
  },
  {
    id: 'ai',
    label: 'AI',
    skills: [
      { name: 'Prompt Engineering', color: '#A855F7', iconKey: 'prompt', badge: 'ai' },
    ],
  },
]


export const softSkills: string[] = [
  "Communication",
  "Problem Solving",
  "Team Collaboration",
  "Ownership",
  "Adaptability",
  "Time Management",
];

// ─── Certificates ─────────────────────────────────────────────────────────────

export const certificates: Certificate[] = [
  {
    id: 1,
    name: "Certified Prompt Engineer",
    issuer: "Masai School",
    image: "/images/certificates/prompt-engineer-cert.jpg",
    badge: "AI & Machine Learning",
    description:
      "Comprehensive certification in Prompt Engineering techniques, covering advanced AI interaction methods, rapid learning strategies, and integration of generative AI capabilities into web development projects.",
    skills: [
      "Prompt Engineering",
      "Generative AI",
      "ChatGPT",
      "AI Integration",
      "Rapid Learning",
    ],
    verificationUrl: null,
    type: "Professional Certification",
  },
  {
    id: 2,
    name: "Full Stack Web Development",
    issuer: "Masai School",
    image: "/images/certificates/fullstack-cert.jpg",
    badge: "Web Development",
    description:
      "Intensive full-stack web development program covering modern frontend and backend technologies, database management, and deployment strategies with hands-on project experience.",
    skills: [
      "React",
      "Node.js",
      "JavaScript",
      "MongoDB",
      "Express.js",
      "Full Stack Development",
    ],
    verificationUrl: "https://certs.masaischool.com/certificate/masai-fw24-600",
    type: "Bootcamp Completion",
  },
];
