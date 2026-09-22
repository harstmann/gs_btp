import React from 'react'

export interface SectionBadgeProps {
  label: string
  number?: string
  className?: string
  light?: boolean
}

export default function SectionBadge({
  label,
  number,
  className = '',
  light = false,
}: SectionBadgeProps) {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {number && (
        <span className="font-serif text-sm font-bold text-amber tracking-wider">
          {number}
        </span>
      )}
      <span
        className={`w-2 h-2 rounded-full ${
          light ? 'bg-amber' : 'bg-amber'
        } inline-block flex-shrink-0 animate-pulse`}
      />
      <span
        className={`text-xs font-semibold tracking-[0.2em] uppercase ${
          light ? 'text-deep-green/70' : 'text-amber'
        }`}
      >
        {label}
      </span>
      <span
        className={`w-8 h-[1px] ${
          light ? 'bg-deep-green/20' : 'bg-amber/40'
        } inline-block`}
      />
    </div>
  )
}
