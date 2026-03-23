import type {
  Profile,
  Project,
  ProfessionalProject,
  ExperienceItem,
  Skill,
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
  resumeLiveUrl: "https://drive.google.com/file/d/1wjE6SC90-ur1QzGU4vRs4yHZN4eKzWs8/view?usp=sharing",
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
      "Full-stack AI-powered platform for creating, editing and exporting presentations — featuring a React dashboard, Vue.js canvas editor, and Node.js backend.",
    contributions: [
      "Built Prompt-to-PPT, Doc-to-PPT, and AI chat-based slide generation features in the React dashboard, enabling users to create full presentations from conversational inputs.",
      "Developed a PowerPoint-to-custom-format converter so users can import existing PPTs and transform them into AI-editable presentations.",
      "Built a custom Vue.js slide editor using HTML-based div rendering instead of canvas, with rich editing support — custom fonts, image integration, shapes, colors, and styles.",
      "Implemented export functionality to PDF, custom PPT format, and PowerPoint files from the canvas editor.",
      "Built REST APIs in Node.js/Express for PPT import/export, including a conversion engine that transforms PowerPoint XML into custom JSON format and back.",
      "Developed a multilingual SEO platform in Next.js with blogs, tutorials, and API documentation pages for improved product visibility.",
    ],
    impact: [
      "Delivered an end-to-end AI presentation workflow — from generation to export.",
      "Enabled users to convert traditional PPTs into editable AI-based formats.",
      "Improved user productivity through automation and real-time editing.",
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
      "SaaS platform providing real-time sentiment analysis and trending keywords for trading markets — stocks, crypto, IPOs, NFTs, and airdrops.",
    contributions: [
      "Designed and implemented a complete subscription management system covering plan creation, upgrades, downgrades, cancellations, and renewals for both recurring and lifetime plans.",
      "Integrated Stripe and Shopify APIs to handle payment flows, subscription creation, and webhook events — keeping app state in sync with external providers in real-time.",
      "Built cross-provider plan switching logic (Stripe ↔ Shopify) and handled edge cases like cancellations, renewals, and failed payments.",
      "Developed an admin dashboard using TanStack Query for efficient data fetching, caching, and synchronization — enabling internal teams to manage subscriptions and monitor billing.",
      "Implemented form validation using React Hook Form and Zod, improving reliability and UX across all subscription flows.",
      "Built cron jobs to fetch and update trending sentiment data on hourly and daily schedules.",
      "Worked on authentication systems, middleware, and request validation on the backend.",
    ],
    impact: [
      "Successfully supported initial product launch with 8–10 weekly subscriptions.",
      "Ensured stable, reliable payment flows across Stripe and Shopify.",
      "Built scalable subscription infrastructure ready for platform growth.",
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
    companyEndDate: "2026-03-01",
    roles: [
      {
        title: "Full Stack Engineer",
        startDate: "2025-12-01",
        endDate: "2026-04-01",
        type: "Full-Time",
        highlights: [
          {
            title: "Subscription Management System",
            description:
              "Designed and built a complete subscription lifecycle system — plan creation, upgrades, downgrades, cancellations, and renewals for both recurring and lifetime plans.",
            icon: "💳",
          },
          {
            title: "Stripe & Shopify Integration",
            description:
              "Integrated Stripe and Shopify APIs for payment flows, webhook handling, and cross-provider plan switching (Stripe ↔ Shopify) with real-time state sync.",
            icon: "🔗",
          },
          {
            title: "Admin Dashboard",
            description:
              "Built internal admin UI using TanStack Query for efficient data fetching and caching — enabling teams to manage subscriptions, plans, and billing activities.",
            icon: "📊",
          },
          {
            title: "Frontend & Backend Features",
            description:
              "Contributed across Next.js/React frontend and Node.js/Express/MongoDB backend, using React Hook Form + Zod for validation, and cron jobs for scheduled data updates.",
            icon: "🚀",
          },
        ],
      },
    ],
    technologies: {
      frontend: ["Next.js", "React", "TypeScript"],
      styling: ["Tailwind CSS"],
      state: ["TanStack Query", "React Hook Form", "Zod"],
      backend: ["Node.js", "Express.js", "MongoDB"],
      tools: ["Stripe API", "Shopify API", "Webhooks", "Cron Jobs"],
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
              "Developed a fully interactive AI-powered presentation editor using Vue.js, React, and Fabric.js with prompt-to-slide and theme customization features.",
            icon: "🎨",
          },
          {
            title: "Full Stack Integration",
            description:
              "Built backend APIs with Node.js and Express.js for PPT JSON ↔ XML conversion, export/import workflows, and frontend synchronization.",
            icon: "🧩",
          },
          {
            title: "Performance & SEO",
            description:
              "Optimized app performance and developed a multilingual SEO platform in Next.js with blogs, tutorials, API Documentation and feature pages for improved visibility.",
            icon: "⚡",
          },
          {
            title: "End-to-End Product Development",
            description:
              "Contributed to architecture, deployment, and UI enhancements across React, Vue, and Next.js applications hosted on Vercel.",
            icon: "🚀",
          },
        ],
      },
    ],
    technologies: {
      frontend: ["React.js", "Vue.js", "Next.js", "TypeScript", "Fabric.js"],
      styling: ["MUI", "SCSS", "Tailwind CSS", "Responsive Design"],
      state: ["Redux Toolkit", "Pinia"],
      backend: ["Node.js", "Express.js", "REST APIs"],
      tools: [
        "PowerPoint Integration",
        "SEO Optimization",
        "reCAPTCHA",
        "Vite",
        "Webpack",
        "Jest",
      ],
    },
  },
];

// ─── Skills ───────────────────────────────────────────────────────────────────

export const skills: Skill[] = [
  { name: "React", color: "#61DAFB", iconKey: "react" },
  { name: "Next.js", color: "#ffffff", iconKey: "nextjs" },
  { name: "Vue.js", color: "#4FC08D", iconKey: "vue" },
  { name: "TypeScript", color: "#3178C6", iconKey: "typescript" },
  { name: "Redux Toolkit", color: "#764ABC", iconKey: "redux" },
  { name: "Pinia", color: "#4FC08D", iconKey: "pinia" },
  { name: "Node.js", color: "#339933", iconKey: "nodejs" },
  { name: "Express.js", color: "#ffffff", iconKey: "express" },
  { name: "MongoDB", color: "#47A248", iconKey: "mongodb" },
  { name: "Material UI", color: "#0081CB", iconKey: "mui" },
  { name: "Chakra UI", color: "#319795", iconKey: "chakra" },
  { name: "SCSS", color: "#CC6699", iconKey: "scss" },
  { name: "Tailwind", color: "#38BDF8", iconKey: "tailwind" },
  { name: "Git", color: "#F05032", iconKey: "git" },
  { name: "Figma", color: "#F24E1E", iconKey: "figma" },
];

export const softSkills: string[] = [
  'Communication',
  'Problem Solving',
  'Team Collaboration',
  'Ownership',
  'Adaptability',
  'Time Management',
]

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
