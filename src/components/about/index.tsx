'use client'

import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { profile } from '@/data/portfolio'
import { openResumeInNewTab } from '@/lib/utils'
import { FiDownload, FiMapPin, FiMail, FiPhone } from 'react-icons/fi'

export function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section
      className="section bg-[linear-gradient(180deg,var(--bg)_0%,var(--bg-2)_100%)]"
      id="about"
      ref={ref}
    >
      <div className="container">
        <div
          className={[
            'mb-16 translate-y-5 transition-all duration-700',
            inView ? 'opacity-100 translate-y-0' : 'opacity-0',
          ].join(' ')}
        >
          <span className="section-label">Who I am</span>
          <h2 className="section-title">
            About <span className="accent">Me</span>
          </h2>
        </div>

        <div
          className={[
            'grid items-start gap-12 transition-all duration-700 md:gap-20 lg:grid-cols-[1fr_1.4fr]',
            inView ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-6 opacity-0',
          ].join(' ')}
        >
          <div className="relative mx-auto w-full max-w-[340px] lg:mx-0 lg:max-w-none">
            <div className="relative inline-block w-full before:absolute before:inset-[-12px] before:-z-10 before:rounded-[24px] before:bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] before:opacity-15 before:content-['']">
              <Image
                src="/images/myphoto.png"
                alt="Shiva Krishna Kosari - Full Stack Developer"
                width={380}
                height={460}
                className="block h-auto w-full rounded-[20px] object-cover grayscale-[10%] transition duration-300 hover:grayscale-0"
                priority={false}
              />
              <div className="absolute -bottom-6 right-0 z-10 flex items-center gap-3 rounded-[14px] border border-[var(--border)] bg-[var(--surface-2)] px-5 py-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] md:-right-6">
                <span className="text-2xl">⚡</span>
                <div>
                  <div className="text-sm font-semibold leading-tight text-[var(--text)]">
                    Open to Work
                  </div>
                  <div className="font-mono text-[0.72rem] text-[var(--text-2)]">Full-Time</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-mono text-sm font-medium tracking-[0.05em] text-[var(--accent)]">
              {profile.title}
            </h3>

            <p className="text-base leading-[1.9] text-[var(--text-2)]">{profile.description}</p>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-[var(--text-2)]">
                <FiMail className="shrink-0 text-base text-[var(--accent)]" />
                <a
                  href={`mailto:${profile.email}`}
                  className="transition hover:text-[var(--accent)]"
                >
                  {profile.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-[var(--text-2)]">
                <FiPhone className="shrink-0 text-base text-[var(--accent)]" />
                <a href={`tel:${profile.phone}`} className="transition hover:text-[var(--accent)]">
                  {profile.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-[var(--text-2)]">
                <FiMapPin className="shrink-0 text-base text-[var(--accent)]" />
                <span>{profile.location}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {profile.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-4 py-5 text-center transition duration-300 hover:-translate-y-[3px] hover:border-[var(--accent)]"
                >
                  <span className="mb-1 block bg-[linear-gradient(135deg,var(--accent)_0%,var(--accent-2)_100%)] bg-clip-text font-display text-[1.75rem] font-extrabold leading-none text-transparent">
                    {stat.number}
                  </span>
                  <span className="block text-xs text-[var(--text-2)]">{stat.label}</span>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="btn btn-primary"
              onClick={() => openResumeInNewTab(profile.resumeUrl, profile.resumeLiveUrl)}
            >
              <FiDownload />
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
