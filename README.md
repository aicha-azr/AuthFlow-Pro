# AuthFlow Pro

Ce dépôt contient le projet "AuthFlow Pro", une application de gestion d'authentification basée sur des rôles et des permissions, développée en utilisant une architecture monorepo et suivant le modèle MVC. L'objectif principal est de fournir une solution robuste et sécurisée pour gérer l'authentification et l'autorisation des utilisateurs.

## Technologies utilisées
* Frontend: React, Redux Toolkit
* Backend: Node.js, Express.js
* Base de données: MongoDB, Mongoose
* Stylisme: Tailwind CSS
## Fonctionnalités
### Authentication and Authorization
* Mise en place du projet React en utilisant Create React App.
* Configuration d'un backend simple avec Node.js (ExpressJS) pour gérer l'authentification et l'autorisation.
* Création de composants d'interface utilisateur pour la connexion, l'inscription, et la gestion des rôles et des permissions.
* Intégration de Redux Toolkit pour gérer l'état global de l'application, y compris les informations d'authentification, les rôles et les permissions.
### Role-based Access Control (RBAC)
* Mise en place d'un système de rôles avec des permissions associées.
* Attribution des rôles aux utilisateurs pendant l'inscription ou via une interface d'administration.
* Limitation de l'accès aux fonctionnalités en fonction des rôles et des permissions.
### Redux Implementation
* Utilisation de Redux Toolkit pour une gestion d'état efficace, simplifiée et performante.
* Implémentation de slices, d'actions et de reducers pour traiter les opérations liées à l'authentification et aux autorisations.
* Utilisation de useDispatch et useSelector pour une intégration fluide avec les composants React.

### Swagger Documentation
* Intégration de Swagger pour documenter l'API backend.
* Description des différentes routes, méthodes et paramètres nécessaires.
* Utilisation de Swagger UI pour rendre la documentation accessible et interactive.
* Database Schemas
#### User Schema
##### Fields:
- id (identifiant unique)
- username (chaîne de caractères)
- email (chaîne de caractères)
- password (chaîne de caractères hachée)
- role (rôle attribué à l'utilisateur)
#### Role Schema
##### Fields:
- id (identifiant unique)
- name (chaîne de caractères, par exemple 'Admin', 'User', etc.)
- permissions (tableau de permissions associées au rôle)
#### Permission Schema
##### Fields:
- id (identifiant unique)
- name (chaîne de caractères, par exemple 'CREATE_TASK', 'DELETE_USER', etc.)
### Objectif du projet
Ce projet vise à familiariser les développeurs avec diverses technologies et concepts, notamment MongoDB et Mongoose pour la base de données, API Restful avec ExpressJS, Axios pour effectuer des requêtes HTTP, Redux Toolkit pour la gestion efficace de l'état, Swagger pour la documentation de l'API, Jest (ou Mocha) pour les tests, Tailwind CSS pour le stylisme, ainsi que les mécanismes de gestion des erreurs et la modélisation des données.

Pour démarrer le projet, veuillez suivre les instructions de configuration et d'installation fournies dans les sections suivantes.

### Configuration et installation
1. Cloner ce dépôt sur votre machine locale.
2. Assurez-vous d'avoir Node.js et npm installés sur votre machine.

3. Naviguez vers le répertoire frontend et exécutez la commande npm install pour installer les dépendances frontend.
4. Naviguez vers le répertoire backend et exécutez la commande npm install pour installer les dépendances backend.
5. Assurez-vous d'avoir une instance MongoDB en cours d'exécution sur votre machine locale ou configurez l'URL de connexion à la base de données dans le fichier de configuration du backend.
6. Lancez le frontend en exécutant la commande npm start dans le répertoire frontend.
7. Lancez le backend en exécutant la commande npm start dans le répertoire backend.
Une fois les étapes ci-dessus terminées avec succès, vous devriez pouvoir accéder à l'application dans votre navigateur à l'adresse spécifiée par le serveur de développement du frontend (par défaut, http://localhost:3000).

Pour accéder à la documentation de l'API Swagger, veuillez visiter l'URL spécifiée par le serveur de développement du backend (par défaut, http://localhost:8000/api-docs).
