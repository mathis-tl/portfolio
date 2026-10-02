# Suivi des sessions (refonte portfolio)

Mettre à jour ce fichier en fin de chaque session agent pour limiter la taille des contextes.

## Dépôt cible

- Roadmap : dépôt public `mathis-tl/portfolio` (à créer sur GitHub si absent).
- Travail local : `/home/ubuntu/portfolio` (historique propre, import Zaggonaut `ac6e8e47`).
- Branche poussée sur `Portfolio-mathis-telle` en attendant le nouveau dépôt : voir section « Remote ».

## Briques

| Brique | Statut | Branche | PR | Notes |
|--------|--------|---------|-----|-------|
| 00 Bootstrap | En cours | `brique/00-bootstrap` | | |
| 01 Fondations | À faire | | | |
| 02 Design system | À faire | | | |

## Prochaine session

1. Créer le dépôt GitHub `mathis-tl/portfolio` (vide) et y pousser `main` + branches.
2. Si PR 00 mergée : nouveau chat avec le prompt de **simplification** brique 00, puis review.
3. Sinon : finir CI / corrections review brique 00.
4. Démarrer brique 01 (prompt d'implémentation Notion).

## Remote (action Mathis)

L'intégration GitHub de l'agent ne peut pas créer le dépôt `portfolio`. Après création manuelle :

```bash
cd /chemin/vers/portfolio
git remote set-url origin git@github.com:mathis-tl/portfolio.git
git push -u origin main
git push -u origin brique/00-bootstrap
```
