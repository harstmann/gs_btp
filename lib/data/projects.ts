export interface Project {
  id: string
  title: string
  category: string
  location: string
  year: string
  surface?: string
  description: string
  image: string
  alt: string
  aspectRatio?: 'landscape' | 'portrait' | 'wide'
}

export const projects: Project[] = [
  {
    id: 'villa-laguna',
    title: 'Résidence L’Écrin Lagunaire',
    category: 'Construction • Villa d’Architecte',
    location: 'Abidjan — Riviera Golf',
    year: '2024',
    surface: '680 m²',
    description: 'Conception et réalisation d’une villa bioclimatique contemporaine avec piscine à débordement et finitions en pierres locales.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
    alt: 'Villa contemporaine d’architecte avec piscine à Abidjan Riviera',
    aspectRatio: 'landscape',
  },
  {
    id: 'siege-tertiaire',
    title: 'Complexe Tertiaire & Bureaux Horizon',
    category: 'Bâtiment & Génie Civil',
    location: 'Abidjan — Plateau',
    year: '2023',
    surface: '2 400 m²',
    description: 'Immeuble de bureaux R+4 avec structure poteaux-poutres béton armé, double peau vitrée et gestion thermique optimisée.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    alt: 'Immeuble de bureaux contemporain en béton et verre',
    aspectRatio: 'portrait',
  },
  {
    id: 'domaine-btcs',
    title: 'Pavillon Éco-responsable en Terre Stabilisée',
    category: 'Écoconstruction BTCS',
    location: 'Grand-Bassam',
    year: '2024',
    surface: '320 m²',
    description: 'Démonstrateur architectural haut de gamme alliant modernité épurée et blocs BTCS comprimés sur site.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    alt: 'Pavillon moderne en briques de terre comprimée stabilisée',
    aspectRatio: 'portrait',
  },
  {
    id: 'station-hydraulique',
    title: 'Station Hydraulique & Réseau Adduction',
    category: 'Hydraulique & VRD',
    location: 'Songon & Périphérie',
    year: '2023',
    surface: 'Forage 120m',
    description: 'Forage grand diamètre avec château d’eau métallique de 50 m³ alimenté par générateur solaire autonome.',
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1400&q=80',
    alt: 'Chantier d’ingénierie hydraulique et réseau de distribution',
    aspectRatio: 'landscape',
  },
  {
    id: 'lotissement-lagune',
    title: 'Aménagement Foncier & Voirie Les Palétuviers',
    category: 'Travaux Publics & Foncier',
    location: 'Bingerville',
    year: '2024',
    surface: '4,5 Hectares',
    description: 'Viabilisation complète, ouverture de voies bitumées, canalisations de drainage des eaux pluviales et bornage certifié.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=80',
    alt: 'Vue panoramique d’un chantier de terrassement et d’infrastructure à Abidjan',
    aspectRatio: 'wide',
  },
]
