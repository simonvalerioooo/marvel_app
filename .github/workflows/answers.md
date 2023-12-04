Quel est l'intérêt de commiter régulièrement et de manière atomique ?

Ca revient à sauvegarder vos changements fréquemment et de manière logique, ce qui rend l'historique du code plus compréhensible et facilite le travail d'équipe


A quoi sert une branche de type feature dans un développement logiciel de type git flow ?

Une branche "feature" est créée pour ajouter une nouvelle fonctionnalité au logiciel. Elle part de la branche principale "develop", permettant de travailler sur la fonctionnalité de manière isolée et de ne pas tout mettre en périle et de savoir d'où provient l'erreur. Une fois fonctionel, la branche "feature" est fusionnée de retour dans "develop". Cela organise le développement de nouvelles fonctionnalités de manière ordonnée.

Quelle est la différence entre une branche main et une branche develop ?

La branche "main" est la branche principale où se trouve la version fonctionelle du code, prête pour la production. La branche "develop" est une sur laquel on travail où les nouvelles fonctionnalités sont développées et testées avant d'être fusionnées dans "main".


Quelle est la différence entre git add, git commit et git push ?

git add: Prépare les modifications pour être enregistrées. On selectionne les fichiers que vous souhaitez inclure dans le prochain enregistrement (commit).
git commit: Enregistre les modifications préparées avec git add. Ca creer un point de sauvegarde dans l'historique du projet avec un message qui indique les differentes modifications.
git push: Envoie les commits locaux vers  GitHub. Cela partage vos changements avec d'autres collaborateurs ( ceux qu'on a accepté) ou sauvegarde votre travail en ligne.

Quel est l'intérêt d'une protection de branche ?

La protection de branch assure la stabilité du projet. Ca ne laisse pas la possibilité a n'importe qui de modifier sans qu'elle ne soit approuvé.

Quel est l'intérêt d'une pull request ?

Une pull request permet de proposer des changements à un projet. On demande a l'hote de vérifier et d'accepter vos modifications avant qu'elles ne soient réellement ajoutées au code. Cela aide à maintenir la qualité du projet.

Dans quel cas passer d'une version 1.0.0 à 1.0.1 ?

Passer de la version 1.0.0 à 1.0.1 indique généralement une petite correction ou une amélioration sans ajouter de nouvelles fonctionnalités importantes.

Dans quel cas passer d'une version 1.0.0 à 1.1.0 ?

Passer de la version 1.0.0 à 1.1.0 signifie généralement l'ajout de nouvelles fonctionnalités ou des améliorations importantes dans le logiciel, sans casser la compatibilité avec la version précédente.

A quoi sert une version release candidate ?

Cela signifie que nous allons tester cette version avant de la mettre en production. Si cette version est validée, nous allons la mettre en production. Si cette version n'est pas validée, nous allons la corriger.

Quel est l'intérêt des tests unitaires ?

Les tests unitaires assurent que des parties précises du code marchents, cela aide à détecter les erreurs tôt et à maintenir la fiabilité de l'app. Ils contribuent à un développement plus fiable.