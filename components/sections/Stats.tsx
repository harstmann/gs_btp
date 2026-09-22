import React from 'react'

const metrics = [
  { value: '10+', unit: 'ans', label: "Expérience chantier", desc: "Maîtrise des normes de construction ivoiriennes" },
  { value: '50+', unit: '', label: "Projets supervisés", desc: "Villas, ouvrages d'art, forages, voiries" },
  { value: '06', unit: '', label: "Pôles d'expertise", desc: "De la fondation aux clés en main" },
  { value: '100%', unit: '', label: "Engagement qualité", desc: "Délais respectés et transparence totale" },
]

export default function Stats() {
  return (
    <section aria-label="Indicateurs clés de G.S.BTP" className="bg-white border-b border-surface-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-surface-200">
          {metrics.map((m, i) => (
            <div key={m.label} className={`px-6 py-6 ${i % 2 === 1 ? 'border-l border-surface-200 lg:border-l-0' : ''}`}>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-deep-green tracking-tight">
                  {m.value}
                </span>
                {m.unit && <span className="text-base font-semibold text-amber">{m.unit}</span>}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber mb-1">{m.label}</div>
              <p className="text-xs text-surface-500 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
