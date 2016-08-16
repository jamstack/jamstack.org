---
title: JAMstack
layout: layouts/main.jade
---

<p class="intro">
  La JAMstack est une manière idéale de bâtir des sites et des applications web performants, sécurisés et simples à mettre à jour.
</p>

JAM signifie JavaScript, APIs and Markup (JavaScript, APIs et balisage). C'est l'association de technologies qui progresse le plus rapidement quand il s'agit de bâtir des sites et des applications web : plus de serveurs, hébergez tout votre partie cliente sur des CDNs et utilisez des APIs pour les parties dynamiques.

Lorsque la pile LAMP a commencé à devenir proéminente à la fin des années 90, elle s'est développée suite à un ensemble de contraintes qui ne sont plus d'actualité. À l'époque les navigateurs étaient de simples lecteurs de documents et tout ce qui était dynamique, social ou interactif devait obligatoirement se passer côté serveur. La seule forme d'hébergement accessible était l'hébergement mutualisé. Les déploiements consistaient à envoyer des fichiers par FTP. Le versionnement était la plupart du temps absent des habitudes quotidiennes des développeurs web.

De nos jours les navigateurs sont les systèmes d'exploitation du web et sont capables de faire tourner des applications complexes entièrement côté client. Il sont capables de faire appel et d'interagir avec un nombre sans cesse croissant d'APIs et de services à travers différents domaines et infrastructures. Les CDNs (Content Delivery Network ou Réseau de diffusion de contenu) ne sont plus un luxe que seules les grandes entreprises peuvent se permettre, ils sont maintenant une évidence pour réduire la vitesse d'accès au serveur (le Time to First Byte) pour les sites et les applications de toutes tailles. Les modèles de déploiement ont évolué : les transferts manuels et fastidieux ont cédé la place à des processus automatisés déclenchés par des systèmes de gestion de version de plus en plus présents.

La JAMStack décrit ce nouvel état de fait. Au lieu d'envoyer par FTP du code serveur sur un serveur mutualisé, nous poussons avec Git et notre code est immédiatement assemblé et distribué sur des réseaux de CDNs un peu partout à travers le monde. Au lieu de dépendre d'une base de donnée pour chaque requête que nous devons effectuer, nous utilisons des outils de _build_ pour mettre en production des sites et des applications prêts à tourner directement dans le navigateur. Au lieu de mélanger ensemble la persistance, la génération du HTML, les transactions bancaires, l'authentification, etc. nous séparons ces problématiques et faisons appel à des APIs bien précises depuis notre front-end.

La JAMStack utilise des languages de balisage comme HTML, CSS et Markdown pour formater et mettre en forme notre contenu, du JavaScript côté client pour rendre le tout interactif et engageant, des APIs pour ajouter de la persistence, de la synchronisation en temps réel, des interactions concrêtes, des commentaires, des paniers d'achat et ainsi de suite.

Les navigateurs sont devenus le nouveau système d'exploitation. Les serveurs sont absorbés par les CDns et les APIs. Les sites sont ou dépourvus de base de données et générés en amont ou font appel à de services de bases de données hébergées et servies directement depuis le navigateur. JavaScript est en charge de toute programmation dynamique pendant le cycle requête/réponse et tourne entièrement côte client.

Diffusez la JAM !
