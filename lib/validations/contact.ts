import { z } from 'zod'

export const projectTypes = [
  'Bâtiment & Construction',
  'Construction écologique BTCS',
  'Réhabilitation & Rénovation',
  'Génie Civil & Travaux Publics',
  'Hydraulique & Forage',
  'Immobilier (Terrain & Villa)',
] as const

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Le nom doit comporter au moins 2 caractères.' })
    .max(80, { message: 'Nom trop long.' }),
  phone: z
    .string()
    .min(8, { message: 'Veuillez saisir un numéro de téléphone valide (+225...).' })
    .max(25, { message: 'Numéro invalide.' }),
  type: z.enum(projectTypes, {
    errorMap: () => ({ message: 'Veuillez sélectionner un pôle d’expertise valide.' }),
  }),
  message: z
    .string()
    .min(10, { message: 'Veuillez préciser votre demande en au moins 10 caractères.' })
    .max(2000, { message: 'Message trop long.' }),
})

export type ContactFormData = z.infer<typeof contactSchema>
