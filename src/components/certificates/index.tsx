'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { certificates } from '@/data/portfolio'
import type { Certificate } from '@/types'
import { HiExternalLink, HiX, HiZoomIn } from 'react-icons/hi'
import { MdVerified } from 'react-icons/md'

export function Certificates() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })
  const [modal, setModal] = useState<Certificate | null>(null)

  const openModal = (cert: Certificate) => {
    setModal(cert)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModal(null)
    document.body.style.overflow = ''
  }

  return (
    <>
      <section className="section bg-[var(--bg)]" id="certificates" ref={ref}>
        <div className="container">
          <div
            className={[
              'mb-14 translate-y-5 transition-all duration-700',
              inView ? 'translate-y-0 opacity-100' : 'opacity-0',
            ].join(' ')}
          >
            <span className="section-label">Credentials</span>
            <h2 className="section-title">
              <span className="accent">Certificates</span>
            </h2>
            <p className="mt-3 max-w-[540px] text-base text-[var(--text-2)]">
              Professional certifications validating my expertise and continuous learning
              journey
            </p>
          </div>

          <div
            className={[
              'grid gap-8 transition-all duration-700 md:grid-cols-2 xl:grid-cols-3',
              inView ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-6 opacity-0',
            ].join(' ')}
          >
            {certificates.map((cert) => (
              <article
                key={cert.id}
                className="flex flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] transition duration-300 hover:-translate-y-1.5 hover:border-[rgba(79,156,249,0.3)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.4)]"
              >
                <div
                  className="group relative aspect-[4/3] w-full cursor-pointer overflow-hidden"
                  onClick={() => openModal(cert)}
                  onKeyDown={(event) => event.key === 'Enter' && openModal(cert)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${cert.name}`}
                >
                  <Image
                    src={cert.image}
                    alt={`${cert.name} Certificate`}
                    width={560}
                    height={400}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[rgba(8,12,20,0.7)] text-sm font-medium text-[var(--text)] opacity-0 transition duration-300 group-hover:opacity-100">
                    <HiZoomIn className="text-3xl text-[var(--accent)]" />
                    <span>View Certificate</span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-3 p-6">
                  <span className="inline-flex w-fit rounded-full border border-[rgba(79,156,249,0.2)] bg-[rgba(79,156,249,0.1)] px-3 py-1 font-mono text-[0.7rem] text-[var(--accent)]">
                    {cert.badge}
                  </span>
                  <h3 className="font-display text-[1.15rem] font-bold text-[var(--text)]">
                    {cert.name}
                  </h3>
                  <p className="text-[0.85rem] text-[var(--text-2)]">
                    Issued by <strong className="text-[var(--text)]">{cert.issuer}</strong>
                  </p>
                  <p className="text-[0.83rem] leading-7 text-[var(--text-2)]">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span key={skill} className="tag">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-3 pt-1">
                    <button className="btn btn-primary" onClick={() => openModal(cert)}>
                      <HiZoomIn /> View
                    </button>
                    {cert.verificationUrl && (
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-ghost"
                      >
                        <MdVerified /> Verify
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {modal && (
        <div
          className="fixed inset-0 z-[2000] flex items-center justify-center bg-[rgba(0,0,0,0.9)] p-8 backdrop-blur-xl"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative flex w-full max-w-[900px] flex-col items-center gap-6"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="absolute -right-4 -top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-2)] text-[1.1rem] text-[var(--text)] transition hover:bg-[var(--accent)] hover:text-[var(--bg)]"
              onClick={closeModal}
              aria-label="Close"
            >
              <HiX />
            </button>
            <Image
              src={modal.image}
              alt={modal.name}
              width={900}
              height={640}
              className="h-auto w-full rounded-[var(--radius-lg)] shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
            />
            {modal.verificationUrl && (
              <a
                href={modal.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary self-center"
              >
                <HiExternalLink /> Verify Certificate
              </a>
            )}
          </div>
        </div>
      )}
    </>
  )
}
