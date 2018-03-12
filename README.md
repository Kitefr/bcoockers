# Bug Coockers

## A propos de ce projet

Il s'agit du meilleur site sur le projet fictif de la Wild Code School de la promo de Lyon pour février 2018.

## Comment utiliser ce repo ?

Les branches `master` et `develop` sont utilisable uniquement en PR.

Il y a 3 autres branches nommées `feature`, `release` et `hotfix`.
Ces 3 branches sont utilisées en fait comme dossiers pour contenir les branches que l'on va créer.

Si vous voulez créer une **feature**, il suffit de mettre `feature` dans le nom avant celle-ci.
Par exemple:

``` bash
git branch feature/section-contact
```

Cela créera une sous-branche `section-contact` dans la branche `feature`.

Il en va de même pour les 2 autre branches.

### Quelques conseils

1. **PULL** la `develop` avant de commencer à travailler tous les matins !
2. Quand vous créez une branche, faites en sorte de la créer à partir de la branch `develop`.
3. Toujours nommer vos branch en minuscule et ne pas mettre d'espace. A la place des espaces, mettez des tirets.
4. Vous avez fait une erreur ? Ce n'est pas grave ! On en discute simplement entre nous pour trouver le meilleur moyen de régler le problème. Dans ce cas, commencer déjà par créer un `issue` sur le github du projet et à bien détailler le soucis.
5. En créant des issues sur github, soyez précis et n'ayez pas peur d'utiliser des tags pour les catégoriser (bugs, enhancement, etc...).
6. Faire des commits le plus régulièrement possible.
7. On push sur la `develop` le soir avant de partir.

## Usage

Ce projet utilise node. Pas parce qu'il en a besoin mais par facilité.
Il utilise en faire un système nommé Gulp.

Gulp permet d'automatiser des taches comme la gesion des fichiers css et js, la copies et l'optimisation d'image et bien d'autre choses.

Mais j'ai pensé à vous !

Pour l'utilisation, rien de plus simple.

1. Aller dans le dossier du projet git. Verifier que celui-ci a bien un fichier `gulpfile.js`
2. Il devrai y avoir un fichier `package.json` aussi. Faite comme suit pour installer toutes les dépendences du projet.

```bash
npm install
```

3. Pour lancer le serveur de developmement, faite la commande suivante et laisser tourner.

```bash
npm run dev
```

### HTML

Gulp permet de faire des modification mineur sur le html en vu de le distribuer au client.

### CSS

Le plus gros du travail se situe pour le css.
Nous utilisons un système nommé Stylus. 

Stylus permet de coder su css avec des variables et des functions ce qui est plus pratique. 
Mais ce qui est bien avec stylus, c'est qu'il reconnait aussi le css basique donc vous ne serai pas perdu :)

Gulp, ici, permet de merger tous les fichiers stylus en un seul fichier css que l'on utilisera sur le site.

Pour la distribtion client, gulp s'occupe de vérifier le fichier et l'optimise pour gagner de la place et faire en sorte que celui-ci tourne sur la plupart des navigateurs actuels.

### JS

[ATTENTION] Il s'agit d'un systeme experimental. Je ne l'ai pas tester avec jQuery.
Il n'y a cependant aucune perte de données possible.

Pour Js, tous les fichiers javascript dans le dossier js de `src` seront merger ensemble.

Pour la distribution client, le fichier resultant sera traité pour être optimisé.
