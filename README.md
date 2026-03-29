# Camille Duval — Architecte d'intérieur

Site vitrine pour Camille Duval, architecte d'intérieur à Lyon. Design sur mesure, projets résidentiels et commerciaux, blog journal, formulaire de contact multi-étapes.

## Installation

```bash
git clone <repo-url>
cd camille-duval-architecte
npm install
cp .env.example .env
npx prisma db push
npx prisma db seed
npm run dev
```

Le site est disponible sur [http://localhost:3000](http://localhost:3000).

## Configuration client

Toute la configuration (nom, contact, réseaux sociaux, zones d'intervention, SEO) se trouve dans `src/config/site.ts`.

## Variables d'environnement

| Variable | Description | Obligatoire |
|---|---|---|
| `DATABASE_URL` | URL de connexion Prisma (SQLite par défaut) | Oui |
| `RESEND_API_KEY` | Clé API Resend pour l'envoi d'emails | Non |
| `STRIPE_SECRET_KEY` | Clé secrète Stripe | Non |
| `STRIPE_WEBHOOK_SECRET` | Secret webhook Stripe | Non |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Clé publique Stripe | Non |
| `NEXT_PUBLIC_SITE_URL` | URL publique du site | Oui |
| `API_ADMIN_SECRET` | Secret pour protéger les routes API admin | Oui |

## Commandes

| Commande | Description |
|---|---|
| `npm run dev` | Lancer le serveur de développement |
| `npm run build` | Build de production |
| `npm start` | Lancer le serveur de production |
| `npm run lint` | Linter le code |
| `npx prisma studio` | Interface Prisma pour la base de données |

## Stack technique

- **Framework** : Next.js 14 (App Router)
- **Langage** : TypeScript
- **Styles** : Tailwind CSS 3.4
- **Animations** : Framer Motion
- **Formulaires** : React Hook Form + Zod
- **Base de données** : Prisma + SQLite
- **Blog** : MDX (next-mdx-remote)
- **Emails** : Resend (à configurer)
- **Paiements** : Stripe (à configurer)
- **SEO** : next-sitemap, JSON-LD

## Déploiement Vercel

1. Connecter le repo GitHub à [vercel.com](https://vercel.com)
2. Configurer les variables d'environnement dans les settings du projet
3. Le build command par défaut (`npm run build`) fonctionne directement
4. Le framework preset "Next.js" est automatiquement détecté
