<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://gitter.im/nestjs/nestjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge"><img src="https://badges.gitter.im/nestjs/nestjs.svg" alt="Gitter" /></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

  Nest is [MIT licensed](LICENSE).



  Comment configurer une application Node.js pour la production sur Debian 9
Publié le 6 septembre 2018 24,2k vuesNGINX NODE.JS DEBIAN 9

Par Kathleen Juell et Burn Bearnes

Introduction
Node.js est un environnement d'exécution JavaScript à code source ouvert permettant de créer des applications réseau et côté serveur. La plate-forme fonctionne sous Linux, macOS, FreeBSD et Windows. Bien que vous puissiez exécuter les applications Node.js en ligne de commande, ce didacticiel se concentrera sur leur exécution en tant que service. Cela signifie que les applications vont redémarrer en cas de redémarrage ou d'échec et qu'elles peuvent être utilisées en toute sécurité dans un environnement de production.

Dans ce tutoriel, vous allez configurer un environnement Node.js prêt pour la production sur un seul serveur Debian 9. Ce serveur exécutera une application Node.js gérée par PM2 et fournira aux utilisateurs un accès sécurisé à l’application via un proxy inverse Nginx . Le serveur Nginx proposera HTTPS, en utilisant un certificat gratuit fourni par Let's Encrypt .

Conditions préalables
Ce guide suppose que vous disposiez des éléments suivants:

Une configuration de serveur Debian 9, telle que décrite dans le guide de configuration initiale du serveur pour Debian 9 . Vous devez avoir un utilisateur non root avec les privilèges sudo et un pare-feu actif.
Un nom de domaine dirigé vers l'adresse IP publique de votre serveur . Ce tutoriel utilisera le nom de domaine example.com tout au long.
Nginx installé, comme indiqué dans la section Comment installer Nginx sur Debian 9 .
Nginx configuré avec SSL à l'aide des certificats Let's Encrypt. Comment sécuriser Nginx avec Let's Encrypt sur Debian 9 vous guidera tout au long du processus.
Une fois les conditions préalables remplies, vous aurez un serveur servant la page d’espace réservé par défaut de votre domaine à l'adresse .https://example.com/

Étape 1 - Installation de Node.js
Commençons par installer la dernière version LTS de Node.js, à l’aide des archives de package NodeSource .

Pour installer le PPA NodeSource et accéder à son contenu, vous devez d'abord mettre à jour votre index de paquet et installer curl:

sudo apt update
sudo apt install curl
Assurez-vous que vous êtes dans votre répertoire personnel, puis curlrécupérez le script d'installation pour les archives Node.js 8 .x:

cd ~
curl -sL https://deb.nodesource.com/setup_8.x -o nodesource_setup.sh
Vous pouvez inspecter le contenu de ce script avec nanoou votre éditeur de texte préféré :

nano nodesource_setup.sh
Lorsque vous avez terminé d'inspecter le script, exécutez-le sous sudo:

sudo bash nodesource_setup.sh
Le PPA sera ajouté à votre configuration et votre cache de paquet local sera mis à jour automatiquement. Après avoir exécuté le script d'installation à partir de Nodesource, vous pouvez installer le package Node.js:

sudo apt install nodejs
Pour vérifier quelle version de Node.js vous avez installée après ces étapes initiales, tapez:

nodejs -v
Output
v8.11.4
Remarque: lors de l'installation à partir du PPA NodeSource, l'exécutable Node.js est appelé nodejsplutôt que node.

Le nodejspaquet contient le nodejsbinaire ainsi qu'un npmgestionnaire de paquet pour les modules de noeud, vous n'avez donc pas besoin d'installer npmséparément.

npmutilise un fichier de configuration dans votre répertoire personnel pour suivre les mises à jour. Il sera créé la première fois que vous courez npm. Exécutez cette commande pour vérifier qu’il npmest installé et pour créer le fichier de configuration:

npm -v
Output
5.6.0
Pour que certains npmpackages fonctionnent (ceux qui nécessitent la compilation du code source, par exemple), vous devez installer le build-essentialpackage:

sudo apt install build-essential
Vous disposez maintenant des outils nécessaires pour travailler avec des npmpackages nécessitant la compilation de code source.

Avec le moteur d’exécution Node.js installé, passons à l’écriture d’une application Node.js.

Étape 2 - Création d'une application Node.js
Écrivons une application Hello World qui renvoie «Hello World» à toutes les requêtes HTTP. Cet exemple d'application vous aidera à configurer Node.js. Vous pouvez le remplacer par votre propre application. Assurez-vous simplement de modifier votre application pour écouter les adresses IP et les ports appropriés.

Commençons par créer un exemple d'application appelé hello.js:

cd ~
nano hello.js
Insérez le code suivant dans le fichier:

~ / hello.js
const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
Enregistrez le fichier et quittez l'éditeur.

Cette application Node.js écoute les adresses spécifiées ( localhost) et port ( 3000) et renvoie «Hello World!» Avec un 200code de réussite HTTP. Comme nous écoutons localhost, les clients distants ne pourront pas se connecter à notre application.

Pour tester votre application, tapez:

node hello.js
Vous verrez la sortie suivante:

Output
Server running at http://localhost:3000/
Remarque: L' exécution d'une application Node.js de cette manière bloquera des commandes supplémentaires jusqu'à ce que l'application soit supprimée en appuyant sur CTRL+C.

Pour tester l'application, ouvrez une autre session de terminal sur votre serveur et connectez-vous localhostà curl:

curl http://localhost:3000
Si vous voyez la sortie suivante, l'application fonctionne correctement et écoute l'adresse et le port corrects:

Output
Hello World!
Si vous ne voyez pas la sortie attendue, assurez-vous que votre application Node.js est en cours d'exécution et configurée pour écouter l'adresse et le port appropriés.

Une fois que vous êtes certain que cela fonctionne, supprimez l'application (si ce n'est déjà fait) en appuyant sur CTRL+C.

Étape 3 - Installation de PM2
Ensuite, installons PM2 , un gestionnaire de processus pour les applications Node.js. PM2 permet de démoniser des applications afin qu'elles s'exécutent en arrière-plan en tant que service.

Utilisez npmpour installer la dernière version de PM2 sur votre serveur:

sudo npm install pm2@latest -g
L' -goption indique npmd'installer le module globalement afin qu'il soit disponible dans tout le système.

Commençons par utiliser la pm2 startcommande pour exécuter votre application hello.js, en arrière-plan:

pm2 start hello.js
Cela ajoute également votre application à la liste de processus de PM2, qui est sortie chaque fois que vous démarrez une application:

Output
[PM2] Spawning PM2 daemon with pm2_home=/home/sammy/.pm2
[PM2] PM2 Successfully daemonized
[PM2] Starting /home/sammy/hello.js in fork_mode (1 instance)
[PM2] Done.
┌──────────┬────┬──────┬──────┬────────┬─────────┬────────┬─────┬───────────┬───────┬──────────┐
│ App name │ id │ mode │ pid  │ status │ restart │ uptime │ cpu │ mem       │ user  │ watching │
├──────────┼────┼──────┼──────┼────────┼─────────┼────────┼─────┼───────────┼───────┼──────────┤
│ hello    │ 0  │ fork │ 1338 │ online │ 0       │ 0s     │ 0%  │ 23.0 MB   │ sammy │ disabled │
└──────────┴────┴──────┴──────┴────────┴─────────┴────────┴─────┴───────────┴───────┴──────────┘
 Use `pm2 show <id|name>` to get more details about an app
Comme vous pouvez le constater, PM2 attribue automatiquement un App name(basé sur le nom du fichier, sans l’ .jsextension) et un PM2 id. PM2 conserve également d'autres informations, telles que le PIDprocessus, son statut actuel et l'utilisation de la mémoire.

Les applications qui fonctionnent sous PM2 seront redémarrées automatiquement si l'application se bloque ou est tuée, mais nous pouvons prendre une étape supplémentaire pour que l'application soit lancée au démarrage du système à l'aide de la startupsous - commande. Cette sous-commande génère et configure un script de démarrage pour lancer PM2 et ses processus gérés à l'amorçage du serveur:

pm2 startup systemd
La dernière ligne de la sortie résultante inclura une commande à exécuter avec les privilèges de superutilisateur pour configurer PM2 afin qu'il démarre au démarrage:

Output
[PM2] Init System found: systemd
[PM2] To setup the Startup Script, copy/paste the following command:
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u sammy --hp /home/sammy
Exécutez la commande à partir de la sortie, avec votre nom d'utilisateur à la place de sammy:

sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u sammy --hp /home/sammy
Une étape supplémentaire consiste à enregistrer la liste de processus PM2 et les environnements correspondants:

pm2 save
Vous avez maintenant créé une unité systemd qui s'exécute pm2pour votre utilisateur au démarrage. Cette pm2instance s'exécute à son tour hello.js.

Démarrer le service avec systemctl:

sudo systemctl start pm2-sammy
Vérifiez l'état de l'unité systemd:

systemctl status pm2-sammy
Pour une présentation détaillée de systemd, voir Systemd Essentials: Utilisation des services, des unités et du journal .

En plus de ceux que nous avons abordés, PM2 fournit de nombreuses sous-commandes qui vous permettent de gérer ou de rechercher des informations sur vos applications.

Arrêtez une application avec cette commande (spécifiez le PM2 App nameou id):

pm2 stop app_name_or_id
Redémarrez une application:

pm2 restart app_name_or_id
Répertoriez les applications actuellement gérées par PM2:

pm2 list
Obtenir des informations sur une application spécifique à l'aide de App name:

pm2 info app_name
Le moniteur de processus PM2 peut être extrait avec la monitsous - commande. Ceci affiche l'état de l'application, l'utilisation du processeur et de la mémoire:

pm2 monit
Notez que l'exécution pm2sans arguments affichera également une page d'aide avec un exemple d'utilisation.

Maintenant que votre application Node.js est en cours d'exécution et gérée par PM2, configurons le proxy inverse.

Étape 4 - Configuration de Nginx en tant que serveur proxy inverse
Votre application est en cours d'exécution et à l'écoute localhost, mais vous devez configurer un moyen permettant à vos utilisateurs d'y accéder. Nous allons configurer le serveur Web Nginx en tant que proxy inverse à cette fin.

Dans le didacticiel préalable, vous définissez votre configuration Nginx dans le fichier. Ouvrez ce fichier pour le modifier:/etc/nginx/sites-available/example.com

sudo nano /etc/nginx/sites-available/example.com
Dans le serverbloc, vous devriez avoir un location /bloc existant . Remplacez le contenu de ce bloc par la configuration suivante. Si votre application est configurée pour écouter sur un autre port, mettez à jour la partie en surbrillance avec le numéro de port correct:

/etc/nginx/sites-available/example.com
server {
...
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
...
}
Cela configure le serveur pour répondre aux demandes à la racine. En supposant que notre serveur soit disponible à l' adresse example.com, l'accès via un navigateur Web enverrait la demande à , l'écoute sur le port à l'adresse .https://example.com/hello.js3000localhost

Vous pouvez ajouter des locationblocs supplémentaires au même bloc de serveur pour permettre l'accès à d'autres applications sur le même serveur. Par exemple, si vous exécutiez également une autre application Node.js sur le port 3001, vous pouvez ajouter ce bloc d’emplacement pour en permettre l’accès via :https://example.com/app2

/etc/nginx/sites-available/example.com - Facultatif
server {
...
    location /app2 {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
...
}
Une fois que vous avez terminé d'ajouter les blocs d'emplacement pour vos applications, enregistrez le fichier et quittez votre éditeur.

Assurez-vous de ne pas avoir introduit d'erreur de syntaxe en tapant:

sudo nginx -t
Redémarrez Nginx:

sudo systemctl restart nginx
En supposant que votre application Node.js est en cours d’exécution, et que vos configurations d’application et de Nginx sont correctes, vous devriez maintenant pouvoir accéder à votre application via le proxy inverse Nginx. Essayez-le en accédant à l'URL de votre serveur (son adresse IP publique ou son nom de domaine).

Conclusion
Toutes nos félicitations! Votre application Node.js s'exécute maintenant derrière un proxy inverse Nginx sur un serveur Debian 9. Cette configuration de proxy inverse est suffisamment souple pour permettre à vos utilisateurs d'accéder à d'autres applications ou à du contenu Web statique que vous souhaitez partager.
