import { Check } from 'lucide-react'
import { AnimatedHeading, AnimatedText, MaskedImage } from '@/components/AnimatedHeading'
import quienesSomos from '@/assets/quienes-somos.jpg'

const FEATURES = [
  'Habilitados por el Ministerio de Transporte',
  'Instructores profesionales certificados',
  'Formación teórica y práctica',
]

export function QuienesSomosSection() {
  return (
    <section
      id="empresa"
      className="px-5 py-18 sm:px-8 sm:py-24 lg:px-16 lg:py-32"
      style={{ background: 'var(--surface)' }}
    >
      <div
        className="mx-auto grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16"
        style={{ maxWidth: 1728 }}
      >
        <div>
          <AnimatedText
            className="text-xs font-medium uppercase tracking-[0.2em]"
            style={{ color: 'var(--primary)' }}
          >
            QUIÉNES SOMOS
          </AnimatedText>
          <AnimatedHeading
            className="mt-5 font-medium"
            style={{ fontSize: 'clamp(30px, 3.4vw, 46px)', lineHeight: 1.1 }}
          >
            Un equipo de instructores profesionales, comprometidos con tu seguridad.
          </AnimatedHeading>
          <AnimatedText
            delay={0.08}
            className="mt-[22px] text-base leading-[1.6]"
            style={{ color: '#4b5157', maxWidth: 520 }}
          >
            AUTOSER es un centro de enseñanza automovilístico habilitado por el Ministerio
            de Transporte para formar conductores con las actitudes, destrezas y
            conocimientos necesarios para conducir con seguridad. Acompañamos cada proceso
            con formación teórica y práctica, guiada por instructores profesionales.
          </AnimatedText>

          <AnimatedText as="ul" delay={0.14} className="mt-9 flex flex-col gap-3.5">
            {FEATURES.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-[15px]">
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                  style={{ background: 'var(--primary-light)', color: 'var(--primary)' }}
                >
                  <Check size={13} strokeWidth={2.2} />
                </span>
                {feature}
              </li>
            ))}
          </AnimatedText>
        </div>

        <MaskedImage
          src={quienesSomos}
          alt="Instructor profesional acompañando a una estudiante durante su clase de conducción"
          className="w-full rounded-[6px]"
          style={{ aspectRatio: '10 / 7' }}
        />
      </div>
    </section>
  )
}
