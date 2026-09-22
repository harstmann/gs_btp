export interface Expertise {
  id: string
  number: string
  title: string
  subtitle: string
  description: string
  details: string[]
  image: string
  alt: string
  featured?: boolean
}

export const expertises: Expertise[] = [
  {
    id: 'batiment',
    number: '01',
    title: 'Bâtiment & Construction',
    subtitle: 'Ouvrages résidentiels, tertiaires et industriels',
    description:
      'De la conception des plans d’ingénierie au gros œuvre et finitions de haut standing. Nous bâtissons des villas d’architecte, immeubles résidentiels et sièges d’entreprises avec une exigence absolue de solidité structurelle et de respect des délais.',
    details: ['Gros œuvre & maçonnerie armée', 'Charpente & étanchéité haute durabilité', 'Finitions d’architecte & second œuvre'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
    alt: 'Villa contemporaine d’architecte construite par G.S.BTP à Abidjan',
    featured: true,
  },
  {
    id: 'btcs',
    number: '02',
    title: 'Construction écologique BTCS',
    subtitle: 'Blocs de terre comprimée et stabilisée',
    description:
      'Pionniers de l’écoconstruction en Côte d’Ivoire : des blocs à inertie thermique incomparable, réduisant drastiquement les besoins en climatisation tout en valorisant les matériaux nobles de notre terroir.',
    details: ['Isolation thermique naturelle', 'Empreinte carbone divisée par 3', 'Esthétique minérale contemporaine'],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Bâtiment contemporain en briques de terre comprimée stabilisée BTCS',
  },
  {
    id: 'rehabilitation',
    number: '03',
    title: 'Réhabilitation & Rénovation',
    subtitle: 'Rénovation lourde, extension & mise aux normes',
    description:
      'Reprise en sous-œuvre, modernisation énergétique et réhabilitation esthétique de bâtiments anciens. Nous redonnons une valeur patrimoniale et une sécurité pérenne à vos actifs existants.',
    details: ['Diagnostic structurel complet', 'Renforcement parasismique & fondations', 'Transformation architecturale intérieure'],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    alt: 'Chantier de réhabilitation et renforcement de structure par G.S.BTP',
  },
  {
    id: 'genie-civil',
    number: '04',
    title: 'Génie Civil & Travaux Publics',
    subtitle: 'Voiries, terrassement & infrastructures urbaines',
    description:
      'Aménagements lourds, voiries et réseaux divers (VRD), plateformes industrielles, caniveaux et ponts de franchissement conçus pour résister aux contraintes hydrogéologiques locales.',
    details: ['Terrassement de masse & nivellement', 'Réseaux VRD & assainissement', 'Ouvrages d’art et dallages industriels'],
    image: 'https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1200&q=80',
    alt: 'Travaux publics et génie civil moderne sur site en Côte d’Ivoire',
  },
  {
    id: 'hydraulique',
    number: '05',
    title: 'Hydraulique & Forage',
    subtitle: 'Forages d’eau, châteaux d’eau & pompage solaire',
    description:
      'Garantir un accès souverain et ininterrompu à une eau potable de qualité supérieure grâce à des forages profonds certifiés, des stations de pompage solaires et des châteaux d’eau autonomes.',
    details: ['Prospection géophysique précise', 'Forages profonds jusqu’à 150m', 'Châteaux d’eau et filtration avancée'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    alt: 'Installation hydraulique technique et station de forage d’eau',
  },
  {
    id: 'immobilier',
    number: '06',
    title: 'Immobilier & Foncier Sécurisé',
    subtitle: 'Vente de parcelles approuvées & programmes sur mesure',
    description:
      'Sécurisation juridique rigoureuse (ACD, titres fonciers irréprochables), promotion de lotissements viabilisés et programmes de villas clés en main à Abidjan et sur le littoral lagunaire.',
    details: ['Foncier vérifié avec ACD garanti', 'Lotissements viabilisés eau & électricité', 'Gestion de programmes clés en main'],
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    alt: 'Domaine résidentiel et foncier d’exception à Abidjan',
  },
]
