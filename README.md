# Nono Lift Bruxelles — Site vitrine

Site one-page professionnel pour une société de **location de lift à Bruxelles**.

## Stack

- Next.js 14 (App Router)
- Tailwind CSS 3
- TypeScript
- SEO : meta, Open Graph, Schema.org (LocalBusiness + FAQ), sitemap, robots

## Démarrage local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Build production

```bash
npm run build
npm start
```

## Déploiement Vercel

1. Pousser le dépôt sur GitHub
2. Importer le projet sur [vercel.com](https://vercel.com)
3. Framework détecté automatiquement (Next.js)
4. Définir le domaine dans `src/lib/site.ts` (`SITE.url`)

## Personnalisation

| Fichier | Contenu |
|---------|---------|
| `src/lib/site.ts` | Nom, téléphone, adresse, URL |
| `src/lib/content.ts` | Services, tarifs, FAQ, texte SEO |
| `src/lib/schema.ts` | Données structurées JSON-LD |

## SEO

Mots-clés ciblés : lift bruxelles, location lift bruxelles, monte meuble bruxelles, lift déménagement bruxelles.

Contenu long-form 1500+ mots dans la section Guide expert.

## Image Open Graph

Remplacer `public/og-image.jpg` par une image 1200×630 px (capture ou photo lift).
