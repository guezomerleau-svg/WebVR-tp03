# Structure de l'arme

Ce depot contient uniquement la structure reutilisable de l'arme a feu pour l'integration dans la scene VR du projet partenaire.

## Utilisation

```js
import { Firearm } from './src/Firearm.js';

const firearm = new Firearm();
scene.add(firearm);

// Point d'attache du controleur VR.
controller.add(firearm);

const origin = firearm.getMuzzleWorldPosition();
const direction = firearm.getMuzzleWorldDirection();
```

Le module ne contient volontairement ni casque VR, ni scene de test, ni projectile, ni logique de gachette. `Grip` est le point d'attache de la main et `Muzzle` le point de sortie prevu pour l'exercice suivant.
