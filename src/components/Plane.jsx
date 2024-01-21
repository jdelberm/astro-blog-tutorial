import * as THREE from 'three';
import { useRef, useEffect } from "react";
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

//https://docs.pmnd.rs/react-three-fiber/tutorials/basic-animations
export default function Plane() {

    let planehMesh = useRef();
    let mixer = useRef();
    useEffect(() => {
        //planehMesh.current.position.x = 0;
        if (gltf) {
            mixer = new THREE.AnimationMixer(gltf.scene);
            const action = mixer.clipAction(gltf.animations[0]);
            action.play();
        }
    })
    //useFrame needs to be used inside a canvas, which translates to include this component into a canvas component
    useFrame((state, delta, clock) => {
        //planehMesh.current.rotation.y = clock.getElapsedTime() / 10
        mixer?.update(delta);
    })
    const gltf = useLoader(GLTFLoader, "/src/assets/models/gltf/stylized_ww1_plane/scene.gltf")

    return (
        <primitive ref={planehMesh} position={[0, -0.2, -5]} rotation={[-0.5, 0.7, 0]} scale={1} object={gltf.scene} />
    )
}