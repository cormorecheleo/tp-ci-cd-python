\# README - Projet X

Ce README fournit des instructions pour lancer les architectures Docker et exécuter les tests du projet X.

\## Description du projet

Le projet X est une application web composée d'un front-end React et d'une API Flask. Il permet aux utilisateurs de \[décrire brièvement les fonctionnalités principales de votre application\].

\## Installation

1\. Clonez ce dépôt sur votre machine locale :

git clone https://github.com/votre-utilisateur/projet-x.git

cd projet-x

2\. Accédez au répertoire du projet :

cd projet-x

3\. Installez les dépendances pour le front-end React :

cd app

npm install

4\. Installez les dépendances pour l'API Flask :

cd ../api

pip install -r requirements.txt

\## Lancement des architectures Docker

À partir de la racine du projet, lancez les conteneurs Docker en utilisant Docker Compose :

docker-compose up --build

Cela construira les images Docker pour le front-end React et l'API Flask, et démarrera les conteneurs.

Accédez à l'application dans votre navigateur en ouvrant l'URL suivante :

http://localhost:3000

\## Tests

\### Tests unitaires

Pour exécuter les tests unitaires pour le front-end React :

cd app

npm test

Pour exécuter les tests unitaires pour l'API Flask :

cd api

pytest

\### Tests d'intégration

Les tests d'intégration sont exécutés automatiquement avec Docker Compose lors du lancement des conteneurs.

\### Tests end-to-end avec Cypress

Pour exécuter les tests end-to-end avec Cypress :

cd app

npx cypress run

Cela lancera les tests Cypress en mode headless.

\## Structure du projet

\- app/ : Contient le front-end React.

\- api/ : Contient l'API Flask.

\- docker-compose.yml : Fichier de configuration Docker Compose.

\- README.md : Ce fichier README.

\## Contact

Pour toute question ou commentaire, veuillez contacter \[insérez votre nom ou votre adresse e-mail ici\].
