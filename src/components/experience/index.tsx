'use client'

import { useInView } from 'react-intersection-observer'
import { experiences } from '@/data/portfolio'
import { calculateDuration, formatDateRange } from '@/lib/utils'
import type { TechStack } from '@/types'

const achievementCards = [
  {
    icon: '01',
    title: 'Multi-Framework Expertise',
    desc: 'Delivered projects across React, Vue.js, and Next.js ecosystems',
  },
  {
    icon: '02',
    title: 'Performance Optimization',
    desc: 'Improved app performance and resolved complex bugs across multiple codebases',
  },
  {
    icon: '03',
    title: 'Full-Stack Integration',
    desc: 'Built APIs and integrated PowerPoint conversion with seamless frontend experience',
  },
]

export function ExperienceSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="section bg-[var(--bg-2)]" id="experience" ref={ref}>
      <div className="container">
        <div
          className={[
            'mb-12 translate-y-5 transition-all duration-700',
            inView ? 'translate-y-0 opacity-100' : 'opacity-0',
          ].join(' ')}
        >
          <span className="section-label">Professional Journey</span>
          <h2 className="section-title">
            Work <span className="accent">Experience</span>
          </h2>
        </div>

        <div
          className={[
            'mb-14 flex flex-wrap gap-4 transition-all duration-700',
            inView ? 'translate-y-0 opacity-100 delay-100' : 'translate-y-5 opacity-0',
          ].join(' ')}
        >
          <div className="flex flex-1 min-w-[180px] flex-col items-center rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-8 py-5 text-center transition duration-300 hover:-translate-y-[3px] hover:border-[var(--accent)]">
            <span className="mb-1 bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] bg-clip-text font-display text-4xl font-extrabold leading-none text-transparent">
              2+
            </span>
            <span className="text-[0.78rem] text-[var(--text-2)]">Years Total</span>
          </div>
          <div className="flex flex-1 min-w-[180px] flex-col items-center rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-8 py-5 text-center transition duration-300 hover:-translate-y-[3px] hover:border-[var(--accent)]">
            <span className="mb-1 bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] bg-clip-text font-display text-4xl font-extrabold leading-none text-transparent">
              {experiences.length}
            </span>
            <span className="text-[0.78rem] text-[var(--text-2)]">Companies</span>
          </div>
          <div className="flex flex-1 min-w-[180px] flex-col items-center rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-8 py-5 text-center transition duration-300 hover:-translate-y-[3px] hover:border-[var(--accent)]">
            <span className="mb-1 bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] bg-clip-text font-display text-4xl font-extrabold leading-none text-transparent">
              {experiences.reduce((acc, experience) => acc + experience.roles.length, 0)}
            </span>
            <span className="text-[0.78rem] text-[var(--text-2)]">Roles</span>
          </div>
        </div>

        <div
          className={[
            'mb-16 flex flex-col transition-all duration-700',
            inView ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-6 opacity-0',
          ].join(' ')}
        >
          {experiences.map((experience) =>
            experience.roles.map((role, roleIndex) => {
              const isCurrent = !role.endDate

              return (
                <div
                  key={`${experience.id}-${roleIndex}`}
                  className="relative grid grid-cols-[40px_1fr] gap-6"
                >
                  <div className="flex flex-col items-center pt-6">
                    <div
                      className={[
                        'relative z-[1] h-[14px] w-[14px] shrink-0 rounded-full border-2 border-[var(--border)] bg-[var(--surface-2)] transition',
                        isCurrent
                          ? 'border-[var(--accent)] bg-[var(--accent)] shadow-[0_0_12px_var(--accent-glow)]'
                          : '',
                      ].join(' ')}
                    >
                      {isCurrent && (
                        <div className="absolute inset-[-4px] animate-ping rounded-full border-2 border-[var(--accent)] opacity-60" />
                      )}
                    </div>
                    <div className="mt-1 w-0.5 flex-1 bg-[linear-gradient(180deg,var(--border)_0%,transparent_100%)]" />
                  </div>

                  <div className="card mb-8 p-8">
                    <div className="mb-7 flex flex-wrap items-start justify-between gap-4 max-sm:flex-col">
                      <div className="flex-1">
                        <div className="mb-2">
                          <span
                            className={[
                              'inline-flex items-center rounded-full border px-3 py-1 font-mono text-[0.7rem] text-[var(--text-2)]',
                              isCurrent
                                ? 'border-[rgba(79,156,249,0.3)] bg-[rgba(79,156,249,0.1)] text-[var(--accent)]'
                                : 'border-[var(--border)] bg-[rgba(255,255,255,0.05)]',
                            ].join(' ')}
                          >
                            {role.type}
                            {isCurrent ? ' | Current' : ''}
                          </span>
                        </div>
                        <h3 className="mb-1.5 font-display text-[1.3rem] font-bold text-[var(--text)]">
                          {role.title}
                        </h3>
                        <p className="flex items-center gap-2 text-sm text-[var(--text-2)]">
                          <span className="font-semibold text-[var(--accent)]">
                            {experience.company}
                          </span>
                          <span className="text-[var(--muted)]">|</span>
                          <span>{experience.location}</span>
                        </p>
                      </div>
                      <div className="flex flex-col items-start gap-1 sm:items-end">
                        <span className="font-mono text-[0.8rem] text-[var(--text-2)]">
                          {formatDateRange(role.startDate, role.endDate)}
                        </span>
                        <span className="rounded-full bg-[rgba(79,156,249,0.08)] px-2 py-0.5 font-mono text-[0.72rem] text-[var(--accent)]">
                          {calculateDuration(role.startDate, role.endDate)}
                        </span>
                      </div>
                    </div>

                    <div className="mb-7 grid gap-4 md:grid-cols-2">
                      {role.highlights.map((highlight) => (
                        <div
                          key={highlight.title}
                          className="flex gap-3.5 rounded-[var(--radius)] border border-[var(--border)] bg-[rgba(255,255,255,0.02)] px-5 py-4 transition duration-300 hover:border-[rgba(79,156,249,0.2)] hover:bg-[rgba(79,156,249,0.04)]"
                        >
                          <span className="shrink-0 text-[1.3rem]">{highlight.icon}</span>
                          <div>
                            <h4 className="mb-1 text-[0.85rem] font-semibold text-[var(--text)]">
                              {highlight.title}
                            </h4>
                            <p className="text-[0.8rem] leading-[1.6] text-[var(--text-2)]">
                              {highlight.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col gap-3 border-t border-[var(--border)] pt-6">
                      {(Object.entries(experience.technologies) as [keyof TechStack, string[]][]).map(
                        ([category, technologies]) => (
                          <div
                            key={category}
                            className="flex flex-col gap-2 md:flex-row md:items-start md:gap-4"
                          >
                            <span className="min-w-20 pt-1 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-[var(--muted)]">
                              {category}
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {technologies.map((technology) => (
                                <span key={technology} className="tag">
                                  {technology}
                                </span>
                              ))}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )
            })
          )}
        </div>

        <div
          className={[
            'grid gap-5 transition-all duration-700 md:grid-cols-3',
            inView ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-5 opacity-0',
          ].join(' ')}
        >
          {achievementCards.map((achievement) => (
            <div key={achievement.title} className="card p-7 text-center">
              <span className="mb-3 block text-2xl">{achievement.icon}</span>
              <h4 className="mb-2 text-[0.9rem] font-bold text-[var(--text)]">
                {achievement.title}
              </h4>
              <p className="text-[0.82rem] leading-[1.6] text-[var(--text-2)]">
                {achievement.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
