import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { AnimatedHeading, AnimatedText } from '@/components/AnimatedHeading'

const ADDRESS = 'CR 9 #43-50, Ibagué, Tolima'
const MAPS_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`
const MAPS_DIRECTIONS_HREF = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`

function MapEmbed() {
  return (
    <div
      className="overflow-hidden rounded-[6px] shadow-[0_20px_48px_rgba(24,63,184,0.14)]"
      style={{ aspectRatio: '10 / 8' }}
    >
      <iframe
        title="Ubicación de AUTOSER en Ibagué"
        src={MAPS_EMBED_SRC}
        className="h-full w-full grayscale-[15%]"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}

export function EncuentranosSection() {
  return (
    <section
      id="encuentranos"
      className="px-5 py-18 sm:px-8 sm:py-24 lg:px-16 lg:py-28"
      style={{ background: 'var(--primary-light)' }}
    >
      <div
        className="mx-auto grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16"
        style={{ maxWidth: 1728 }}
      >
        <div>
          <AnimatedText
            className="text-xs font-medium uppercase tracking-[0.2em]"
            style={{ color: 'var(--primary)' }}
          >
            ENCUÉNTRANOS
          </AnimatedText>
          <AnimatedHeading
            className="mt-5 font-medium"
            style={{ fontSize: 'clamp(30px, 3.4vw, 46px)', lineHeight: 1.1 }}
          >
            Visítanos en Ibagué.
          </AnimatedHeading>
          <AnimatedText
            delay={0.08}
            className="mt-[22px] text-base leading-[1.6]"
            style={{ color: '#4b5157', maxWidth: 480 }}
          >
            Acércate a nuestras instalaciones para conocer nuestros cursos e iniciar tu
            proceso de formación con acompañamiento personalizado.
          </AnimatedText>

          <AnimatedText as="div" delay={0.14} className="mt-8 flex flex-col gap-4 text-[15px]">
            <div className="flex items-start gap-3">
              <MapPin
                size={17}
                strokeWidth={1.6}
                className="mt-0.5 shrink-0"
                style={{ color: 'var(--primary)' }}
              />
              <span>
                CR 9 #43-50
                <br />
                Ibagué, Tolima
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Clock
                size={17}
                strokeWidth={1.6}
                className="mt-0.5 shrink-0"
                style={{ color: 'var(--primary)' }}
              />
              <div className="flex flex-col gap-1">
                <div className="flex items-baseline gap-2">
                  <span>Lunes a viernes</span>
                  <span style={{ color: '#4b5157' }}>· 8:00 AM – 6:00 PM</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span>Sábado y domingo</span>
                  <span style={{ color: '#4b5157' }}>· Cerrado</span>
                </div>
              </div>
            </div>
            <a href="tel:+573182366011" className="flex items-center gap-3">
              <Phone size={17} strokeWidth={1.6} className="shrink-0" style={{ color: 'var(--primary)' }} />
              318 236 6011
            </a>
            <a href="mailto:contacto@escuelaautoser.com" className="flex items-center gap-3">
              <Mail size={17} strokeWidth={1.6} className="shrink-0" style={{ color: 'var(--primary)' }} />
              contacto@escuelaautoser.com
            </a>
          </AnimatedText>

          <AnimatedText as="div" delay={0.2} className="mt-8">
            <a
              href={MAPS_DIRECTIONS_HREF}
              target="_blank"
              rel="noopener"
              className="as-primary-pill inline-flex items-center gap-3.5 rounded-full py-[5px] pl-6 pr-[5px] text-sm font-medium text-white"
              style={{ background: 'var(--primary)' }}
            >
              Cómo llegar
              <span className="as-pill-icon flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white">
                <MapPin size={16} strokeWidth={1.8} style={{ color: 'var(--primary)' }} />
              </span>
            </a>
          </AnimatedText>
        </div>

        <MapEmbed />
      </div>
    </section>
  )
}
