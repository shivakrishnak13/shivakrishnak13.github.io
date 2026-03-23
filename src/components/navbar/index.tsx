'use client'

import { useEffect, useState } from 'react'
import { navLinks, profile } from '@/data/portfolio'
import { openResumeInNewTab, scrollToSection } from '@/lib/utils'
import { FiDownload } from 'react-icons/fi'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = navLinks.map((link) => link.href.replace('#', ''))
      for (const id of [...sections].reverse()) {
        const element = document.getElementById(id)
        if (element && window.scrollY >= element.offsetTop - 120) {
          setActiveSection(id)
          break
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    scrollToSection(href)
    setMobileOpen(false)
  }

  return (
    <>
      <header
        className={[
          'fixed inset-x-0 top-0 z-[1000] py-5 transition-all duration-300',
          scrolled
            ? 'border-b border-[rgba(255,255,255,0.06)] bg-[rgba(8,12,20,0.85)] py-3.5 backdrop-blur-[20px]'
            : '',
        ].join(' ')}
      >
        <div className="container flex items-center gap-8">
          <button
            className="flex shrink-0 items-center gap-1 bg-transparent"
            onClick={() => handleNavClick('#home')}
            aria-label="Go to top"
          >
            <span className="bg-[linear-gradient(135deg,var(--accent)_0%,var(--accent-2)_100%)] bg-clip-text font-display text-[1.4rem] font-extrabold tracking-[-0.05em] text-transparent">
              SK
            </span>
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--accent)]" />
          </button>

          <nav className="ml-auto hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '')
              return (
                <button
                  key={link.href}
                  className={[
                    'relative rounded-lg px-3 py-1.5 text-[0.88rem] font-medium tracking-[0.01em] text-[var(--text-2)] transition hover:bg-[rgba(255,255,255,0.05)] hover:text-[var(--text)]',
                    activeSection === id
                      ? "text-[var(--accent)] after:absolute after:bottom-0.5 after:left-1/2 after:h-1 after:w-1 after:-translate-x-1/2 after:rounded-full after:bg-[var(--accent)] after:content-['']"
                      : '',
                  ].join(' ')}
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.label}
                </button>
              )
            })}
          </nav>

          <button
            type="button"
            className="btn btn-primary ml-4 hidden shrink-0 lg:inline-flex"
            onClick={() => openResumeInNewTab(profile.resumeUrl, profile.resumeLiveUrl)}
          >
            <FiDownload />
            Resume
          </button>

          <button
            className="ml-auto flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </div>
      </header>

      <div
        className={[
          'fixed inset-0 z-[999] flex items-center justify-center bg-[rgba(8,12,20,0.97)] backdrop-blur-[24px] transition duration-300 lg:hidden',
          mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        ].join(' ')}
        aria-hidden={!mobileOpen}
      >
        <nav className="flex w-full flex-col items-center gap-2 px-8" aria-label="Mobile navigation">
          {navLinks.map((link, index) => (
            <button
              key={link.href}
              className="flex w-full max-w-[320px] animate-[fadeUp_0.4s_ease_forwards] items-center gap-4 border-b border-[var(--border)] py-4 text-left font-display text-2xl font-bold text-[var(--text-2)] opacity-0 transition hover:pl-2 hover:text-[var(--accent)]"
              onClick={() => handleNavClick(link.href)}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="font-mono text-[0.7rem] text-[var(--accent)] opacity-70">
                0{index + 1}
              </span>
              {link.label}
            </button>
          ))}
          <button
            type="button"
            className="btn btn-primary mt-4"
            onClick={() => {
              openResumeInNewTab(profile.resumeUrl, profile.resumeLiveUrl)
              setMobileOpen(false)
            }}
          >
            <FiDownload /> Download Resume
          </button>
        </nav>
      </div>
    </>
  )
}
