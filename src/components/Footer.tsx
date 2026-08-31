import { Heart, Mail, MapPin, Phone } from 'lucide-react'
import logo from '@/assets/logo-autoser.webp'

const NAV_ITEMS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Cursos', href: '#cursos' },
  { label: 'Empresa', href: '#empresa' },
  { label: 'Contacto', href: '#contacto' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="px-5 py-16 sm:px-8 sm:py-20 lg:px-16"
      style={{ background: 'var(--primary-dark)', color: '#ffffff' }}
    >
      <div className="mx-auto" style={{ maxWidth: 1728 }}>
        <div className="flex flex-wrap items-start justify-between gap-12">
          <a href="#inicio" className="block shrink-0 leading-none">
            <img
              src={logo}
              alt="AUTOSER — Centro de Enseñanza Automovilístico"
              className="h-24 w-auto sm:h-28 lg:h-32"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <div
              className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-white/60"
            >
              Más que una enseñanza.
            </div>
          </a>

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
