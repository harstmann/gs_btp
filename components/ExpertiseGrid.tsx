import React from 'react'

const items = [
  {title: "Bâtiment & construction", desc: "Villas, maisons résidentielles et professionnelles", large: true},
  {title: "Construction écologique BTCS", desc: "Blocs de terre comprimée stabilisée"},
  {title: "Réhabilitation & rénovation de bâtiments", desc: "Remise à neuf et mise aux normes"},
  {title: "Génie civil & travaux publics", desc: "Infrastructures et aménagements"},
  {title: "Hydraulique & forage", desc: "Forages d'eau, pompage solaire, châteaux d'eau"},
  {title: "Immobilier", desc: "Vente de terrains, maisons et projets immobiliers"}
]

export default function ExpertiseGrid(){
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {items.map((it, idx) => (
        <article key={idx} className={`${it.large ? 'md:col-span-2 md:row-span-2' : ''} bg-white p-6 rounded-lg shadow`}> 
          <h4 className="font-bold text-lg">{it.title}</h4>
          <p className="mt-2 text-sm">{it.desc}</p>
        </article>
      ))}
    </div>
  )
}
