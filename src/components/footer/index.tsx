import { navLinks, profile } from '@/data/portfolio'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-2)] px-0 py-16 pb-10">
      <div className="container">
        <div className="mb-12 flex flex-wrap items-start justify-between gap-12 max-sm:flex-col max-sm:gap-8">
          <div className="flex flex-col gap-2">
            <span className="font-display text-[2rem] font-extrabold tracking-[-0.04em] text-[var(--text)]">
              SK
              <span className="bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] bg-clip-text text-transparent">
                .
              </span>
            </span>
            <p className="max-w-[240px] text-[0.85rem] text-[var(--text-2)]">
              Full Stack Developer | Building things for the web
            </p>
          </div>

          <nav className="flex flex-col gap-2 text-[0.88rem] text-[var(--text-2)] max-sm:flex-row max-sm:flex-wrap max-sm:gap-x-5 max-sm:gap-y-3" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-[var(--accent)]">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-wrap items-start gap-3">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub"><FaGithub /></a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href={profile.instagram} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
            <a href={`mailto:${profile.email}`} className="social-icon" aria-label="Email"><HiMail /></a>
          </div>
        </div>

        <div className="divider mb-8" />

        <div className="flex flex-wrap items-center justify-between gap-4 max-sm:flex-col max-sm:items-start">
          <p className="text-[0.85rem] text-[var(--text-2)]">
            © {year} <strong>Shiva Krishna Kosari</strong>. All rights reserved.
          </p>
          <p className="font-mono text-[0.82rem] text-[var(--muted)]">
            Built with <span className="inline-block animate-pulse text-[#f87171]">♥</span> using Next.js &amp; TypeScript
          </p>
        </div>
      </div>
    </footer>
  )
}
