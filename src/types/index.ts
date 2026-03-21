// ─── Portfolio Types ────────────────────────────────────────────────────────

export interface SocialLink {
  label: string
  href: string
  icon: string
}

export interface StatItem {
  number: string
  label: string
}

export interface Profile {
  name: string
  title: string
  experience: string
  description: string
  email: string
  phone: string
  location: string
  github: string
  linkedin: string
  instagram: string
  resumeUrl: string
  stats: StatItem[]
}

// ─── Project Types ───────────────────────────────────────────────────────────

export interface TechIcon {
  name: string
  icon: string
}

/** Personal / open-source projects — have live + github links */
export interface Project {
  id: number
  name: string
  description: string
  image: string
  liveUrl: string
  githubUrl: string
  technologies: TechIcon[]
}

/** Professional company projects — no public links, contribution-forward */
export interface ProfessionalProject {
  id: number
  company: string
  companyPeriod: string   // e.g. "Oct 2023 – Sep 2025"
  name: string
  tagline: string         // one-line what the product does
  contributions: string[] // your specific bullet-point contributions
  impact?: string[]       // measurable outcomes (optional)
  technologies: TechIcon[]
}

// ─── Experience Types ────────────────────────────────────────────────────────

export interface Highlight {
  title: string
  description: string
  icon: string
}

export interface Role {
  title: string
  startDate: string
  endDate: string | null
  type: string
  highlights: Highlight[]
}

export interface TechStack {
  frontend: string[]
  styling: string[]
  state: string[]
  backend: string[]
  tools: string[]
}

export interface ExperienceItem {
  id: number
  company: string
  location: string
  companyStartDate: string
  companyEndDate: string | null
  roles: Role[]
  technologies: TechStack
}

// ─── Skill Types ─────────────────────────────────────────────────────────────

export interface Skill {
  name: string
  color: string
  iconKey: string
}

// ─── Certificate Types ───────────────────────────────────────────────────────

export interface Certificate {
  id: number
  name: string
  issuer: string
  image: string
  badge: string
  description: string
  skills: string[]
  verificationUrl: string | null
  type: string
}

// ─── Contact Types ───────────────────────────────────────────────────────────

export interface ContactItem {
  id: string
  title: string
  value: string
  href?: string
}

// ─── Nav Types ───────────────────────────────────────────────────────────────

export interface NavLink {
  label: string
  href: string
}
