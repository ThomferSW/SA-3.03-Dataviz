# Visualisation de Données Musique - ListenBrainz

Ce projet est une application web de visualisation de données (DataViz) réalisée dans le cadre du BUT MMI (Métiers du Multimédia et de l'Internet). Elle permet d'analyser l'évolution temporelle des écoutes musicales à partir des données publiques fournies par l'API ListenBrainz.

## Table des matières

- [Présentation](#présentation)
- [Fonctionnalités](#fonctionnalités)
- [Technologies utilisées](#technologies-utilisées)
- [Source des données](#source-des-données)
- [Installation et utilisation](#installation-et-utilisation)
- [Structure du projet](#structure-du-projet)

## Présentation

L'application récupère l'historique d'écoute horodaté d'un utilisateur et transforme ces données brutes en graphiques interactifs. L'objectif est d'observer les habitudes d'écoute au fil du temps (répartition par heure de la journée, évolution mensuelle ou classement des artistes).

## Fonctionnalités

- Récupération en temps réel des données via l'API REST de ListenBrainz.
- Conversion des timestamps UNIX en objets Date exploitables en JavaScript.
- Représentation graphique des habitudes d'écoute à l'aide de Chart.js.
- Interface responsive optimisée pour les différents écrans.

## Technologies utilisées

- HTML5 / CSS3
- JavaScript (ES6+, Fetch API)
- Chart.js (Bibliothèque de DataViz)

## Source des données

Les données sont issues de la fondation MetaBrainz :

- Site web : https://listenbrainz.org/
- Documentation de l'API : https://listenbrainz.readthedocs.io/
- Endpoint principal utilisé : `https://api.listenbrainz.org/1/user/{username}/listens`

## Installation et utilisation

1. Cloner le dépôt sur votre machine locale :
   ```bash
   git clone [https://github.com/votre-compte/votre-projet.git](https://github.com/votre-compte/votre-projet.git)
