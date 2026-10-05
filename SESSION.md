# Suivi des sessions (refonte portfolio)

Mettre à jour ce fichier en fin de chaque session agent pour limiter la taille des contextes.

## Dépôt

`mathis-tl/portfolio` (public), seul dépôt de travail. Base : import Zaggonaut `ac6e8e47`.

## Briques

| Brique | Statut | Branche | PR | Notes |
|--------|--------|---------|-----|-------|
| 00 Bootstrap | Fusionnée | `brique/00-bootstrap` | #1 | |
| 01 Fondations | PR ouverte, revue OK | `cursor/brique-01-fondations-e4e0` | #3 | Polices Fontsource, lang=fr |
| 02 Design system | PR ouverte, revue OK | `cursor/brique-02-design-e4e0` | #4 | Tokens `--px-*` |
| 03 Identité | PR ouverte, revue OK | `cursor/brique-03-identite-e4e0` | #5 | Pas de photo, pas de domaine |
| 04 Projets | PR ouverte, revue OK | `cursor/brique-04-projets-e4e0` | #6 | Six fiches sourcées, blog retiré |
| 05 Accessibilité | PR ouverte, revue OK | `cursor/brique-05-a11y-e4e0` | #7 | Clavier, focus, contraste |
| 06 Netlify | PR ouverte, revue OK | `cursor/brique-06-netlify-e4e0` | #8 | Domaine réel absent, baseUrl inchangé |

## Prochaine session

1. Fusionner les PR dans l'ordre 01 à 06. Chaque PR a pour base la branche de la brique précédente, pas `main`, tant que la précédente n'est pas fusionnée.
2. Créer le site Netlify sur ce dépôt, puis remplacer `baseUrl` par l'URL réelle.
