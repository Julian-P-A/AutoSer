import { Clock, Facebook, Heart, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import logo from '@/assets/logo-autoser.webp'
import logoSm from '@/assets/logo-autoser-sm.webp'

const NAV_ITEMS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Cursos', href: '#cursos' },
  { label: 'Empresa', href: '#empresa' },
  { label: 'Contacto', href: '#contacto' },
]

const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: Instagram },
  { label: 'Facebook', href: 'https://www.facebook.com/', icon: Facebook },
  { label: 'TikTok', href: 'https://www.tiktok.com/', icon: TikTokIcon },
]

function TikTokIcon({ size = 16, strokeWidth = 1.6 }: { size?: number; strokeWidth?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3v10.5a3.5 3.5 0 1 1-3.5-3.5" />
      <path d="M15 3a5.5 5.5 0 0 0 5.5 5.5V11A8 8 0 0 1 15 8.7" />
    </svg>
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="px-5 py-16 sm:px-8 sm:py-20 lg:px-16"
      style={{ background: 'var(--primary-dark)', color: '#ffffff' }}
    >
      <div className="mx-auto" style={{ maxWidth: 1728 }}>
        <div className="flex flex-wrap items-start justify-between gap-12">
          <div className="shrink-0">
            <a href="#inicio" className="block leading-none">
              <img
                src={logo}
                srcSet={`${logoSm} 260w, ${logo} 340w`}
                sizes="(min-width: 1024px) 166px, (min-width: 640px) 145px, 124px"
                alt="AUTOSER — Centro de Enseñanza Automovilístico"
                width={340}
                height={262}
                className="h-24 w-auto sm:h-28 lg:h-32"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <div className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-white/60">
                Más que una enseñanza.
              </div>
            </a>

            <div className="mt-5 flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="as-footer-link flex h-9 w-9 items-center justify-center rounded-full transition-opacity"
                  style={{ background: 'rgba(255,255,255,0.1)' }}
                >
                  <social.icon size={16} strokeWidth={1.6} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-16">
            <nav className="flex flex-col gap-3 text-[14px]">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="as-footer-link text-white/85 transition-opacity"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-3 text-[14px]" style={{ minWidth: 210 }}>
              <div className="flex items-start gap-2.5 text-white/85">
                <MapPin size={16} strokeWidth={1.6} className="mt-0.5 shrink-0" />
                <span>
                  CR 9 #43-50
                  <br />
                  Ibagué, Tolima
                </span>
              </div>
              <a
                href="tel:+573182366011"
                className="as-footer-link flex items-center gap-2.5 text-white/85 transition-opacity"
              >
                <Phone size={16} strokeWidth={1.6} className="shrink-0" />
                318 236 6011
              </a>
              <a
                href="mailto:contacto@escuelaautoser.com"
                className="as-footer-link flex items-center gap-2.5 text-white/85 transition-opacity"
              >
                <Mail size={16} strokeWidth={1.6} className="shrink-0" />
                contacto@escuelaautoser.com
              </a>
            </div>

            <div className="flex flex-col gap-3 text-[14px]" style={{ minWidth: 190 }}>
              <div className="flex items-center gap-2.5 text-white/85">
                <Clock size={16} strokeWidth={1.6} className="shrink-0" />
                Horarios de atención
              </div>
              <div className="flex flex-col gap-1 pl-[26px] text-white/70">
                <div className="flex justify-between gap-4">
                  <span>Lunes a viernes</span>
                  <span>8 AM – 6 PM</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Sábado y domingo</span>
                  <span>Cerrado</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t pt-7 sm:mt-16"
          style={{ borderColor: 'rgba(255,255,255,0.16)' }}
        >
          <div className="flex items-center gap-1.5 text-xs text-white/60">
            Diseñado y desarrollado por
            <Heart size={13} strokeWidth={1.8} className="shrink-0" style={{ color: 'var(--primary-light)' }} fill="currentColor" />
            <span className="font-semibold text-white/85">Kaede Project</span>
          </div>
          <div className="text-xs text-white/50">© {year} AUTOSER. Todos los derechos reservados.</div>
        </div>
      </div>
    </footer>
  )
}
