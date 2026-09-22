'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { expertises, Expertise } from '../../lib/data/expertises'

export default function ExpertiseSection() {
  const [active, setActive] = useState<Expertise>(expertises[0])

  return (
    <section id="expertises" className="py-20 bg-surface-50 border-b border-surface-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber/10 border border-amber/25 text-amber font-bold text-xs tracking-wider uppercase mb-3">
            Domaines d'ingénierie & BTP
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-deep-green mb-3">
            Construire aujourd'hui.{' '}
            <span className="italic font-normal text-amber">Préparer demain.</span>
          </h2>
          <p className="text-sm sm:text-base text-surface-500 leading-relaxed">
            Une expertise intégrée pour accompagner chaque étape de votre projet, du premier coup de pioche à la livraison clés en main.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main focal card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl border border-surface-200 shadow-card-subtle overflow-hidden hover:shadow-card-elevated transition-all duration-300">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={active.image}
                  alt={active.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-green/80 via-deep-green/20 to-transparent" aria-hidden="true" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-deep-green/90 border border-amber/30 text-amber font-bold text-xs">
                    {active.number} — Pôle spécialisé
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <div className="text-xs font-bold uppercase tracking-wider text-amber mb-1">{active.subtitle}</div>
                <h3 className="font-serif font-bold text-2xl text-deep-green mb-3">{active.title}</h3>
                <p className="text-sm text-surface-600 leading-relaxed mb-6">{active.description}</p>
                <div className="grid grid-cols-3 gap-3 pt-5 border-t border-surface-200 mb-6">
                  {active.details.map((d, i) => (
                    <div key={i} className="flex items-start gap-1.5">
                      <div className="w-5 h-5 rounded-full bg-amber/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-amber font-bold text-[10px]">✓</span>
                      </div>
                      <span className="text-xs text-surface-600 leading-snug">{d}</span>
                    </div>
                  ))}
                </div>
                <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold text-amber hover:text-amber-dark transition-colors">
                  Lancer une étude <span>→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Vertical switcher */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            <div className="text-xs font-bold uppercase tracking-wider text-surface-400 pb-2 mb-1 border-b border-surface-200">
              Tous les pôles d'expertise
            </div>
            {expertises.map((item) => {
              const isActive = active.id === item.id
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(item)}
                  className={`group text-left w-full px-4 py-4 rounded-lg border transition-all duration-200 ${
                    isActive
                      ? 'bg-deep-green text-white border-deep-green shadow-card-subtle'
                      : 'bg-white text-deep-green border-surface-200 hover:border-amber/40 hover:shadow-card-subtle'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`font-serif font-bold text-base shrink-0 ${isActive ? 'text-amber' : 'text-amber'}`}>
                      {item.number}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className={`font-bold text-sm leading-snug ${isActive ? 'text-white' : 'text-deep-green'}`}>
                          {item.title}
                        </h4>
                        <span className={`text-xs shrink-0 transition-opacity ${isActive ? 'opacity-100 text-amber' : 'opacity-0 group-hover:opacity-100 text-amber'}`}>
                          →
                        </span>
                      </div>
                      <p className={`text-xs mt-0.5 leading-snug ${isActive ? 'text-white/70' : 'text-surface-500'}`}>
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
