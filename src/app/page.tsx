import { About } from '@/components/about'
import { Certificates } from '@/components/certificates'
import { Contact } from '@/components/contact'
import { ExperienceSection } from '@/components/experience'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { Navbar } from '@/components/navbar'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { Statistics } from '@/components/statistics'

export default function Home() {
  return (
    <main className="grid-bg">
      <Navbar />
      <Hero />
      <About />
      <ExperienceSection />
      <Skills />
      <Projects />
      <Certificates />
      <Statistics />
      <Contact />
      <Footer />
    </main>
  )
}
