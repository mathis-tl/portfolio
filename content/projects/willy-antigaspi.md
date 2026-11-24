---
title: Willy Anti-Gaspi
slug: willy-antigaspi
icon: basket
description: "Stage 2026 : fiabilisation des flux de données, système de recherche de prix publics comparables et système d'auto-formatage d'offres fournisseurs Excel, avec l'équipe achats."
tags: ["Python", "SQL", "Prefect", "Supabase", "Retool", "Airtable", "Google Sheets", "OpenAI"]
githubUrl: https://github.com/mathis-tl/willy-antigaspi-data-internship
featured: true
order: 1
---

## Le problème

Chez Willy Anti-Gaspi, des traitements de données planifiés synchronisent les outils internes. L'équipe Achats passe du temps à formater des offres fournisseurs Excel et à déterminer des prix de vente.

## Ce que j'ai fait

- Fiabilisation des flows Prefect planifiés : erreurs qualifiées et reprise ciblée.
- Conception d'une recherche automatique de prix publics comparables : scoring explicable et revue humaine des cas douteux.
- Conception d'un service d'auto-formatage d'offres fournisseurs Excel : l'IA lit la structure, le code vérifie.
- Intégration dans l'outil interne d'analyse des achats, avec des tests unitaires et un harnais de non-régression.

L'idée directrice : l'IA lit, le code garantit, l'humain tranche.

## Le résultat

- Temps d'exécution des traitements divisé par 7 (P90 de 4 min 15 s à 36 s).
- 26 contrôles qualité sur les offres fournisseurs.
- Environ 50 % du temps de l'équipe Achats libéré, selon la lettre de recommandation de sa responsable.

## Les outils

Python et SQL pour les traitements, Prefect pour l'orchestration, Supabase (PostgreSQL) pour le stockage, Retool pour l'outil d'analyse des achats, Airtable et Google Sheets pour les données validées, l'API OpenAI pour lire la structure des fichiers, Git.

## Le code

Le dépôt GitHub contient des études de cas et des démonstrations. Elles utilisent des produits et des fichiers fictifs, sans le code, les données ni les accès de l'entreprise.

Source : CV, lettres de recommandation, README github.com/mathis-tl/willy-antigaspi-data-internship.
