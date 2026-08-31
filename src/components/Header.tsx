import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Menu } from 'lucide-react'
import logo from '@/assets/logo-autoser.webp'

const NAV_ITEMS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Cursos', href: '#cursos' },
  { label: 'Empresa', href: '#empresa' },
  { label: 'Contacto', href: '#contacto' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > window.innerHeight * 0.72)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const headerColor = scrolled ? 'var(--foreground)' : '#ffffff'

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-400"
      style={{
        background: scrolled ? 'var(--header-light-bg)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
      }}
    >
      <div className="flex items-center justify-between gap-4 px-5 py-3 sm:px-8 sm:py-4 lg:px-12 lg:py-4">
        <a href="#inicio" className="block shrink-0 leading-none">
          <img
            src={logo}
            alt="AUTOSER — Centro de Enseñanza Automovilístico"
            width={340}
            height={262}
            className="block h-14 w-auto transition-[filter] duration-400 sm:h-16 lg:h-[72px]"
            style={{ filter: scrolled ? 'none' : 'brightness(0) invert(1)' }}
          />
        </a>

        <div ref={menuRef} className="relative min-w-0 shrink">
          <nav
            className="flex items-center gap-7 whitespace-nowrap text-[15px] font-medium transition-colors duration-400"
            style={{ color: headerColor }}
          >
            <div className="hidden items-center gap-7 min-[1180px]:flex">
              {NAV_ITEMS.map((item) => (
                <a key={item.href} href={item.href} className="as-nav-link">
                  {item.label}
                </a>
              ))}
            </div>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="flex items-center gap-2 rounded-full px-[18px] py-[10px] text-[15px] font-medium transition-colors duration-300 min-[1180px]:hidden"
              style={{
                background: scrolled ? 'var(--surface)' : 'rgba(255,255,255,0.14)',
              }}
            >
              <Menu size={17} strokeWidth={1.7} />
              Menú
            </button>
          </nav>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="absolute right-0 top-[calc(100%+10px)] flex min-w-[190px] flex-col gap-0.5 rounded-[18px] border p-2 shadow-[0_24px_48px_rgba(15,20,25,0.16)]"
                style={{ background: 'var(--surface-light)', borderColor: 'var(--border)' }}
              >
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="as-menu-item block rounded-xl px-3.5 py-3 text-[15px] font-medium transition-colors"
                    style={{ color: 'var(--foreground)' }}
                  >
                    {item.label}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}
