'use client'

import React from 'react'
import Image from 'next/image'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-deep-green text-white pt-14 pb-20 lg:pt-20 lg:pb-28 overflow-hidden border-b border-amber/20"
    >
      {/* Subtle ambient glows — smooth, no grid */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-panel/60 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-amber/8 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left: Text column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber/15 border border-amber/30 text-amber font-semibold text-xs tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-amber" />
              Entreprise Générale de Construction &amp; Immobilier
            </span>

            {/* H1 */}
            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight">
              Nous construisons <br />
              ce qui doit{' '}
              <span className="italic text-amber">durer.</span>
            </h1>

            <p className="text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl">
              De la conception à la livraison, G.S.BTP réalise vos projets de bâtiment,
              de génie civil, de forage hydraulique et d&apos;immobilier à Abidjan et dans toute la Côte d&apos;Ivoire.
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="#contact" variant="primary" size="lg">
                Parler de votre projet
              </Button>
              <Button href="#realisations" variant="secondary" size="lg">
                Voir nos réalisations
              </Button>
            </div>

            {/* Stat indicators */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
              {[
                { value: '10+', label: "Années d'expérience" },
                { value: '50+', label: "Projets supervisés" },
                { value: '06', label: "Pôles d'expertise" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber/15 border border-amber/30 flex items-center justify-center shrink-0">
                    <span className="text-amber font-serif font-bold text-sm">{stat.value}</span>
                  </div>
                  <p className="text-xs text-white/70 leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-xl overflow-hidden bg-panel border border-amber/30 shadow-2xl">
              {/* Main image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  alt="Villa contemporaine réalisée par G.S.BTP à Abidjan"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-green/80 via-transparent to-transparent" aria-hidden="true" />

                {/* Active badge */}
                <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Projets en cours
                </span>

                {/* Caption */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-amber block mb-0.5">
                    Réalisation Vedette
                  </span>
                  <p className="font-serif text-lg text-white font-semibold leading-snug">
                    Villa Résidentielle Contemporaine
                  </p>
                  <p className="text-xs text-white/65 mt-0.5">Riviera Golf • Abidjan</p>
                </div>
              </div>

              {/* Info strip */}
              <div className="px-5 py-4 flex items-center justify-between bg-panel border-t border-white/10">
                <span className="text-xs text-white/60 font-medium">Abidjan, Côte d&apos;Ivoire</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber">
                  06 Pôles d&apos;ingénierie &rarr;
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
