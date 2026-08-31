import { AnimatedHeading, AnimatedText, MaskedImage } from '@/components/AnimatedHeading'
import benefit01 from '@/assets/benefit01.webp'
import benefit02 from '@/assets/benefit02.webp'
import benefit03 from '@/assets/benefit03.webp'

interface Benefit {
  index: string
  label: string
  heading: string
  image: string
  alt: string
}

const BENEFITS: Benefit[] = [
  {
    index: '01',
    label: 'FORMACIÓN CERTIFICADA',
    heading:
      'Centro de enseñanza habilitado por el Ministerio de Transporte para formar conductores bajo los requisitos establecidos para la enseñanza automovilística.',
    image: benefit01,
    alt: 'Formación teórica certificada en aula',
  },
  {
    index: '02',
    label: 'TEORÍA + PRÁCTICA',
    heading:
      'Aprendizaje acompañado por instructores profesionales, combinando conocimientos teóricos con experiencia real de conducción.',
    image: benefit02,
    alt: 'Práctica de conducción con acompañamiento profesional',
  },
  {
    index: '03',
    label: 'CONDUCCIÓN RESPONSABLE',
    heading:
      'Formación enfocada en desarrollar habilidades, destrezas, seguridad vial y cultura ciudadana para conducir con responsabilidad.',
    image: benefit03,
    alt: 'Hábitos de seguridad vial durante la conducción',
  },
]

export function BenefitsSection() {
  return (
    <section
      className="px-5 py-18 sm:px-8 sm:py-24 lg:px-16 lg:py-32"
      style={{ background: 'var(--surface)' }}
    >
      <div className="mx-auto" style={{ maxWidth: 1728 }}>
        <div style={{ maxWidth: 720 }}>
          <AnimatedHeading
            className="font-medium"
            style={{ fontSize: 'clamp(32px, 3.8vw, 52px)', lineHeight: 1.06 }}
          >
            ¿Por qué aprender con AUTOSER?
          </AnimatedHeading>
          <AnimatedText
            delay={0.08}
            className="mt-[22px] text-base leading-[1.6]"
            style={{ color: '#4b5157' }}
          >
            Somos un centro de enseñanza automovilístico especializado, certificado y
            habilitado para ofrecer capacitación teórico-práctica con el acompañamiento de
            instructores profesionales.
          </AnimatedText>
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-20">
          {BENEFITS.map((benefit, i) => {
            const imageFirst = i === 1
            return (
              <div
                key={benefit.index}
                className="border-t py-10 sm:py-12"
                style={{ borderColor: 'var(--border)' }}
              >
                <div
                  className={
                    imageFirst
                      ? 'grid grid-cols-1 items-start gap-6 sm:gap-10 lg:grid-cols-[1fr_200px_1fr] lg:gap-12'
                      : 'grid grid-cols-1 items-start gap-6 sm:gap-10 lg:grid-cols-[200px_1fr_1fr] lg:gap-12'
                  }
                >
                  {imageFirst && (
                    <MaskedImage
                      src={benefit.image}
                      alt={benefit.alt}
                      className="order-3 aspect-[4/3] w-full rounded-[6px] lg:order-none"
                    />
                  )}
                  <div
                    className={imageFirst ? 'order-1 text-xs font-medium lg:order-none' : 'text-xs font-medium'}
                    style={{ color: 'var(--primary)' }}
                  >
                    {benefit.index}
                    <div
                      className="mt-2.5 font-medium uppercase tracking-[0.16em]"
                      style={{ color: 'var(--foreground)' }}
                    >
                      {benefit.label}
                    </div>
                  </div>
                  <p
                    className={imageFirst ? 'order-2 font-heading font-medium lg:order-none' : 'font-heading font-medium'}
                    style={{
                      fontSize: 'clamp(24px, 2.6vw, 33px)',
                      lineHeight: 1.28,
                    }}
                  >
                    {benefit.heading}
                  </p>
                  {!imageFirst && (
                    <MaskedImage
                      src={benefit.image}
                      alt={benefit.alt}
                      className="aspect-[4/3] w-full rounded-[6px]"
                    />
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
