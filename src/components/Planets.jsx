import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";


const scene = new THREE.Scene();
const aspectRatio = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
const controls = new OrbitControls(camera, renderer.domElement);
const loader = new GLTFLoader();

export default function Planets() {

    const light = new THREE.AmbientLight(0x404040);
    scene.add(light);

    loader.load("../../src/assets/models/gltf/moon.gltf",
        (moon) => {
            scene.add(moon.scene);
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        (error) => {
            console.log("Error while loading");
            console.log(error);
        }
    )

    document.body.appendChild(renderer.domElement);

    animate();
    return (<p>it works</p>)
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

