import { useEffect } from 'react'
import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import appCss from '../styles.css?url'

const SITE_URL = 'https://www.escuelaautoser.com'
const OG_IMAGE = `${SITE_URL}/og-image.jpg`
const TITLE = 'AUTOSER — Escuela de Conducción en Ibagué'
const DESCRIPTION =
  'Escuela de conducción en Ibagué. AUTOSER es un centro de enseñanza automovilístico habilitado por el Ministerio de Transporte, con formación teórico-práctica para licencia A2, B1 y C1 e instructores profesionales.'

const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@type': 'DrivingSchool',
  name: 'AUTOSER',
  alternateName: 'AUTOSER — Escuela de Conducción en Ibagué',
  description: DESCRIPTION,
  url: SITE_URL,
  image: OG_IMAGE,
  logo: `${SITE_URL}/favicon.png`,
  telephone: '+573182366011',
  email: 'contacto@escuelaautoser.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'CR 9 #43-50',
    addressLocality: 'Ibagué',
    addressRegion: 'Tolima',
    addressCountry: 'CO',
  },
  areaServed: {
    '@type': 'City',
    name: 'Ibagué',
  },
  sameAs: [SITE_URL],
}

const ZOOM_SCRIPT = `(function(){
  function updateZoom(){
    var w = document.documentElement.clientWidth;
    var z = (w < 1728 && w >= 900) ? w / 1728 : 1;
    document.documentElement.style.zoom = String(z);
    document.documentElement.style.setProperty("--vh100", (window.innerHeight / z) + "px");
  }
  updateZoom();
  window.addEventListener("resize", updateZoom);
})();`

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: TITLE },
      { name: 'description', content: DESCRIPTION },
      { name: 'robots', content: 'index, follow' },
      { name: 'theme-color', content: '#183fb8' },
      { name: 'geo.region', content: 'CO-TOL' },
      { name: 'geo.placename', content: 'Ibagué, Tolima, Colombia' },
      { name: 'geo.position', content: '4.4389;-75.2322' },
      { name: 'ICBM', content: '4.4389, -75.2322' },
      // Open Graph
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'es_CO' },
      { property: 'og:site_name', content: 'AUTOSER' },
      { property: 'og:title', content: TITLE },
      { property: 'og:description', content: DESCRIPTION },
      { property: 'og:url', content: SITE_URL },
      { property: 'og:image', content: OG_IMAGE },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: TITLE },
      { name: 'twitter:description', content: DESCRIPTION },
      { name: 'twitter:image', content: OG_IMAGE },
    ],
    links: [
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: '/fonts/inter-latin-var.woff2',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: '/fonts/inter-tight-latin-var.woff2',
        crossOrigin: 'anonymous',
      },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '256x256', href: '/favicon.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'canonical', href: SITE_URL },
      { rel: 'stylesheet', href: appCss },
    ],
  }),
  notFoundComponent: NotFound,
  shellComponent: RootDocument,
})

function NotFound() {
  return (
    <div
      style={{
        minHeight: 'var(--vh100, 100dvh)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
        padding: 24,
        textAlign: 'center',
        background: 'var(--background)',
        color: 'var(--foreground)',
      }}
    >
      <p
        className="font-heading"
        style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 500 }}
      >
        Página no encontrada
      </p>
      <a
        href="/"
        className="as-primary-pill"
        style={{
          display: 'inline-flex',
          padding: '10px 24px',
          borderRadius: 999,
          background: 'var(--primary)',
          color: '#fff',
          fontSize: 14,
          fontWeight: 500,
        }}
      >
        Volver al inicio
      </a>
    </div>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    function updateZoom() {
      const w = document.documentElement.clientWidth
      const z = w < 1728 && w >= 900 ? w / 1728 : 1
      document.documentElement.style.zoom = String(z)
      document.documentElement.style.setProperty('--vh100', `${window.innerHeight / z}px`)
    }
    updateZoom()
    window.addEventListener('resize', updateZoom)
    return () => window.removeEventListener('resize', updateZoom)
  }, [])

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
        />
        <script dangerouslySetInnerHTML={{ __html: ZOOM_SCRIPT }} />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
