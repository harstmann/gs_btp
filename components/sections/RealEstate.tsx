'use client'

import React from 'react'
import Image from 'next/image'
import { realEstateItems } from '../../lib/data/real-estate'
import Button from '../ui/Button'

export default function RealEstate() {
  const villa = realEstateItems.find(i => i.category === 'VILLA') ?? realEstateItems[0]
  const others = realEstateItems.filter(i => i.category !== 'VILLA')

  return (
    <section id="immobilier" className="py-20 bg-white border-b border-surface-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber/10 border border-amber/25 text-amber font-bold text-xs tracking-wider uppercase mb-3">
            Foncier & Promotion Immobilière
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-deep-green mb-3">
            Des espaces à construire.{' '}
            <span className="italic font-normal text-amber">Des patrimoines à transmettre.</span>
          </h2>
          <p className="text-sm sm:text-base text-surface-500 leading-relaxed">
            Parcelles foncières sécurisées avec ACD irréprochable, villas d'exception et projets clés en main à Abidjan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Villa Feature */}
          <article className="lg:col-span-7 bg-white rounded-xl border border-surface-200 shadow-card-subtle overflow-hidden hover:shadow-card-elevated transition-all duration-300 group flex flex-col">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={villa.image}
                alt={villa.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-green/70 to-transparent" aria-hidden="true" />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-deep-green/90 border border-amber/30 text-amber font-bold text-xs">
                {villa.category}
              </span>
              <span className="absolute bottom-4 left-4 text-xs font-medium text-white/80 bg-black/40 px-2 py-0.5 rounded">
                📍 {villa.location}
              </span>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="text-xs font-bold uppercase tracking-wider text-amber mb-1">{villa.specs}</div>
              <h3 className="font-serif font-bold text-2xl text-deep-green mb-2">{villa.title}</h3>
              <p className="text-sm text-surface-600 leading-relaxed mb-6 flex-grow">{villa.description}</p>
              <div className="flex items-center justify-between pt-4 border-t border-surface-200">
                <Button href="#contact" variant="primary" size="sm">Découvrir cette villa</Button>
                <span className="text-xs text-surface-400 font-semibold uppercase tracking-wider">Disponible</span>
              </div>
            </div>
          </article>

          {/* Secondary cards */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {others.map((item) => (
              <article
                key={item.id}
                className="flex bg-white rounded-xl border border-surface-200 shadow-card-subtle overflow-hidden hover:shadow-card-elevated hover:border-amber/30 transition-all duration-200 group"
              >
                <div className="relative w-36 sm:w-44 shrink-0 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="180px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-deep-green/90 border border-amber/30 text-amber font-bold text-[10px]">
                    {item.category}
                  </span>
                </div>
                <div className="flex flex-col justify-between p-5">
                  <div>
                    <div className="text-xs font-bold text-amber uppercase tracking-wider mb-1">{item.specs}</div>
                    <h4 className="font-serif font-bold text-base text-deep-green mb-1 leading-snug">{item.title}</h4>
                    <p className="text-[10px] text-surface-500 mb-2">📍 {item.location}</p>
                    <p className="text-xs text-surface-600 leading-relaxed line-clamp-2">{item.description}</p>
                  </div>
                  <a href="#contact" className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-amber hover:text-amber-dark transition-colors">
                    Consulter <span>→</span>
                  </a>
                </div>
              </article>
            ))}

            {/* CTA tile */}
            <div className="rounded-xl bg-deep-green text-white p-6 border border-amber/30">
              <h4 className="font-serif font-bold text-lg text-white mb-2">
                Vous cherchez un terrain ou une villa à Abidjan ?
              </h4>
              <p className="text-xs text-white/70 mb-4">Nos juristes fonciers sécurisent chaque transaction pour des titres 100% inattaquables.</p>
              <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-amber text-white font-bold text-xs hover:bg-amber-dark transition-colors">
                Parler à un conseiller <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
