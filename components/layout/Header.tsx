'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import GSBTPLogo from '../brand/GSBTPLogo'
import Button from '../ui/Button'

const navLinks = [
  { href: '#expertises', label: 'Expertises' },
  { href: '#approche', label: 'Approche' },
  { href: '#immobilier', label: 'Immobilier' },
  { href: '#realisations', label: 'Réalisations' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMobileOpen(false) }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <>
      {/* Top info bar */}
      <aside className="hidden md:block bg-[#14201B] text-white/70 text-xs py-2 border-b border-white/10" aria-label="Informations institutionnelles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber" />
              Abidjan, Côte d&apos;Ivoire
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber" />
              Lun–Sam : 08h00–18h30
            </span>
            <a href="tel:+2250749096572" className="flex items-center gap-1.5 hover:text-amber transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-amber" />
              +225 07 49 09 65 72
            </a>
          </div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber/15 border border-amber/30 text-amber font-semibold text-[11px]">
            Garantie Décennale
          </span>
        </div>
      </aside>

      {/* Main Header — guaranteed solid deep-green background so text is always 100% visible */}
      <header
        className={`sticky top-0 z-50 bg-[#14201B] transition-all duration-200 ${
          scrolled
            ? 'shadow-xl border-b border-amber/30 backdrop-blur-md bg-opacity-95'
            : 'border-b border-white/10'
        }`}
        style={{ backgroundColor: '#14201B' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[68px] flex items-center justify-between">
          <Link href="/" aria-label="Accueil G.S.BTP">
            <GSBTPLogo size={40} variant="color" inverted />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navigation principale">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-sm font-semibold text-white/90 hover:text-amber transition-colors focus:outline-none focus:ring-2 focus:ring-amber rounded px-1 py-1"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button href="#contact" variant="primary" size="sm">
              Demander un devis
            </Button>
          </div>

          {/* Mobile controls */}
          <div className="lg:hidden flex items-center gap-3">
            <Button href="#contact" variant="primary" size="sm" className="!px-3 !py-2 !text-xs">
              Devis
            </Button>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={mobileOpen}
              className="inline-flex items-center justify-center w-10 h-10 rounded-md text-white/80 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-amber"
            >
              {mobileOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#14201B] border-t border-white/10 px-4 pt-2 pb-6">
            <nav className="flex flex-col gap-1">
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-3 rounded-lg text-sm font-semibold text-white/90 hover:text-amber hover:bg-white/5 transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
            <div className="pt-4 border-t border-white/10 mt-2">
              <Button href="#contact" variant="primary" size="md" className="w-full" onClick={() => setMobileOpen(false)}>
                Demander un devis
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
