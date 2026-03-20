'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { projects } from '@/data/portfolio'
import { FaGithub } from 'react-icons/fa'
import { HiExternalLink } from 'react-icons/hi'
import { VscLiveShare } from 'react-icons/vsc'

export function Projects() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section className="section bg-[var(--bg-2)]" id="projects" ref={ref}>
      <div className="container">
        <div
          className={[
            'mb-14 translate-y-5 transition-all duration-700',
            inView ? 'translate-y-0 opacity-100' : 'opacity-0',
          ].join(' ')}
        >
          <span className="section-label">What I&apos;ve built</span>
          <h2 className="section-title">
            My <span className="accent">Projects</span>
          </h2>
          <p className="mt-3 text-base text-[var(--text-2)]">
            A selection of projects I&apos;ve designed, built, and shipped
          </p>
        </div>

        <div
          className={[
            'grid gap-6 transition-all duration-700 md:grid-cols-2 xl:grid-cols-3',
            inView ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-6 opacity-0',
          ].join(' ')}
        >
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] transition duration-300 hover:-translate-y-1.5 hover:border-[rgba(79,156,249,0.3)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.4)]"
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={600}
                  height={360}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className={[
                    'absolute inset-0 flex items-center justify-center gap-4 bg-[rgba(8,12,20,0.85)] backdrop-blur-[4px] transition duration-300',
                    hovered === project.id ? 'opacity-100' : 'opacity-0',
                  ].join(' ')}
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.1)] px-5 py-2.5 text-[0.85rem] font-medium text-[var(--text)] transition hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg)]"
                    aria-label={`View ${project.name} live demo`}
                  >
                    <VscLiveShare /> Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.1)] px-5 py-2.5 text-[0.85rem] font-medium text-[var(--text)] transition hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg)]"
                    aria-label={`View ${project.name} source code`}
                  >
                    <FaGithub /> Source Code
                  </a>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-3.5 p-6">
                <h3 className="font-display text-[1.15rem] font-bold text-[var(--text)]">
                  {project.name}
                </h3>
                <p className="line-clamp-4 text-[0.85rem] leading-7 text-[var(--text-2)]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <div
                      key={technology.name}
                      className="flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.04)] px-2.5 py-1 text-[0.72rem] text-[var(--text-2)] transition hover:border-[rgba(79,156,249,0.2)] hover:bg-[rgba(79,156,249,0.08)] hover:text-[var(--text)]"
                    >
                      <Image
                        src={technology.icon}
                        alt={technology.name}
                        width={16}
                        height={16}
                        className="h-[14px] w-[14px] object-contain"
                      />
                      <span>{technology.name}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-1">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <HiExternalLink /> Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
