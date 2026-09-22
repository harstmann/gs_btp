import React from 'react'
import Link from 'next/link'

type Variant = 'primary' | 'secondary' | 'outline'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: Variant
  size?: Size
  type?: 'button' | 'submit' | 'reset'
  onClick?: React.MouseEventHandler
  className?: string
  disabled?: boolean
  showArrow?: boolean
  'aria-label'?: string
}

const variantClasses: Record<Variant, string> = {
  primary: [
    'bg-amber text-white border border-amber shadow-sm',
    'hover:bg-amber-dark hover:border-amber-dark hover:shadow-md hover:-translate-y-0.5',
    'focus:ring-2 focus:ring-amber/50',
    'disabled:bg-surface-200 disabled:border-surface-200 disabled:text-surface-400 disabled:cursor-not-allowed',
  ].join(' '),
  secondary: [
    'bg-transparent text-white border-2 border-white/40',
    'hover:border-amber hover:text-amber hover:bg-amber/8',
    'focus:ring-2 focus:ring-amber/50',
  ].join(' '),
  outline: [
    'bg-white text-deep-green border border-surface-200',
    'hover:border-amber hover:text-amber',
    'focus:ring-2 focus:ring-amber/50',
  ].join(' '),
}

const sizeClasses: Record<Size, string> = {
  sm:  'px-4 py-2 text-xs',
  md:  'px-5 py-2.5 text-sm',
  lg:  'px-7 py-3.5 text-sm',
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  type = 'button',
  onClick,
  className = '',
  disabled,
  showArrow = false,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const base = [
    'inline-flex items-center justify-center gap-2 font-bold rounded-lg transition-all duration-150 focus:outline-none',
    variantClasses[variant],
    sizeClasses[size],
    className,
  ].join(' ')

  const content = (
    <>
      {children}
      {showArrow && <span aria-hidden="true">&rarr;</span>}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={base} aria-label={ariaLabel}>
        {content}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={base}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  )
}
