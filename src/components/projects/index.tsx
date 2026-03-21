'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { projects, professionalProjects } from '@/data/portfolio'
import { FaGithub, FaBuilding } from 'react-icons/fa'
import { HiExternalLink, HiCheckCircle } from 'react-icons/hi'
import { VscLiveShare } from 'react-icons/vsc'
import { MdLock } from 'react-icons/md'

export function Projects() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })
  const [hovered, setHovered] = useState<number | null>(null)
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section className="section bg-[var(--bg-2)]" id="projects" ref={ref}>
      <div className="container">

        {/* ── Section Header ── */}
        <div
          className={[
            'mb-14 transition-all duration-700',
            inView ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0',
          ].join(' ')}
        >
          <span className="section-label">What I&apos;ve built</span>
          <h2 className="section-title">
            My <span className="accent">Projects</span>
          </h2>
          <p className="mt-3 text-base text-[var(--text-2)]">
            Professional work and personal builds — from AI platforms to eCommerce apps
          </p>
        </div>

        {/* ══════════════════════════════════════════════════════════
            SECTION 1 — Professional / Company Projects
        ══════════════════════════════════════════════════════════ */}
        <div
          className={[
            'mb-20 transition-all duration-700 delay-100',
            inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
          ].join(' ')}
        >
          {/* Sub-header */}
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[rgba(79,156,249,0.12)] text-[var(--accent)]">
              <FaBuilding size={14} />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-[var(--text)]">
                Professional Projects
              </h3>
              <p className="text-xs text-[var(--text-2)]">
                Built at companies · Internal codebases · No public links
              </p>
            </div>
            {/* Internal badge */}
            <span className="ml-auto flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 font-mono text-[0.68rem] text-[var(--text-2)]">
              <MdLock size={11} /> Confidential
            </span>
          </div>

          {/* Professional project cards */}
          <div className="flex flex-col gap-6">
            {professionalProjects.map((proj, i) => {
              const isExpanded = expanded === proj.id
              // Show first 4 bullets always, rest on expand
              const visibleContributions = isExpanded
                ? proj.contributions
                : proj.contributions.slice(0, 4)

              return (
                <article
                  key={proj.id}
                  className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6 transition duration-300 hover:border-[rgba(79,156,249,0.25)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)] md:p-8"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {/* Card top row */}
                  <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
                    <div>
                      {/* Company + period */}
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-[rgba(79,156,249,0.1)] px-3 py-0.5 font-mono text-[0.72rem] font-medium text-[var(--accent)] border border-[rgba(79,156,249,0.2)]">
                          {proj.company}
                        </span>
                        <span className="font-mono text-[0.72rem] text-[var(--muted)]">
                          {proj.companyPeriod}
                        </span>
                      </div>
                      {/* Project name */}
                      <h3 className="font-display text-xl font-bold text-[var(--text)] md:text-2xl">
                        {proj.name}
                      </h3>
                      {/* Tagline */}
                      <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-2)]">
                        {proj.tagline}
                      </p>
                    </div>

                    {/* Lock badge */}
                    <div className="flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[rgba(255,255,255,0.03)] px-4 py-2.5">
                      <MdLock className="text-[var(--muted)]" size={14} />
                      <span className="font-mono text-[0.7rem] text-[var(--muted)]">
                        Internal Project
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="mb-5 h-px bg-gradient-to-r from-[var(--border)] via-[rgba(79,156,249,0.15)] to-transparent" />

                  {/* My Contributions */}
                  <div className="mb-5">
                    <p className="mb-3 font-mono text-[0.72rem] font-medium uppercase tracking-widest text-[var(--accent)]">
                      My Contributions
                    </p>
                    <ul className="flex flex-col gap-2.5">
                      {visibleContributions.map((point, pi) => (
                        <li key={pi} className="flex items-start gap-3">
                          <HiCheckCircle
                            className="mt-0.5 shrink-0 text-[var(--accent)]"
                            size={16}
                          />
                          <span className="text-sm leading-relaxed text-[var(--text-2)]">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Show more / less */}
                    {proj.contributions.length > 4 && (
                      <button
                        onClick={() => setExpanded(isExpanded ? null : proj.id)}
                        className="mt-3 font-mono text-[0.75rem] text-[var(--accent)] underline-offset-4 hover:underline"
                      >
                        {isExpanded
                          ? '↑ Show less'
                          : `↓ Show ${proj.contributions.length - 4} more`}
                      </button>
                    )}
                  </div>

                  {/* Impact — only if data exists */}
                  {proj.impact && proj.impact.length > 0 && (
                    <div className="mb-5 rounded-xl border border-[rgba(79,156,249,0.15)] bg-[rgba(79,156,249,0.05)] px-5 py-4">
                      <p className="mb-2.5 font-mono text-[0.68rem] font-medium uppercase tracking-widest text-[var(--accent)]">
                        Impact
                      </p>
                      <ul className="flex flex-col gap-1.5">
                        {proj.impact.map((item, ii) => (
                          <li
                            key={ii}
                            className="flex items-start gap-2.5 text-sm text-[var(--text-2)]"
                          >
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech stack */}
                  <div className="flex flex-wrap items-center gap-2">
                    {proj.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.04)] px-3 py-1 text-[0.72rem] text-[var(--text-2)] transition hover:border-[rgba(79,156,249,0.2)] hover:bg-[rgba(79,156,249,0.08)] hover:text-[var(--text)]"
                      >
                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          width={14}
                          height={14}
                          className="h-3.5 w-3.5 object-contain"
                        />
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            SECTION 2 — Personal / Open-Source Projects
        ══════════════════════════════════════════════════════════ */}
        <div
          className={[
            'transition-all duration-700 delay-200',
            inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
          ].join(' ')}
        >
          {/* Sub-header */}
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[rgba(167,139,250,0.12)] text-[var(--accent-2)]">
              <FaGithub size={14} />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-[var(--text)]">
                Personal Projects
              </h3>
              <p className="text-xs text-[var(--text-2)]">
                Side builds · Learning · Open source — all publicly available
              </p>
            </div>
          </div>

          {/* Personal project grid */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] transition duration-300 hover:-translate-y-1.5 hover:border-[rgba(167,139,250,0.3)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.4)]"
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={600}
                    height={360}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Hover overlay */}
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
                    >
                      <VscLiveShare /> Live
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.1)] px-5 py-2.5 text-[0.85rem] font-medium text-[var(--text)] transition hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg)]"
                    >
                      <FaGithub /> GitHub
                    </a>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col gap-3.5 p-6">
                  <h3 className="font-display text-[1.1rem] font-bold text-[var(--text)]">
                    {project.name}
                  </h3>
                  <p className="line-clamp-4 text-[0.85rem] leading-7 text-[var(--text-2)]">
                    {project.description}
                  </p>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <div
                        key={technology.name}
                        className="flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.04)] px-2.5 py-1 text-[0.72rem] text-[var(--text-2)] transition hover:border-[rgba(167,139,250,0.2)] hover:bg-[rgba(167,139,250,0.08)] hover:text-[var(--text)]"
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

                  {/* Action buttons */}
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

      </div>
    </section>
  )
}
