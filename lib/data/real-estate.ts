export interface RealEstateItem {
  id: string
  category: 'TERRAIN' | 'VILLA' | 'PROJET IMMOBILIER'
  title: string
  location: string
  specs: string
  description: string
  image: string
  alt: string
  featured?: boolean
}

export const realEstateItems: RealEstateItem[] = [
  {
    id: 'villa-elegance',
    category: 'VILLA',
    title: 'Villas Contemporaines — Programme L’Orée du Golf',
    location: 'Abidjan — Cocody Riviera',
    specs: '5 Pièces • 450 m² • Jardin & Piscine privée',
    description:
      'Architecture épurée mariant béton brut lasuré, bois exotique imputrescible et baies vitrées toute hauteur. Sécurité 24/7, domotique intégrée et prestations exclusives.',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80',
    alt: 'Villa de grand standing à Abidjan avec piscine et jardin paysager',
    featured: true,
  },
  {
    id: 'terrain-securise',
    category: 'TERRAIN',
    title: 'Parcelles Résidentielles Viabilisées avec ACD',
    location: 'Bingerville — Nouveau Quartier Résidentiel',
    specs: '500 à 1 200 m² • Titre Foncier & ACD Définitif',
    description:
      'Terrains plats hors zone inondable, raccordements eau et électricité réalisés, bornage contradictoire vérifié par géomètre expert.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80',
    alt: 'Parcelle de terrain viabilisée prête pour la construction à Abidjan',
    featured: false,
  },
  {
    id: 'projet-cle-en-main',
    category: 'PROJET IMMOBILIER',
    title: 'Lotissement Clés en Main & Habitat Collectif',
    location: 'Grand-Bassam — Axe Autoroutier',
    specs: 'De la recherche foncière à la remise des clés',
    description:
      'Montage d’opérations complètes pour investisseurs privés, coopératives ou familles : plans personnalisés, démarches administratives, gros œuvre et gestion.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80',
    alt: 'Projet immobilier de standing clés en main en cours d’édification',
    featured: false,
  },
]
