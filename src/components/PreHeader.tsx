import { Clock } from 'lucide-react'

export function PreHeader() {
  return (
    <div
      id="pre-header"
      className="relative z-40 px-5 py-2 text-center text-xs font-medium sm:px-8 lg:px-12"
      style={{ background: 'var(--primary)', color: '#ffffff' }}
    >
      <span className="inline-flex items-center gap-2">
        <Clock size={13} strokeWidth={1.8} className="shrink-0" />
        Horarios de atención: Lunes a viernes 8:00 AM – 6:00 PM
      </span>
    </div>
  )
}
