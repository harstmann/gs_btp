import React from 'react'

const steps = [
  {
    number: '01',
    title: 'Étude',
    phase: 'Phase préliminaire',
    desc: 'Analyses géotechniques, topographie, faisabilité et cadrage budgétaire rigoureux.',
    deliverable: 'Rapport géotechnique & devis estimatif',
  },
  {
    number: '02',
    title: 'Conception',
    phase: 'Architecture & calculs',
    desc: 'Plans architecturaux, notes de calculs béton armé, modélisations 3D et obtention du permis.',
    deliverable: "Dossier d'exécution & plans certifiés",
  },
  {
    number: '03',
    title: 'Construction',
    phase: 'Gros œuvre & second œuvre',
    desc: "Fondations, béton armé ou BTCS, plomberie intégrée et finitions d'architecte.",
    deliverable: 'PV de chantier hebdomadaire',
  },
  {
    number: '04',
    title: 'Hydraulique',
    phase: 'Autonomie en eau',
    desc: "Forage sur site, analyse physico-chimique, pompage solaire et château d'eau privatif.",
    deliverable: 'Accès continu à une eau testée et certifiée',
  },
  {
    number: '05',
    title: 'Livraison',
    phase: 'Clés en main',
    desc: 'Contrôles de conformité, levée des réserves, nettoyage fin de chantier et remise officielle.',
    deliverable: 'Attestation de garantie décennale',
  },
]

export default function ApproachSection() {
  return (
    <section id="approche" className="py-20 bg-white border-b border-surface-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber/10 border border-amber/25 text-amber font-bold text-xs tracking-wider uppercase mb-3">
            Notre approche intégrée
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-deep-green mb-3">
            Un seul partenaire.{' '}
            <span className="italic font-normal text-amber">De la fondation à l&apos;eau courante.</span>
          </h2>
          <p className="text-sm sm:text-base text-surface-500 leading-relaxed">
            Notre modèle d&apos;entreprise générale coordonne chaque corps d&apos;état pour garantir des délais respectés et une qualité sans compromis.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group bg-surface-50 rounded-xl border border-surface-200 p-5 hover:border-amber/40 hover:shadow-card-elevated transition-all duration-200"
            >
              {/* Step indicator */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-full bg-deep-green flex items-center justify-center shadow-sm group-hover:bg-amber transition-colors duration-200">
                  <span className="font-serif font-bold text-sm text-white group-hover:text-deep-green">{step.number}</span>
                </div>
                {index < steps.length - 1 && (
                  <span className="text-surface-300 text-lg hidden lg:block" aria-hidden="true">&rarr;</span>
                )}
              </div>

              <div className="text-xs font-bold uppercase tracking-wider text-amber mb-1">{step.phase}</div>
              <h3 className="font-serif font-bold text-lg text-deep-green mb-2">{step.title}</h3>
              <p className="text-xs text-surface-500 leading-relaxed mb-4">{step.desc}</p>

              <div className="pt-3 border-t border-surface-200">
                <span className="text-[10px] uppercase tracking-wider text-surface-400 font-bold block mb-0.5">Livrable :</span>
                <span className="text-xs text-deep-green font-medium">{step.deliverable}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-10 rounded-xl bg-deep-green text-white p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h4 className="font-serif font-bold text-xl text-white mb-1">Vous avez déjà des plans ou un terrain ?</h4>
            <p className="text-sm text-white/70">Nous auditons vos documents et établissons une estimation sans engagement.</p>
          </div>
          <a href="#contact" className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber text-white font-bold text-sm hover:bg-amber-dark transition-colors">
            Demander un audit &rarr;
          </a>
        </div>
      </div>
    </section>
  )
}
