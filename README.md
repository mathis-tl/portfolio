# Portfolio Mathis Telle

Site portfolio statique d'ingénieur informatique, en cours de refonte à partir du thème Astro [Zaggonaut](https://github.com/RATIU5/zaggonaut) (MIT).

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

## Mise en ligne

Le site Netlify existant est `portfolio-mathistelle` (https://portfolio-mathistelle.netlify.app). `baseUrl` dans `content/configuration.toml` pointe dessus.

`netlify.toml` est prêt : `pnpm build`, dossier `dist/`, Node 22, en-têtes de sécurité. Pas de formulaire, pas d'analytique.

## Contact

Le pied de page et le menu exposent l'e-mail `tellemathis@gmail.com` et le profil LinkedIn. Pas de formulaire. Le CV PDF n'est pas dans le dépôt : le fichier `~/Downloads/Mathis Telle.pdf` n'était pas disponible dans l'environnement de travail. Le numéro de téléphone ne figure pas dans les pages.

## Crédits

Basé sur le thème [Zaggonaut](https://github.com/RATIU5/zaggonaut) de RATIU5 (MIT).
