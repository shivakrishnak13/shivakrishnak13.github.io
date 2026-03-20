'use client'

import { profile } from '@/data/portfolio'
import { scrollToSection } from '@/lib/utils'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'
import { MdAlternateEmail } from 'react-icons/md'

export function Hero() {
  const [text] = useTypewriter({
    words: ['Full Stack Developer', 'Frontend Specialist', 'MERN Stack Developer', 'UI Craftsman'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 60,
    delaySpeed: 2000,
  })

  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-8 pb-16 pt-32 max-sm:px-6 max-sm:pb-12 max-sm:pt-28"
      id="home"
    >
      <div className="pointer-events-none absolute left-[-200px] top-[-200px] h-[600px] w-[600px] animate-[float_8s_ease-in-out_infinite] rounded-full bg-[radial-gradient(circle,rgba(79,156,249,0.12),transparent_70%)] blur-[100px]" />
      <div className="pointer-events-none absolute bottom-[-150px] right-[-150px] h-[500px] w-[500px] animate-[float_8s_ease-in-out_infinite] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.1),transparent_70%)] blur-[100px] [animation-delay:-3s]" />

      <div className="relative z-[1] flex w-full max-w-[780px] flex-col items-center text-center">
        <div className="mb-7 inline-flex animate-[fadeIn_0.6s_ease_forwards] items-center gap-2 rounded-full border border-[rgba(79,156,249,0.25)] bg-[rgba(79,156,249,0.08)] px-4 py-1.5 font-mono text-xs text-[var(--accent)]">
          <span className="h-[7px] w-[7px] animate-pulse rounded-full bg-[var(--success)] shadow-[0_0_8px_var(--success)]" />
          Available for opportunities
        </div>

        <p className="mb-2 animate-[fadeUp_0.6s_0.1s_ease_both] font-mono text-base text-[var(--text-2)]">
          Hi, I&apos;m
        </p>

        <h1 className="mb-5 flex flex-wrap justify-center gap-[0.3em] font-display text-[clamp(3rem,9vw,6rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-[var(--text)]">
          {profile.name.split(' ').map((word, index) => (
            <span
              key={word}
              className={[
                'inline-block animate-[fadeUp_0.6s_ease_both]',
                index === 1
                  ? 'bg-[linear-gradient(135deg,var(--accent)_0%,var(--accent-2)_100%)] bg-clip-text text-transparent'
                  : '',
              ].join(' ')}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {word}
            </span>
          ))}
        </h1>

        <div className="mb-6 min-h-[2.2em] animate-[fadeUp_0.6s_0.3s_ease_both] font-display text-[clamp(1.1rem,3vw,1.6rem)] font-semibold text-[var(--text-2)]">
          <span className="text-[var(--accent)]">
            {text}
            <Cursor cursorStyle="|" />
          </span>
        </div>

        <p className="mb-9 max-w-[560px] animate-[fadeUp_0.6s_0.4s_ease_both] text-[1.05rem] leading-[1.8] text-[var(--text-2)]">
          Building fast, scalable, and elegant web experiences from interactive
          AI-powered editors to SEO-optimized platforms.
        </p>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-4 animate-[fadeUp_0.6s_0.5s_ease_both] max-sm:w-full max-sm:flex-col">
          <button
            className="btn btn-primary max-sm:w-full max-sm:justify-center"
            onClick={() => scrollToSection('#projects')}
          >
            View My Work
          </button>
          <button
            className="btn btn-ghost max-sm:w-full max-sm:justify-center"
            onClick={() => scrollToSection('#contact')}
          >
            Get In Touch
          </button>
        </div>

        <div className="mb-12 flex items-center gap-3 animate-[fadeUp_0.6s_0.6s_ease_both]">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub"><FaGithub /></a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href={profile.instagram} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
          <a href={`mailto:${profile.email}`} className="social-icon" aria-label="Email"><MdAlternateEmail /></a>
        </div>

        <button
          className="flex h-10 w-10 animate-[fadeIn_1s_1s_ease_both,bounce_2s_2s_ease-in-out_infinite] items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-2)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          onClick={() => scrollToSection('#about')}
          aria-label="Scroll to About"
        >
          <HiArrowDown />
        </button>
      </div>

      <div className="relative z-[1] mt-16 flex w-full max-w-fit flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] animate-[fadeUp_0.6s_0.8s_ease_both] sm:flex-row">
        {profile.stats.map((stat) => (
          <div
            key={stat.label}
            className="relative flex flex-1 flex-col items-center px-10 py-6 text-center after:absolute after:right-0 after:top-[20%] after:h-[60%] after:w-px after:bg-[var(--border)] after:content-[''] last:after:hidden sm:min-w-[180px] max-sm:after:bottom-0 max-sm:after:left-[20%] max-sm:after:right-auto max-sm:after:top-auto max-sm:after:h-px max-sm:after:w-[60%]"
          >
            <span className="mb-1 bg-[linear-gradient(135deg,var(--accent)_0%,var(--accent-2)_100%)] bg-clip-text font-display text-[2rem] font-extrabold leading-none text-transparent">
              {stat.number}
            </span>
            <span className="whitespace-nowrap text-[0.8rem] text-[var(--text-2)]">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
