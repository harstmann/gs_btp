import React from 'react'
import Image from 'next/image'

const pillars = [
  {
    number: '01',
    title: 'Engagement & Rigueur contractuelle',
    desc: 'Chaque jalon est adossé à un planning strict. Grâce à nos approvisionnements sécurisés, nous éliminons les dérives de coûts et les interruptions inopinées.',
    color: 'border-l-amber',
    bg: 'bg-amber/5',
    icon: '📋',
  },
  {
    number: '02',
    title: 'Expertise locale & géotechnique',
    desc: "Des sols lagunaires d'Abidjan aux terres fermes de l'intérieur, nous adaptons calculs de portance, étanchéité tropicalisée et drainage pour des constructions pérennes.",
    color: 'border-l-deep-green',
    bg: 'bg-surface-50',
    icon: '🏗️',
  },
  {
    number: '03',
    title: 'Approche intégrée clés en main',
    desc: "Gros œuvre, menuiserie, voirie, adduction d'eau : aucune dilution de responsabilité. Un chef de projet G.S.BTP pilote l'ensemble et vous transmet un reporting clair.",
    color: 'border-l-amber',
    bg: 'bg-amber/5',
    icon: '🔑',
  },
]

export default function WhyUs() {
  return (
    <section id="pourquoi-nous" className="py-20 bg-surface-50 border-b border-surface-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left: Pillars */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber/10 border border-amber/25 text-amber font-bold text-xs tracking-wider uppercase mb-4">
              Pourquoi nous choisir
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-deep-green mb-4">
              Bâtir avec certitude.{' '}
              <span className="italic font-normal text-amber">L&apos;exigence à chaque étape.</span>
            </h2>
            <p className="text-sm sm:text-base text-surface-500 leading-relaxed mb-10">
              Dans un secteur où l&apos;approximation coûte cher, G.S.BTP s&apos;impose par sa rigueur d&apos;ingénierie et sa transparence totale vis-à-vis des maîtres d&apos;ouvrage.
            </p>

            <div className="space-y-4">
              {pillars.map((p) => (
                <div
                  key={p.number}
                  className={`flex items-start gap-5 p-5 rounded-xl border border-surface-200 border-l-4 ${p.color} ${p.bg} hover:shadow-card-subtle transition-shadow duration-200`}
                >
                  <div className="w-10 h-10 rounded-lg bg-white border border-surface-200 flex items-center justify-center shrink-0 shadow-card-subtle text-lg">
                    {p.icon}
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-xs font-bold text-amber">{p.number}</span>
                      <h3 className="font-bold text-sm text-deep-green">{p.title}</h3>
                    </div>
                    <p className="text-xs text-surface-500 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Photo */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden border border-surface-200 shadow-card-elevated group">
              <div className="relative aspect-[3/4]">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
                  alt="Ingénieur G.S.BTP supervisant un chantier de construction"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-green/85 via-transparent to-transparent" aria-hidden="true" />
                {/* Quote overlay */}
                <div className="absolute bottom-5 left-5 right-5 p-4 bg-deep-green/90 rounded-lg border-l-2 border-amber">
                  <span className="text-[10px] uppercase tracking-widest text-amber font-bold block mb-1">Philosophie</span>
                  <p className="font-serif text-sm text-white italic leading-snug">
                    « La solidité d&apos;un édifice se mesure à la rigueur de ses fondations. »
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
