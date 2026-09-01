function WhatsAppIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#ffffff">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.48 1.32 5.01L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.13a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.27-4.36c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.42 5.83c0 4.55-3.7 8.21-8.26 8.21zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.74 2.66 4.22 3.73.59.25 1.05.4 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.22-.17-.47-.29z" />
    </svg>
  )
}

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/573182366011"
      target="_blank"
      rel="noopener"
      aria-label="Escríbenos por WhatsApp"
      className="as-whatsapp-float fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      <span
        className="as-whatsapp-tooltip max-w-0 overflow-hidden whitespace-nowrap rounded-full py-3 text-sm font-medium opacity-0 shadow-[0_10px_28px_rgba(15,20,25,0.18)] transition-all duration-300 ease-out"
        style={{ background: '#ffffff', color: 'var(--foreground)' }}
      >
        Si necesitas ayuda, escríbenos
      </span>
      <span
        className="as-whatsapp-bubble flex h-14 w-14 shrink-0 items-center justify-center rounded-full shadow-[0_10px_28px_rgba(15,20,25,0.25)] transition-transform duration-300"
        style={{ background: '#25D366' }}
      >
        <WhatsAppIcon />
      </span>
    </a>
  )
}
