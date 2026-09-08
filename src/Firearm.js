import * as THREE from 'three';

export class Firearm extends THREE.Group {
  constructor() {
    super();
    this.name = 'Firearm';
    this.grip = new THREE.Object3D();
    this.grip.name = 'Grip';
    this.grip.position.set(0, -0.45, -0.22);
    this.grip.rotation.x = -0.2;
    this.add(this.grip);
    this.muzzle = new THREE.Object3D();
    this.muzzle.name = 'Muzzle';
    this.muzzle.position.set(0, 0.02, -1.83);
    this.add(this.muzzle);
    this.buildModel();
  }

  buildModel() {
    const darkMetal = new THREE.MeshStandardMaterial({ color: 0x202825, metalness: 0.82, roughness: 0.24 });
    const warmMetal = new THREE.MeshStandardMaterial({ color: 0x9c7046, metalness: 0.7, roughness: 0.3 });
    const gripMaterial = new THREE.MeshStandardMaterial({ color: 0x343a32, roughness: 0.8 });
    this.addPart(new THREE.BoxGeometry(0.48, 0.28, 0.92), darkMetal, new THREE.Vector3(0, 0, -0.42));
    this.addPart(new THREE.CylinderGeometry(0.105, 0.13, 1.45, 16), darkMetal, new THREE.Vector3(0, 0.02, -1.12), new THREE.Euler(Math.PI / 2, 0, 0));
    this.addPart(new THREE.CylinderGeometry(0.16, 0.16, 0.16, 16), warmMetal, new THREE.Vector3(0, 0.02, -1.83), new THREE.Euler(Math.PI / 2, 0, 0));
    this.addPart(new THREE.BoxGeometry(0.32, 0.75, 0.38), gripMaterial, this.grip.position, this.grip.rotation);
    this.addPart(new THREE.TorusGeometry(0.15, 0.035, 8, 16, Math.PI), warmMetal, new THREE.Vector3(0, -0.16, -0.35), new THREE.Euler(Math.PI / 2, 0, 0));
    this.addPart(new THREE.BoxGeometry(0.07, 0.09, 0.32), warmMetal, new THREE.Vector3(0, 0.2, -0.7));
  }

  addPart(geometry, material, position, rotation = new THREE.Euler()) {
    const part = new THREE.Mesh(geometry, material);
    part.position.copy(position);
    part.rotation.copy(rotation);
    part.castShadow = true;
    this.add(part);
    return part;
  }

  getGrip() { return this.grip; }

  getMuzzleWorldPosition(target = new THREE.Vector3()) {
    return this.muzzle.getWorldPosition(target);
  }

  getMuzzleWorldDirection(target = new THREE.Vector3()) {
    this.muzzle.getWorldDirection(target);
    return target.negate();
  }
}
