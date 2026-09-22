import React from 'react'
import Image from 'next/image'

export default function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 bg-deep-green text-white overflow-hidden border-b border-amber/20">
      {/* Background image — muted, dark overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
          alt="Chantier de gros œuvre par G.S.BTP"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-green via-deep-green/90 to-deep-green/75" aria-hidden="true" />
      </div>

      {/* Subtle ambient glow */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-amber/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber/15 border border-amber/30 text-amber font-bold text-xs tracking-wider uppercase mb-5">
            Bureau technique G.S.BTP
          </span>

          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-white mb-5 leading-tight">
            Votre projet commence par{' '}
            <span className="italic font-normal text-amber">une conversation.</span>
          </h2>

          <p className="text-base sm:text-lg text-white/75 leading-relaxed mb-10 max-w-2xl">
            Que vous ayez des plans d'architecte, un terrain ou une simple vision — nos ingénieurs chiffrent et planifient votre ouvrage. Réponse sous 24h garantie.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg bg-amber hover:bg-amber-dark text-white font-bold text-sm transition-all duration-150 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              Parler de mon projet →
            </a>
            <a
              href="tel:+2250749096572"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg border-2 border-white/30 text-white hover:border-amber hover:text-amber font-bold text-sm transition-colors"
            >
              +225 07 49 09 65 72
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
