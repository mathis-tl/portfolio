# AGENTS.md : portfolio de Mathis Telle

## Projet
Portfolio statique de Mathis Telle, ingénieur informatique (Université Paris-Saclay, ISTY).
Positionnement : "Ingénieur informatique orienté data". Recherche d'un premier CDI en data engineering (Paris, Île-de-France).
Public : recruteurs tech et leads data qui lisent le site en 30 secondes.

## Stack
- Astro 7 (sortie statique), Tailwind CSS 4, TypeScript strict, pnpm, Biome.
- Base : thème Zaggonaut (MIT, RATIU5/zaggonaut, commit ac6e8e47), fortement adapté.
- Hébergement : Netlify. Aucun backend, aucune base de données, aucune fonction serverless, aucun formulaire.

## Règles non négociables
1. Aucun tracking, aucun script tiers, aucune ressource chargée depuis un CDN. Polices auto-hébergées via Fontsource.
2. JavaScript client minimal : uniquement le thème clair/sombre et le menu mobile. Pas de framework UI (React, Vue, Svelte).
3. Textes en français. Pas d'emoji. Pas de tiret cadratin. Écrire "Université Paris-Saclay (ISTY)". Ne jamais écrire "étudiant". Ne jamais publier de numéro de téléphone.
4. Accessibilité WCAG 2.2 AA : contraste 4.5:1 minimum, focus visible, tout est utilisable au clavier, HTML sémantique, lang="fr", prefers-reduced-motion respecté, pas de texte justifié.
5. Press Start 2P réservée aux titres et badges courts, jamais aux paragraphes.
6. Couleurs uniquement via les tokens de src/styles/global.css (--px-green, utilisé pour la sélection de texte, et les neutres zag ; pas de couleur d'accent ailleurs). Aucune couleur en dur dans les composants.
7. Simplicité : pas d'abstraction pour un usage unique, pas de dépendance si quelques lignes suffisent. Toute nouvelle dépendance est justifiée dans la PR.
8. Images locales dans src/assets, rendues avec astro:assets, alt en français obligatoire.
9. Ne jamais inventer de contenu. Tout chiffre doit venir d'une source citée dans la PR (CV, README d'un dépôt mathis-tl). Si une info manque, le signaler dans la PR, jamais dans le site.

## Commandes
- pnpm install
- pnpm dev / pnpm build / pnpm preview
- pnpm check (astro check), pnpm lint (biome), pnpm format

## Workflow
Une brique = une branche brique/NN-nom = une PR vers main. Commits conventionnels (feat:, fix:, refactor:, chore:, docs:, content:).
Avant de déclarer une tâche finie : pnpm lint && pnpm check && pnpm build, puis vérification visuelle à 375 px et 1280 px en clair et en sombre.
