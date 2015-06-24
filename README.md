# julienschneide.github.io
# Création d'un site Web et upload sur Git

Ci-dessous, les étapes clés pour la création et l'upload d'un site web sur git.

##Instalation de l'environnement de développement

  * Installation de NodeJS
  * Installation de Yeoman, Bower & Grunt:
      ```sh
    $ npm install -g yo bower grunt-cli
    ```
  - Installation du generator Yeoman
      ```sh
    $ npm install -g generator-webapp
    ```

##Création du site web

Pour ce fair il faut lancer la ligne de commande git (Git Shell) et créer un nouveau dossier vide à l'endroit ou l'on veut stocker notre site web.

Une fois que c'est fait, le site peut être générer avec la commande suivante :
      ```sh
    $ yo webapp
    ```
    
Il est également nécessaire d'installer les dépendances:
      ```sh
    $ npm install && bower install
    ```

Une fois que c'est fait, le serveur peut être démarré et les fichiers html/css modifiés
      ```sh
    $ grunt serve
    ```
    
A chaque modification enregistrée, la page se rafraichit automatiquement.

##Déploiement du site web
Une fois le site terminé, il faut générer la version de production du site (fichiers et images alléger).
      ```sh
    $ grunt build
    ```
    
Le site web de production est générer dans le dossier dist.

Il faut maintenant copier le contenu de ce dossier dans le repository git préalablement créer qui se nomme "username.github.io" dans mon exemple : julienschneie.github.io.

### Version
1.0.0
