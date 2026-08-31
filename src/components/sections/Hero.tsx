import { Car } from 'lucide-react'
import { AnimatedHeading, AnimatedText } from '@/components/AnimatedHeading'
import heroImage from '@/assets/hero.webp'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden"
      style={{ height: 'var(--vh100, 100dvh)', minHeight: 780 }}
    >
      <img
        src={heroImage}
        alt="Estudiante conduciendo durante una clase práctica de manejo en Ibagué"
        fetchPriority="high"
        loading="eager"
        decoding="async"
        className="as-photo absolute inset-0 h-full w-full object-cover"
      />
      <div className="as-photo-tint" />
      <div className="as-grain" />
      <div className="absolute inset-0" style={{ background: 'rgba(9,13,17,0.24)' }} />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(8,12,16,0.92) 0%, rgba(8,12,16,0.56) 32%, rgba(8,12,16,0.08) 62%, rgba(8,12,16,0) 100%)',
        }}
      />

      <div className="relative flex h-full flex-col justify-end px-5 pb-10 sm:px-8 sm:pb-12 lg:px-12 lg:pb-16">
        <div className="flex flex-wrap items-end justify-between gap-12">
          <div className="max-w-[700px]">
            <AnimatedText
              onScroll={false}
              className="text-xs font-medium uppercase tracking-[0.2em] text-white/82"
            >
              AUTOSER · IBAGUÉ
            </AnimatedText>
            <AnimatedHeading
              as="h1"
              onScroll={false}
              className="mt-[18px] font-medium text-white"
              style={{ fontSize: 'clamp(38px, 5.6vw, 72px)', lineHeight: 1.02 }}
            >
              Aprende a conducir
              <br />
              con confianza
            </AnimatedHeading>
            <AnimatedText
              onScroll={false}
              delay={0.08}
              className="mt-[22px] max-w-[610px] leading-[1.45] text-white/85"
              style={{ fontSize: 'clamp(16px, 1.3vw, 21px)' }}
            >
              Formación teórica y práctica para obtener tu licencia A2, B1 o C1 con
              acompañamiento de instructores profesionales.
            </AnimatedText>
          </div>

          <AnimatedText as="div" onScroll={false} delay={0.16}>
            <a
              href="#cursos"
              className="as-primary-pill inline-flex items-center gap-3.5 rounded-full bg-white py-[5px] pl-6 pr-[5px] text-sm font-medium text-[#12191F]"
            >
              Inicia tu curso
              <span
                className="as-pill-icon flex h-[38px] w-[38px] items-center justify-center rounded-full text-white"
                style={{ background: 'var(--primary)' }}
              >
                <Car size={17} strokeWidth={1.8} />
              </span>
            </a>
          </AnimatedText>
        </div>
      </div>
    </section>
  )
}
