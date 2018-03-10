# Bug Coockers

## A propos de ce projet

Il s'agit du meilleur site sur le projet fictif de la Wild Code School de la promo de Lyon pour février 2018.

## Comment utiliser ce repo ?

Les branches `master` et `develop` sont utilisable uniquement en PR.

Il y a 3 autres branches nommées `feature`, `release` et `hotfix`.
Ces 3 branches sont utilisées en fait comme dossiers pour contenir les branches que l'on va créer.

Si vous voulez créer une **feature**, il suffit de mettre `feature` dans le nom avant celle-ci.  
Par exemple: 
```
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

## A propos du CSS

J'étais partie sur un système de fichier nommé Stylus mais il peut-etre intimidant à utiliser au premier abord.
Nous allons donc utiliser le système CSS de base.

Je vais prefaire les fichiers pour que tout soit okay, vous n'aurez plus qu'a selectionner le fichier adéquate pour la section sur laquelle vous travaillez.

Une fois que tout sera okay, on fera changera cela en un seul fichier css unique pour faire plus pro.