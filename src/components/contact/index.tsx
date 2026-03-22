'use client'

import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { profile } from '@/data/portfolio'
import { BsTelephoneFill } from 'react-icons/bs'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'
import { HiMail } from 'react-icons/hi'
import { MdLocationOn } from 'react-icons/md'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const fieldClassName =
  'w-full rounded-[var(--radius)] border border-[var(--border)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_var(--accent-glow)]'

export function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [form, setForm] = useState<FormData>({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      })

      const data = await res.json()
      setStatus(data.success ? 'success' : 'error')
      if (data.success) setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const contactItems = [
    { id: 'email', icon: <HiMail />, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    {
      id: 'phone',
      icon: <BsTelephoneFill />,
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, '')}`,
    },
    { id: 'location', icon: <MdLocationOn />, label: 'Location', value: profile.location, href: undefined },
  ]

  return (
    <section className="section bg-[var(--bg)]" id="contact" ref={ref}>
      <div className="container">
        <div
          className={[
            'mb-14 translate-y-5 transition-all duration-700',
            inView ? 'translate-y-0 opacity-100' : 'opacity-0',
          ].join(' ')}
        >
          <span className="section-label">Get in touch</span>
          <h2 className="section-title">
            Contact <span className="accent">Me</span>
          </h2>
          <p className="mt-3 max-w-[480px] text-base text-[var(--text-2)]">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </div>

        <div
          className={[
            'grid items-start gap-10 transition-all duration-700 lg:grid-cols-[1fr_1.6fr] lg:gap-16',
            inView ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-6 opacity-0',
          ].join(' ')}
        >
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="font-display text-2xl font-bold text-[var(--text)]">
                Let&apos;s work together
              </h3>
              <p className="text-[0.95rem] leading-8 text-[var(--text-2)]">
                I&apos;m currently open to new opportunities. Whether it&apos;s a full-time role,
                freelance project or just a chat about the industry, I&apos;d love to connect.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {contactItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start gap-4 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-5 py-4 transition duration-300 hover:translate-x-1 hover:border-[rgba(79,156,249,0.3)]"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[rgba(79,156,249,0.2)] bg-[rgba(79,156,249,0.1)] text-[var(--accent)]">
                    {item.icon}
                  </div>
                  <div>
                    <p className="mb-0.5 font-mono text-[0.72rem] uppercase tracking-[0.08em] text-[var(--muted)]">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-[var(--text)] transition hover:text-[var(--accent)]">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm text-[var(--text)]">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub"><FaGithub /></a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href={profile.instagram} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
              <a href={`mailto:${profile.email}`} className="social-icon" aria-label="Email"><HiMail /></a>
            </div>
          </div>

          <form
            className="flex flex-col gap-5 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-9"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_template" value="box" />
            <input type="hidden" name="_captcha" value="false" />

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-[0.82rem] font-medium text-[var(--text-2)]">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className={fieldClassName}
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  autoComplete="name"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-[0.82rem] font-medium text-[var(--text-2)]">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={fieldClassName}
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="subject" className="text-[0.82rem] font-medium text-[var(--text-2)]">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                className={fieldClassName}
                value={form.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-[0.82rem] font-medium text-[var(--text-2)]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className={`${fieldClassName} min-h-[140px] resize-y`}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                rows={6}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary self-start px-8 py-3 text-[0.95rem] disabled:cursor-not-allowed disabled:opacity-60"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                <>
                  <span className="inline-block h-[14px] w-[14px] animate-spin rounded-full border-2 border-[rgba(8,12,20,0.3)] border-t-[var(--bg)]" />
                  Sending...
                </>
              ) : (
                <>
                  <FiSend /> Send Message
                </>
              )}
            </button>

            {status === 'success' && (
              <p className="text-sm font-medium text-[var(--success)]">
                Message sent successfully! I&apos;ll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm font-medium text-[#f87171]">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
