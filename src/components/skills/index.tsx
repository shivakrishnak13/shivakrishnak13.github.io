'use client'

import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import {
  SiChakraui,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiPinia,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiRedux,
  SiSass,
  SiShadcnui,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVuedotjs,
  SiPostgresql,
  SiJavascript,
  SiZod,
} from 'react-icons/si'
import { TbWebhook, TbBrandReactNative, TbPrompt } from 'react-icons/tb'
import { Badge, Category, Skill } from '@/types'
import { skillsCategory, softSkills } from '@/data/portfolio'
// ---------------------------------------------------------------------------
// Icon map
// ---------------------------------------------------------------------------

const ICON_MAP: Record<string, React.ReactNode> = {
  react: <SiReact />,
  nextjs: <SiNextdotjs />,
  vue: <SiVuedotjs />,
  javascript: <SiJavascript />,
  typescript: <SiTypescript />,
  redux: <SiRedux />,
  pinia: <SiPinia />,
  tanstack: <SiReactquery />,
  reacthookform: <SiReacthookform />,
  reactnative: <TbBrandReactNative />,
  nodejs: <SiNodedotjs />,
  express: <SiExpress />,
  zod: <SiZod />,
  webhooks: <TbWebhook />,
  stripe: <SiStripe />,
  mongodb: <SiMongodb />,
  postgresql: <SiPostgresql />,
  tailwind: <SiTailwindcss />,
  shadcn: <SiShadcnui />,
  mui: <SiMui />,
  chakra: <SiChakraui />,
  scss: <SiSass />,
  git: <SiGit />,
  github: <SiGithub />,
  githubactions: <SiGithubactions />,
  vercel: <SiVercel />,
  figma: <SiFigma />,
  prompt: <TbPrompt />,
}

const ALL_TAB_ID = 'all'

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function BadgePill({ type }: { type: Badge }) {
  const styles: Record<Badge, string> = {
    new: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
    ai: 'bg-violet-500/10  text-violet-400  border border-violet-500/20',
  }
  return (
    <span
      className={`absolute right-2 top-2 rounded-full px-1.5 py-0.5 text-[9px] font-semibold leading-none ${styles[type]}`}
    >
      {type === 'ai' ? 'AI' : 'new'}
    </span>
  )
}

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="group relative flex cursor-default flex-col items-center gap-2.5 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] px-2 py-4 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.25)] sm:py-5">
      {/* hover colour wash */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-[0.07]"
        style={{ background: skill.color }}
      />
      {/* hover border ring */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{ boxShadow: `0 0 0 1px ${skill.color} inset` }}
      />

      {skill.badge === 'ai' && <BadgePill type={skill.badge} />}

      <div
        className="relative z-[1] flex items-center justify-center text-[1.75rem] transition duration-300 group-hover:scale-110 sm:text-[2rem]"
        style={{ color: skill.color === '#ffffff' ? 'var(--text)' : skill.color }}
      >
        {ICON_MAP[skill.iconKey]}
      </div>

      <span className="relative z-[1] text-center text-[0.75rem] font-semibold leading-tight text-[var(--text-2)] transition group-hover:text-[var(--text)]">
        {skill.name}
      </span>
    </div>
  )
}

function CategoryBlock({ category }: { category: Category }) {
  return (
    <div className="mb-8">
      <div className="mb-3 flex items-center gap-2">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-[var(--text-2)]">
          {category.label}
        </span>
        {/* <span className="text-[10px] text-[var(--text-3)]">{category.skills.length}</span> */}
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(95px,1fr))] gap-3 sm:grid-cols-[repeat(auto-fill,minmax(115px,1fr))]">
        {category.skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function Skills() {
  const [activeTab, setActiveTab] = useState<string>(ALL_TAB_ID)
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const totalCount = skillsCategory.reduce((acc, c) => acc + c.skills.length, 0)

  const visibleCategories =
    activeTab === ALL_TAB_ID
      ? skillsCategory
      : skillsCategory.filter((c) => c.id === activeTab)

  return (
    <section className="section bg-[var(--bg)]" id="skills" ref={ref}>
      <div className="container">

        {/* Heading */}
        <div
          className={[
            'mb-10 transition-all duration-700',
            inView ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0',
          ].join(' ')}
        >
          <span className="section-label">What I work with</span>
          <h2 className="section-title">
            Technical <span className="accent">Skills</span>
          </h2>
          <p className="mt-3 text-base text-[var(--text-2)]">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Tabs */}
        <div
          className={[
            'mb-8 flex flex-wrap gap-2 transition-all duration-700 delay-100',
            inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
          ].join(' ')}
        >
          {/* All tab */}
          <button
            onClick={() => setActiveTab(ALL_TAB_ID)}
            className={[
              'rounded-full border px-3.5 py-1.5 text-xs font-medium transition duration-200',
              activeTab === ALL_TAB_ID
                ? 'border-[var(--accent)] bg-[var(--accent)] text-white'
                : 'border-[var(--border)] bg-[var(--surface)] text-[var(--text-2)] hover:border-[var(--text-3)] hover:text-[var(--text)]',
            ].join(' ')}
          >
            All{' '}
            <span className="ml-1 opacity-50 text-[10px]">{totalCount}</span>
          </button>

          {skillsCategory.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={[
                'rounded-full border px-3.5 py-1.5 text-xs font-medium transition duration-200',
                activeTab === cat.id
                  ? 'border-[var(--accent)] bg-[var(--accent)] text-white'
                  : 'border-[var(--border)] bg-[var(--surface)] text-[var(--text-2)] hover:border-[var(--text-3)] hover:text-[var(--text)]',
              ].join(' ')}
            >
              {cat.label}{' '}
              <span className="ml-1 opacity-50 text-[10px]">{cat.skills.length}</span>
            </button>
          ))}
        </div>

        {/* Skill grid(s) */}
        <div
          className={[
            'transition-all duration-700 delay-150',
            inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
          ].join(' ')}
        >
          {visibleCategories.map((cat) => (
            <CategoryBlock key={cat.id} category={cat} />
          ))}
        </div>

        {/* Soft skills */}
        <div
          className={[
            'mt-4 border-t border-[var(--border)] pt-8 transition-all duration-700 delay-200',
            inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
          ].join(' ')}
        >
          <div className="mb-4">
            <h3 className="font-display text-lg font-bold text-[var(--text)]">Soft Skills</h3>
            <p className="mt-1.5 text-sm text-[var(--text-2)]">
              Collaboration and delivery habits I rely on while building products.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--text-2)] transition hover:border-[var(--accent)] hover:text-[var(--text)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}