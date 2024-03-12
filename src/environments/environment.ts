// Ce fichier peut être remplacé lors de la construction en utilisant le tableau `fileReplacements`.
// `ng build --prod` remplace `environment.ts` par `environment.prod.ts`.
// La liste des remplacements de fichiers se trouve dans `angular.json`.

export const environment = {
  production: false,
  api: 'http://localhost:8000/api',
};

/*
  * Pour faciliter le débogage en mode développement, vous pouvez importer le fichier suivant
  * pour ignorer les cadres de pile d'erreurs liés à la zone tels que `zone.run`, `zoneDelegate.invokeTask`.
  *
  * Cet import doit être commenté en mode production car il aura un impact négatif
  * sur les performances si une erreur est générée.
  */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
