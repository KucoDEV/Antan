import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { ObjectLoader } from 'three/src/loaders/ObjectLoader.js';

// Création de la scène, de la caméra et du rendu
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 2, 5);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Ajout de la lumière pour voir la scène correctement
const light = new THREE.PointLight(0xffffff, 2, 100);
light.position.set(10, 10, 10);
scene.add(light);

// Charger la scène JSON avec ObjectLoader
const loader = new THREE.ObjectLoader();
loader.load("assets/project.json", function (loadedScene) {
    scene.add(loadedScene);
    console.log("Scène chargée :", loadedScene);
}, undefined, function (error) {
    console.error("Erreur de chargement :", error);
});

// Animation
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

// Redimensionnement responsive
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
