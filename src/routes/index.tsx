import { createFileRoute } from '@tanstack/react-router'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'
import { Hero } from '@/components/sections/Hero'
import { QuienesSomosSection } from '@/components/sections/QuienesSomosSection'
import { CoursesSection } from '@/components/sections/CoursesSection'
import { EncuentranosSection } from '@/components/sections/EncuentranosSection'
import { BenefitsSection } from '@/components/sections/BenefitsSection'
import { ContactCTA } from '@/components/sections/ContactCTA'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <QuienesSomosSection />
        <CoursesSection />
        <EncuentranosSection />
        <BenefitsSection />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
