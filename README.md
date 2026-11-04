
# L'évolution des supports musicaux (1950-2026)

## Présentation

Ce projet de datavisualisation a pour objectif de représenter
l'évolution des différents supports de distribution musicale
à travers le temps.

L'étude porte sur cinq formats :
- Vinyle
- Cassette audio
- CD
- DVD
- Support numérique (Digital Media)

## Source des données

Les données sont récupérées grâce à l'API officielle MusicBrainz.

Site : https://musicbrainz.org/

Documentation :
https://musicbrainz.org/doc/MusicBrainz_API

API utilisée :
https://musicbrainz.org/ws/2/release/

## Méthode de collecte

Pour chaque support, une recherche est effectuée pour
chaque année entre 1950 et 2026.

Les recherches utilisent deux critères :
- La date de sortie (date)
- Le format du support (format)

Exemple de requête pour les vinyles en 1980 :

https://musicbrainz.org/ws/2/release/?query=date%3A%5B1980%20TO%201980%5D%20AND%20format%3A%22Vinyl%22&fmt=json&limit=1

L'API retourne notamment un champ "count", qui correspond
au nombre de résultats correspondant à la recherche.

Ce nombre est utilisé comme indicateur pour construire
les graphiques d'évolution.

## Structure des données

Chaque entrée contient :

- year : année de sortie
- support : nom du support musical
- count : nombre de sorties référencées

## Visualisations envisagées

- Graphique linéaire : évolution des supports dans le temps.
- Graphique comparatif : comparaison des différents formats.
- Frise chronologique : apparition et développement des supports.

## Limites des données

MusicBrainz est une base de données collaborative.
Elle ne représente pas l'intégralité de la production musicale.

Les résultats correspondent au nombre de sorties
référencées dans MusicBrainz et non aux ventes réelles,
au nombre d'écoutes ou à la popularité commerciale.

Les années récentes peuvent également être incomplètes.

## Technologies utilisées

- MusicBrainz API
- JSON
- JavaScript
- HTML / CSS
- Chart.js

## Crédits

Données musicales : MusicBrainz
https://musicbrainz.org/

API sous licence et conditions d'utilisation propres
au projet MusicBrainz.
