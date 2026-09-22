'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import GSBTPLogo from '../brand/GSBTPLogo'
import Button from '../ui/Button'

interface NavLink {
  href: string
  label: string
}

const navLinks: NavLink[] = [
  { href: '#expertises', label: 'Expertises' },
  { href: '#approche', label: 'Notre Approche' },
  { href: '#pourquoi-nous', label: 'Pourquoi Nous' },
  { href: '#immobilier', label: 'Immobilier' },
  { href: '#realisations', label: 'Réalisations' },
  { href: '#contact', label: 'Contact' },
]

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="lg:hidden">
      {/* Trigger Button */}
      <button
        type="button"
        aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu de navigation'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 p-2.5 rounded-sm text-sand hover:text-amber transition-colors focus:outline-none focus:ring-2 focus:ring-amber"
      >
        <div className="w-6 h-5 flex flex-col justify-between items-end">
          <span
            className={`h-0.5 bg-current transition-all duration-300 ${
              isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'
            }`}
          />
          <span
            className={`h-0.5 bg-current transition-all duration-300 ${
              isOpen ? 'opacity-0' : 'w-4'
            }`}
          />
          <span
            className={`h-0.5 bg-current transition-all duration-300 ${
              isOpen ? 'w-6 -rotate-45 -translate-y-2.5' : 'w-5'
            }`}
          />
        </div>
      </button>

      {/* Backdrop & Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-deep-green/95 backdrop-blur-xl transition-all duration-500 flex flex-col justify-between p-6 sm:p-10 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        {/* Top bar inside drawer */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <Link href="#" onClick={() => setIsOpen(false)}>
            <GSBTPLogo size={42} variant="color" inverted={true} />
          </Link>
        </div>

        {/* Navigation list */}
        <nav className="my-auto py-8">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link, index) => (
              <li key={link.href} className="overflow-hidden">
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-baseline gap-4 text-2xl sm:text-3xl font-serif text-sand hover:text-amber transition-colors"
                >
                  <span className="text-xs font-sans font-semibold tracking-widest text-amber/80">
                    0{index + 1}
                  </span>
                  <span>{link.label}</span>
                  <span className="text-amber opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom actions & contact in mobile menu */}
        <div className="border-t border-white/10 pt-6 space-y-4">
          <div className="flex flex-col gap-1 text-xs text-sand/70">
            <span className="text-amber font-semibold tracking-wider uppercase">Contact Direct</span>
            <a href="tel:+2250749096572" className="text-sm text-sand hover:text-amber transition-colors">
              +225 07 49 09 65 72
            </a>
            <span>Abidjan, Côte d’Ivoire</span>
          </div>

          <Button
            href="#contact"
            variant="primary"
            size="md"
            className="w-full"
            showArrow
            onClick={() => setIsOpen(false)}
          >
            Demander un devis
          </Button>
        </div>
      </div>
    </div>
  )
}
