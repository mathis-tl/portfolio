---
title: panyen
slug: panyen
icon: chart
description: "En cours. Différentiel d'évolution des prix Martinique / métropole, données Insee. La publication est bloquée si un test qualité échoue."
tags: ["Python", "dbt", "Insee"]
githubUrl: https://github.com/mathis-tl/panyen
featured: true
order: 3
---

panyen veut dire panier, en créole martiniquais.

## Le problème

Comparer l'évolution des prix en Martinique et en métropole, à partir de données publiques de l'Insee. Le projet suit le différentiel d'évolution, poste par poste. Il ne publie pas un nouveau niveau de prix inventé.

## Ce que j'ai fait

- Conception d'un pipeline de données public, de la collecte à la publication.
- Mise en place de tests de qualité avec dbt : si un test échoue, rien n'est republié.

## Le résultat

Le projet est en cours. La publication est bloquée si un test qualité échoue : le site garde sa dernière version saine. La collecte est encore manuelle.

## Les outils

Python, dbt, données Insee.

## Le code

Dépôt GitHub : lien en haut de page.

Source : README github.com/mathis-tl/panyen.
