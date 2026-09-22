import React from 'react'

export interface GSBTPLogoProps {
  size?: number
  variant?: 'color' | 'monochrome'
  className?: string
  inverted?: boolean
}

export default function GSBTPLogo({
  size = 48,
  variant = 'color',
  className = '',
  inverted = false,
}: GSBTPLogoProps) {
  // Color configuration based on variant and context
  const primaryGold = variant === 'color' ? '#C98A3E' : inverted ? '#F3EFE6' : '#14201B'
  const deepGreen = variant === 'color' ? (inverted ? '#F3EFE6' : '#14201B') : inverted ? '#F3EFE6' : '#14201B'
  const circleStroke = variant === 'color' ? (inverted ? 'rgba(243, 239, 230, 0.2)' : 'rgba(20, 32, 27, 0.15)') : inverted ? 'rgba(243, 239, 230, 0.3)' : 'rgba(20, 32, 27, 0.3)'
  const accentLight = variant === 'color' ? '#8C5A24' : inverted ? '#FFFFFF' : '#000000'

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Logo G.S.BTP Architecture et Construction"
        className="flex-shrink-0 transition-transform duration-300 hover:scale-105"
      >
        <title>G.S.BTP</title>
        
        {/* Foundation & architectural precision circle */}
        <circle cx="60" cy="60" r="56" stroke={circleStroke} strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="60" cy="60" r="52" stroke={circleStroke} strokeWidth="0.75" />

        {/* Geometric skyline & technical beams */}
        <g transform="translate(18, 22)">
          {/* High-rise tower 1 */}
          <rect x="14" y="32" width="10" height="38" rx="1" fill={primaryGold} opacity="0.9" />
          
          {/* Main skyscraper pillar with horizontal architectural slits */}
          <rect x="28" y="16" width="12" height="54" rx="1.5" fill={primaryGold} />
          <line x1="31" y1="26" x2="37" y2="26" stroke="#14201B" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="31" y1="36" x2="37" y2="36" stroke="#14201B" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="31" y1="46" x2="37" y2="46" stroke="#14201B" strokeWidth="1.5" strokeLinecap="round" />

          {/* Contemporary House & Gable roofline intersecting the skyline */}
          <path
            d="M44 26 L66 10 L82 23 V70 H44 V26 Z"
            fill={deepGreen}
            stroke={primaryGold}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />

          {/* Roof overhang & architectural opening */}
          <polygon points="66,6 38,26 42,29 66,12 85,26 88,23" fill={primaryGold} />
          
          {/* Window aperture / Golden section ratio */}
          <rect x="54" y="32" width="18" height="18" rx="1" fill={primaryGold} opacity="0.85" />
          <line x1="63" y1="32" x2="63" y2="50" stroke={deepGreen} strokeWidth="1.2" />
          <line x1="54" y1="41" x2="72" y2="41" stroke={deepGreen} strokeWidth="1.2" />

          {/* Foundation baseline */}
          <line x1="8" y1="70" x2="86" y2="70" stroke={primaryGold} strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Compass / Surveying tick marks at cardinal points */}
        <line x1="60" y1="2" x2="60" y2="6" stroke={primaryGold} strokeWidth="2" />
        <line x1="60" y1="114" x2="60" y2="118" stroke={primaryGold} strokeWidth="2" />
        <line x1="2" y1="60" x2="6" y2="60" stroke={primaryGold} strokeWidth="2" />
        <line x1="114" y1="60" x2="118" y2="60" stroke={primaryGold} strokeWidth="2" />
      </svg>

      {/* Brand Logotype Typography */}
      <div className="flex flex-col leading-none">
        <span
          className="font-serif tracking-tight font-bold text-xl md:text-2xl transition-colors duration-300"
          style={{ color: deepGreen }}
        >
          G.S.<span style={{ color: primaryGold }}>BTP</span>
        </span>
        <span
          className="text-[0.625rem] tracking-[0.25em] uppercase font-sans font-medium mt-1 transition-colors duration-300 opacity-80"
          style={{ color: inverted ? '#F3EFE6' : '#14201B' }}
        >
          Côte d’Ivoire
        </span>
      </div>
    </div>
  )
}
