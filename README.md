# G.S.BTP — Site Vitrine

Site vitrine Next.js (App Router) en TypeScript pour l'entreprise G.S.BTP (Abidjan, Côte d'Ivoire).

Stack
- Next.js 14+ (App Router)
- TypeScript strict
- Tailwind CSS
- Zod pour validation

Installation

```bash
npm install
npm run dev
```

Build

```bash
npm run build
```

Déploiement
- Prêt pour Vercel — pousser la branche principale; config par défaut Next.js.
- Optionnel: définir `WEBHOOK_URL` dans les variables d'environnement pour recevoir les formulaires de contact.

Remarques
- Mettre à jour `app/sitemap.ts` et `app/robots.txt.ts` pour remplacer `https://example.com` par votre domaine avant le déploiement.
- Les polices : `Fraunces` (titres) est chargé via `next/font/google`. Le texte courant utilise `Inter` comme fallback; remplacez par `Schibsted Grotesk` local si disponible.
- Les statistiques dans la section `Stats` sont des placeholders (`XX`) — remplacez-les par de vraies valeurs via `components/sections/Stats.tsx`.
- Images : nous utilisons `images.unsplash.com`. Vous pouvez remplacer les URLs dans `lib/data/*` par vos images et mettre à jour `next.config.js` si vous hébergez ailleurs.
