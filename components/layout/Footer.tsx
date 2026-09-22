import React from 'react'
import GSBTPLogo from '../brand/GSBTPLogo'

const navGroups = [
  {
    title: 'Services',
    links: [
      { label: 'Bâtiment & Génie civil', href: '#expertises' },
      { label: 'Forage hydraulique', href: '#expertises' },
      { label: 'Aménagement & VRD', href: '#expertises' },
      { label: 'Promotion immobilière', href: '#immobilier' },
    ],
  },
  {
    title: 'Entreprise',
    links: [
      { label: 'Notre approche', href: '#approche' },
      { label: 'Pourquoi nous', href: '#pourquoi-nous' },
      { label: 'Réalisations', href: '#realisations' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Contact rapide',
    links: [
      { label: '+225 07 49 09 65 72', href: 'tel:+2250749096572' },
      { label: 'contact@gsbtp-ci.com', href: 'mailto:contact@gsbtp-ci.com' },
      { label: "Abidjan, Côte d'Ivoire", href: '#contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-deep-green text-white border-t border-amber/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-16 border-b border-white/10">

          {/* Brand column */}
          <div className="lg:col-span-4">
            <GSBTPLogo size={48} variant="color" inverted />
            <p className="text-sm text-white/65 leading-relaxed mt-4 mb-6 max-w-xs">
              Entreprise générale de construction, génie civil, forage hydraulique et promotion immobilière basée à Abidjan, Côte d&apos;Ivoire.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Garantie Décennale', 'Entreprise Générale', 'Certifiée CI'].map(tag => (
                <span key={tag} className="px-2.5 py-1 rounded-full border border-amber/30 bg-amber/10 text-amber text-[10px] font-bold">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Nav groups */}
          {navGroups.map(group => (
            <div key={group.title} className="lg:col-span-2">
              <h3 className="text-xs font-bold uppercase tracking-widest text-amber mb-4">{group.title}</h3>
              <ul className="space-y-2.5">
                {group.links.map(link => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-white/65 hover:text-amber transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Availability CTA */}
          <div className="lg:col-span-2 flex flex-col items-start lg:items-end">
            <div className="bg-amber/10 border border-amber/30 rounded-xl p-4 text-center w-full lg:max-w-[160px]">
              <div className="w-8 h-8 rounded-full bg-amber/20 flex items-center justify-center mx-auto mb-2">
                <span className="w-2 h-2 rounded-full bg-amber block animate-pulse" />
              </div>
              <p className="text-xs font-bold text-amber mb-0.5">Disponible</p>
              <p className="text-[10px] text-white/60">Lun–Sam 08h–18h30</p>
              <a href="#contact" className="mt-3 inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-amber text-white text-[10px] font-bold hover:bg-amber-dark transition-colors">
                Devis gratuit &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/40">
          <p>© {new Date().getFullYear()} G.S.BTP – Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-amber transition-colors">Mentions légales</a>
            <span>·</span>
            <a href="#" className="hover:text-amber transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
