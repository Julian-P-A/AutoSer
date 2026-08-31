import { AnimatedHeading, AnimatedText } from '@/components/AnimatedHeading'
import { CourseCarousel } from '@/components/CourseCarousel'

export function CoursesSection() {
  return (
    <section
      id="cursos"
      className="py-18 sm:py-24 lg:py-32"
      style={{ background: 'var(--background)' }}
    >
      <div className="flex flex-col gap-8 pl-5 sm:pl-8 lg:flex-row lg:items-start lg:gap-3 lg:pl-16">
        <div className="pr-5 sm:pr-8 lg:shrink-0 lg:basis-[324px] lg:max-w-[460px] lg:pr-0">
          <AnimatedText
            className="text-xs font-medium uppercase leading-[1.7] tracking-[0.18em]"
            style={{ color: 'var(--primary)' }}
          >
            AUTOSER
            <br />
            CURSOS DE CONDUCCIÓN
          </AnimatedText>
          <AnimatedHeading
            className="mt-5 font-medium"
            style={{ fontSize: 'clamp(32px, 3.6vw, 52px)', lineHeight: 1.05 }}
          >
            Elige la categoría que necesitas
          </AnimatedHeading>
          <AnimatedText
            delay={0.08}
            className="mt-[22px] text-base leading-[1.6]"
            style={{ color: '#4b5157' }}
          >
            Formación profesional para motocicletas, vehículos particulares y vehículos de
            servicio público, combinando aprendizaje teórico y experiencia práctica.
          </AnimatedText>
        </div>

        <CourseCarousel />
      </div>
    </section>
  )
}
