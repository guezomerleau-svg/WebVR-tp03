# Structure de l'arme et cibles

## Prévisualiser les modèles

```bash
npm install
npm run dev
```

Ouvrir `http://localhost:5173/` pour comparer les modèles de l'arme. Glisser avec la souris pour tourner, utiliser la molette pour zoomer et les flèches pour changer de variante.

## Tester l'exercice 4

Ouvrir `http://localhost:5173/targets.html`.

- Les cibles (cube, cône et cylindre) apparaissent automatiquement toutes les 1,5 secondes.
- Cliquer dans la scène lance un projectile de test.
- Un impact déclenche des particules, un son et augmente le compteur.
- Appuyer sur `R` pour réinitialiser les cibles et le score.

Dans la scène VR principale, le partenaire peut réutiliser `TargetSystem` ainsi :

```js
import { TargetSystem } from './src/TargetSystem.js';

const targetSystem = new TargetSystem({
  spawnDelay: 2,
  maxTargets: 6,
  onHit: ({ target, projectile }) => {
    // Ajouter ici le score ou l'effet de jeu.
  },
});
scene.add(targetSystem);

// Dans la boucle de rendu, avec les projectiles de la scène.
targetSystem.update(delta, projectiles);
```

Le moteur physique existant peut aussi appeler directement `targetSystem.checkProjectile(projectile)` après sa détection de collision. Le module ne dépend pas d'un moteur physique particulier.
