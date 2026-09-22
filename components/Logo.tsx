import React from 'react'

type Props = {
  size?: number
  variant?: 'color' | 'mono'
  className?: string
}

export default function Logo({ size = 96, variant = 'color', className = '' }: Props) {
  const amber = variant === 'color' ? '#C98A3E' : '#000'
  const green = variant === 'color' ? '#14201B' : '#000'
  const fillText = variant === 'color' ? '#14201B' : '#000'

  return (
    <svg className={className} width={size} height={Math.round(size)} viewBox="0 0 240 240" role="img" aria-label="Logo G.S.BTP">
      <title>G.S.BTP</title>
      <rect x="0" y="0" width="240" height="240" rx="20" fill="transparent" />

      {/* Buildings (amber) */}
      <g transform="translate(40,28)">
        <rect x="0" y="64" width="28" height="96" rx="2" fill={amber} />
        <rect x="36" y="36" width="28" height="124" rx="2" fill={amber} />
        <rect x="72" y="0" width="28" height="160" rx="2" fill={amber} />
        <rect x="108" y="28" width="20" height="132" rx="2" fill={amber} />
      </g>

      {/* House (green) */}
      <g transform="translate(28,120)">
        <path d="M20 24 L96 0 L172 24 L172 88 L20 88 Z" fill={green} />
        <rect x="92" y="44" width="20" height="20" fill="white" />
      </g>

      {/* Text */}
      <text x="120" y="206" textAnchor="middle" fontWeight={800} fontSize="28" fill={fillText}>G.S.BTP</text>
      <text x="120" y="230" textAnchor="middle" fontSize="12" fill={fillText}>L'expertise qui construit</text>
    </svg>
  )
}
