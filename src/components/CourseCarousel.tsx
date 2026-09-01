import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, Bus, Car, Motorbike } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { MaskedImage } from '@/components/AnimatedHeading'
import { cn } from '@/lib/utils'
import a2Image from '@/assets/a2.webp'
import b1Image from '@/assets/b1.webp'
import c1Image from '@/assets/c1.webp'

interface Course {
  label: string
  title: string
  description: string
  image: string
  alt: string
  icon: LucideIcon
}

const COURSES: Course[] = [
  {
    label: 'MOTOCICLETAS',
    title: 'A2',
    description:
      'Motocicletas, motociclos y mototriciclos de más de 125 c.c. de cilindrada.',
    image: a2Image,
    alt: 'Estudiante recibiendo instrucción de conducción de motocicleta',
    icon: Motorbike,
  },
  {
    label: 'SERVICIO PARTICULAR',
    title: 'B1',
    description: 'Automóviles, camperos, camionetas y microbuses de servicio particular.',
    image: b1Image,
    alt: 'Vehículo particular usado para las clases de conducción',
    icon: Car,
  },
  {
    label: 'SERVICIO PÚBLICO',
    title: 'C1',
    description: 'Automóviles, camperos, camionetas y microbuses de servicio público.',
    image: c1Image,
    alt: 'Instrucción de conducción para vehículos de servicio público',
    icon: Bus,
  },
]

export function CourseCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    function update() {
      if (!track) return
      const { scrollLeft, scrollWidth, clientWidth } = track
      setAtStart(scrollLeft <= 4)
      setAtEnd(scrollLeft + clientWidth >= scrollWidth - 4)
    }

    update()
    track.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      track.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  function scrollByCards(dir: 1 | -1) {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector<HTMLElement>('[data-course-card]')
    const gap = 24
    const delta = (card ? card.getBoundingClientRect().width : 420) + gap
    track.scrollBy({ left: dir * delta, behavior: 'smooth' })
  }

  return (
    <div className="as-carousel-wrap group relative min-w-0 flex-1 pr-5 sm:pr-8 lg:pr-16">
      <div
        ref={trackRef}
        className="as-carousel-track flex gap-6 overflow-x-auto pb-9"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {COURSES.map((course, i) => (
          <article
            key={course.title}
            data-course-card
            className="flex-none"
            style={{
              flexBasis: 'clamp(300px, 32vw, 460px)',
              width: 'clamp(300px, 32vw, 460px)',
              scrollSnapAlign: 'start',
            }}
          >
            <MaskedImage
              src={course.image}
              alt={course.alt}
              className="aspect-[3/4] w-full rounded-[6px]"
              delay={i * 0.08}
            />
            <div className="pt-5">
              <div
                className="text-xs font-medium tracking-[0.14em] uppercase"
                style={{ color: 'var(--primary)' }}
              >
                {course.label}
              </div>
              <div className="font-heading mt-1.5 text-[34px] font-medium">
                {course.title}
              </div>
              <p
                className="mt-2.5 max-w-[380px] text-[15px] leading-[1.5]"
                style={{ color: '#4b5157' }}
              >
                {course.description}
              </p>
              <a
                href={`https://wa.me/573182366011?text=${encodeURIComponent(
                  `Hola, quiero información sobre el curso ${course.title}`,
                )}`}
                target="_blank"
                rel="noopener"
                className="as-primary-pill mt-5 inline-flex items-center gap-3 rounded-full py-[5px] pl-5 pr-[5px] text-sm font-medium text-white"
                style={{ background: 'var(--primary)' }}
              >
                Quiero información
                <span className="as-pill-icon flex h-8 w-8 items-center justify-center rounded-full bg-white">
                  <course.icon size={14} strokeWidth={1.8} style={{ color: 'var(--primary)' }} />
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>

      <button
        onClick={() => scrollByCards(-1)}
        aria-label="Curso anterior"
        disabled={atStart}
        className={cn(
          'as-carousel-control as-ctrl-btn absolute left-2 top-[38%] z-10 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white opacity-100 shadow-[0_8px_28px_rgba(15,20,25,0.2)] sm:left-4 lg:flex lg:pointer-events-none lg:opacity-0',
          atStart ? 'hidden lg:hidden' : 'flex',
        )}
        style={{ color: 'var(--foreground)' }}
      >
        <ArrowLeft size={18} strokeWidth={1.6} />
      </button>
      <button
        onClick={() => scrollByCards(1)}
        aria-label="Siguiente curso"
        disabled={atEnd}
        className={cn(
          'as-carousel-control as-ctrl-btn absolute right-2 top-[38%] z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white opacity-100 shadow-[0_8px_28px_rgba(15,20,25,0.2)] sm:right-4 lg:right-20 lg:pointer-events-none lg:opacity-0',
          atEnd && 'hidden lg:hidden',
        )}
        style={{ color: 'var(--foreground)' }}
      >
        <ArrowRight size={18} strokeWidth={1.6} />
      </button>
    </div>
  )
}
