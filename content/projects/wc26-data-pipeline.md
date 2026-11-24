---
title: Coupe du Monde 2026
slug: wc26-data-pipeline
icon: ball
description: "Pipeline ELT sur la Coupe du Monde 2026, ingestion quotidienne pendant le tournoi, dashboard en ligne."
tags: ["Python", "dbt", "DuckDB", "Astro", "GitHub Actions"]
githubUrl: https://github.com/mathis-tl/wc26-data-pipeline
liveDemoUrl: https://dashboard-alpha-one-24.vercel.app
featured: true
order: 2
---

## Le problème

Un tournoi produit des données tous les jours. L'objectif : un pipeline complet, de l'API au dashboard, qui tourne seul et qui signale quand les données sont trop vieilles.

## Ce que j'ai fait

- Conception d'un pipeline ELT quotidien : ingestion depuis une API, stockage en Parquet.
- Modélisation dimensionnelle avec dbt et DuckDB.
- Mise en place de contrôles de fraîcheur dbt : alerte à 26 h, erreur à 48 h.
- Orchestration par un cron GitHub Actions, avec un journal d'exécution (runs.jsonl).
- Création d'un dashboard statique en Astro.

## Le résultat

L'ingestion a tourné du 10 juillet au 29 août 2026, puis le pipeline a été arrêté. Le classement recalculé a été rapproché 48/48 du classement officiel.

## Les outils

Python, dbt, DuckDB, Parquet, Astro, GitHub Actions.

## Le code

Dépôt GitHub et dashboard en ligne : liens en haut de page.

Source : README github.com/mathis-tl/wc26-data-pipeline.
