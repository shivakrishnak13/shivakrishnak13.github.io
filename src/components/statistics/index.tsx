'use client'

import GitHubCalendar from 'react-github-calendar'
import { useInView } from 'react-intersection-observer'

export function Statistics() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const githubUser = 'shivakrishnak13'
  const statCards = [
    {
      src: `https://github-readme-stats.vercel.app/api?username=${githubUser}&count_private=true&theme=transparent&hide_border=true&title_color=4f9cf9&text_color=94a3b8&icon_color=4f9cf9`,
      alt: 'GitHub Stats',
    },
    {
      src: `https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUser}&langs_count=6&show_icons=true&theme=transparent&hide_border=true&title_color=4f9cf9&text_color=94a3b8`,
      alt: 'Top Languages',
    },
    {
      src: `https://github-readme-streak-stats.herokuapp.com?user=${githubUser}&theme=transparent&hide_border=true&stroke=4f9cf9&ring=4f9cf9&fire=a78bfa&currStreakLabel=4f9cf9&sideLabels=94a3b8&dates=94a3b8`,
      alt: 'GitHub Streak',
    },
  ]

  return (
    <section className="section bg-[var(--bg-2)]" id="statistics" ref={ref}>
      <div className="container">
        <div
          className={[
            'mb-14 translate-y-5 transition-all duration-700',
            inView ? 'translate-y-0 opacity-100' : 'opacity-0',
          ].join(' ')}
        >
          <span className="section-label">Activity</span>
          <h2 className="section-title">
            Git <span className="accent">Stats</span>
          </h2>
          <p className="mt-3 text-base text-[var(--text-2)]">
            My GitHub contribution history and coding statistics
          </p>
        </div>

        <div
          className={[
            'mb-12 translate-y-5 transition-all duration-700',
            inView ? 'translate-y-0 opacity-100 delay-100' : 'opacity-0',
          ].join(' ')}
        >
          <div className="overflow-x-auto rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-8 [&_.react-activity-calendar]:w-full">
            <GitHubCalendar
              username={githubUser}
              colorScheme="dark"
              fontSize={12}
              blockSize={13}
              blockMargin={4}
              theme={{
                dark: ['#111827', '#1e3a5f', '#2563eb', '#3b82f6', '#60a5fa'],
              }}
            />
          </div>
        </div>

        <div
          className={[
            'grid gap-5 transition-all duration-700 md:grid-cols-2 xl:grid-cols-3',
            inView ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-6 opacity-0',
          ].join(' ')}
        >
          {statCards.map((card) => (
            <div
              key={card.alt}
              className="flex items-center justify-center overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[rgba(79,156,249,0.3)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)]"
            >
              <img
                src={card.src}
                alt={card.alt}
                width={480}
                height={200}
                className="block h-auto w-full object-contain"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
