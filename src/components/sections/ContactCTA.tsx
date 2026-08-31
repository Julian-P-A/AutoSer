import { ArrowUpRight, Car } from 'lucide-react'
import { AnimatedHeading, AnimatedText } from '@/components/AnimatedHeading'

export function ContactCTA() {
  return (
    <section
      id="contacto"
      className="px-5 py-24 text-center sm:px-8 sm:py-32 lg:px-16 lg:py-[168px]"
      style={{ background: 'var(--primary)', color: '#ffffff' }}
    >
      <div className="mx-auto" style={{ maxWidth: 780 }}>
        <AnimatedText className="text-xs font-medium uppercase tracking-[0.2em] text-white/78">
          MÁS QUE UNA ENSEÑANZA
        </AnimatedText>
        <AnimatedHeading
          className="mt-5 font-medium"
          style={{ fontSize: 'clamp(34px, 4.6vw, 58px)', lineHeight: 1.1 }}
        >
          Formamos conductores para cuidar cada vida en la vía.
        </AnimatedHeading>
        <AnimatedText
          delay={0.08}
          className="mx-auto mt-[22px] leading-[1.6] text-white/82"
          style={{ fontSize: 17, maxWidth: 600 }}
        >
          Mejoramos la calidad de vida de los actores en la vía a través de cursos de
          conducción, formación, certificación y una cultura basada en la seguridad vial.
        </AnimatedText>

        <AnimatedText
          as="div"
          delay={0.16}
          className="mt-[34px] flex flex-wrap items-center justify-center gap-6"
        >
          <a
            href="https://wa.me/573182366011"
            target="_blank"
            rel="noopener"
            className="as-primary-pill inline-flex items-center gap-3.5 rounded-full bg-white py-[5px] pl-6 pr-[5px] text-sm font-medium"
            style={{ color: 'var(--primary-dark)' }}
          >
            Hablar por WhatsApp
            <span
              className="as-pill-icon flex h-[38px] w-[38px] items-center justify-center rounded-full text-white"
              style={{ background: 'var(--primary-dark)' }}
            >
              <Car size={17} strokeWidth={1.8} />
            </span>
          </a>
          <a
            href="tel:+573182366011"
            className="as-secondary-link inline-flex items-center gap-2 text-sm font-medium text-white"
          >
            Llamar ahora
            <span className="as-pill-icon flex h-[26px] w-[26px] items-center justify-center rounded-full border border-white/50">
              <ArrowUpRight size={13} strokeWidth={1.8} />
            </span>
          </a>
        </AnimatedText>
      </div>
    </section>
  )
}
