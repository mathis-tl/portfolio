# Portfolio Mathis Telle

Site portfolio statique d'ingénieur informatique, en cours de refonte à partir du thème Astro [Zaggonaut](https://zaggonaut.dev) (MIT).

## Prérequis

- Node.js 22 (voir `.nvmrc`)
- [pnpm](https://pnpm.io/) 10

## Commandes

```bash
pnpm install
pnpm dev          # développement local
pnpm build        # build de production dans dist/
pnpm preview      # prévisualisation du build
pnpm lint         # Biome (vérification)
pnpm lint:fix     # Biome (corrections automatiques)
pnpm format       # Biome (formatage)
pnpm check        # astro check
pnpm ci           # Biome CI
```

## Structure

- `src/pages/` : routes Astro
- `src/components/` : composants
- `src/layouts/` : gabarits de page
- `src/styles/` : styles globaux (Tailwind 4)
- `content/` : contenu (projets, configuration TOML)
- `public/` : fichiers statiques
- `AGENTS.md` : règles du projet pour les agents Cursor

## Crédits

Basé sur le thème [Zaggonaut](https://github.com/RATIU5/zaggonaut) de RATIU5 (MIT).
