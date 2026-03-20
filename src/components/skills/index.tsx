'use client'

import { useInView } from 'react-intersection-observer'
import { skills } from '@/data/portfolio'
import {
  SiChakraui,
  SiExpress,
  SiFigma,
  SiGit,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiPinia,
  SiReact,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from 'react-icons/si'

const ICON_MAP: Record<string, React.ReactNode> = {
  react: <SiReact />,
  nextjs: <SiNextdotjs />,
  vue: <SiVuedotjs />,
  redux: <SiRedux />,
  pinia: <SiPinia />,
  typescript: <SiTypescript />,
  nodejs: <SiNodedotjs />,
  express: <SiExpress />,
  mongodb: <SiMongodb />,
  mui: <SiMui />,
  chakra: <SiChakraui />,
  scss: <SiSass />,
  tailwind: <SiTailwindcss />,
  git: <SiGit />,
  figma: <SiFigma />,
}

export function Skills() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section className="section bg-[var(--bg)]" id="skills" ref={ref}>
      <div className="container">
        <div
          className={[
            'mb-14 translate-y-5 transition-all duration-700',
            inView ? 'translate-y-0 opacity-100' : 'opacity-0',
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

        <div
          className={[
            'grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-4 transition-all duration-700 sm:grid-cols-[repeat(auto-fill,minmax(130px,1fr))]',
            inView ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-6 opacity-0',
          ].join(' ')}
        >
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative flex cursor-default flex-col items-center gap-3 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] px-3 py-5 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)] sm:px-4 sm:py-7"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-[0.08]"
                style={{ background: skill.color }}
              />
              <div
                className="relative z-[1] flex items-center justify-center text-[2rem] transition duration-300 group-hover:scale-110 sm:text-[2.5rem]"
                style={{ color: skill.color }}
              >
                {ICON_MAP[skill.iconKey]}
              </div>
              <span className="relative z-[1] text-center text-[0.82rem] font-semibold text-[var(--text-2)] transition group-hover:text-[var(--text)]">
                {skill.name}
              </span>
              <div
                className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition duration-300 group-hover:opacity-100"
                style={{ boxShadow: `0 0 0 1px ${skill.color} inset` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
