// ─── Date Utilities ───────────────────────────────────────────────────────────

export function calculateDuration(startDate: string, endDate: string | null = null): string {
  const start = new Date(startDate)
  const end = endDate ? new Date(endDate) : new Date()

  const diffTime = Math.abs(end.getTime() - start.getTime())
  const diffMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30.44))

  if (diffMonths >= 12) {
    const years = Math.floor(diffMonths / 12)
    const remaining = diffMonths % 12
    return remaining === 0
      ? `${years} yr${years > 1 ? 's' : ''}`
      : `${years} yr${years > 1 ? 's' : ''} ${remaining} mo`
  }
  return `${diffMonths} mo${diffMonths > 1 ? 's' : ''}`
}

export function formatDateRange(startDate: string, endDate: string | null = null): string {
  const start = new Date(startDate)
  const end = endDate ? new Date(endDate) : null

  const opts: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric' }
  const startStr = start.toLocaleDateString('en-US', opts)
  const endStr = end ? end.toLocaleDateString('en-US', opts) : 'Present'

  return `${startStr} – ${endStr}`
}

// ─── Scroll Utility ───────────────────────────────────────────────────────────

export function scrollToSection(id: string): void {
  const el = document.getElementById(id.replace('#', ''))
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

// ─── Class Merging ────────────────────────────────────────────────────────────

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}
