import type { CSSProperties, ElementType, ReactNode } from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

const EASE = [0.22, 1, 0.36, 1] as const

interface AnimatedHeadingProps {
  children: ReactNode
  as?: ElementType
  className?: string
  style?: CSSProperties
  delay?: number
  /** false for content already in the initial viewport (e.g. the hero) so it plays on mount instead of waiting for a scroll-triggered intersection. */
  onScroll?: boolean
}

/** Blurred rise-in reveal used for headings. */
export function AnimatedHeading({
  children,
  as: Tag = 'h2',
  className,
  style,
  delay = 0,
  onScroll = true,
}: AnimatedHeadingProps) {
  const MotionTag = motion.create(Tag)
  const target = { opacity: 1, y: 0, filter: 'blur(0px)' }
  return (
    <MotionTag
      className={cn('font-heading', className)}
      style={style}
      initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }}
      {...(onScroll
        ? { whileInView: target, viewport: { once: true, margin: '0px' } }
        : { animate: target })}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  )
}

interface AnimatedTextProps {
  children: ReactNode
  as?: ElementType
  className?: string
  style?: CSSProperties
  delay?: number
  onScroll?: boolean
}

/** Soft rise-in reveal used for supporting copy and small labels. */
export function AnimatedText({
  children,
  as: Tag = 'p',
  className,
  style,
  delay = 0,
  onScroll = true,
}: AnimatedTextProps) {
  const MotionTag = motion.create(Tag)
  const target = { opacity: 1, y: 0 }
  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, y: 20 }}
      {...(onScroll
        ? { whileInView: target, viewport: { once: true, margin: '0px' } }
        : { animate: target })}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  )
}

interface MaskedImageProps {
  src: string
  alt: string
  className?: string
  style?: CSSProperties
  imgClassName?: string
  delay?: number
  tint?: boolean
  grain?: boolean
  onScroll?: boolean
}

/** Clip-path mask reveal used for all campaign photography. */
export function MaskedImage({
  src,
  alt,
  className,
  style,
  imgClassName,
  delay = 0,
  tint = true,
  grain = true,
  onScroll = true,
}: MaskedImageProps) {
  const target = { clipPath: 'inset(0% 0 0 0)' }
  return (
    <motion.div
      className={cn('relative overflow-hidden', className)}
      style={style}
      initial={{ clipPath: 'inset(100% 0 0 0)' }}
      {...(onScroll
        ? { whileInView: target, viewport: { once: true, margin: '0px' } }
        : { animate: target })}
      transition={{ duration: 1.1, ease: EASE, delay }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={cn('as-photo block h-full w-full object-cover', imgClassName)}
      />
      {tint && <div className="as-photo-tint" />}
      {grain && <div className="as-grain" />}
    </motion.div>
  )
}
