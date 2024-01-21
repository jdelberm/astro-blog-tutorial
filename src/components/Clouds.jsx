import * as THREE from 'three';
import { useRef, useEffect } from "react";
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

//https://docs.pmnd.rs/react-three-fiber/tutorials/basic-animations
export default function Clouds() {

    let cloudsMesh = useRef();
    //useFrame needs to be used inside a canvas, which translates to include this component into a canvas component
    useFrame((state, delta, clock) => {
        //cloudsMesh.current.rotation.y = clock.getElapsedTime() / 10
    })
    const gltf = useLoader(GLTFLoader, "/src/assets/models/gltf/stylize_clouds/scene.gltf")

    return (
        <>
            <ambientLight intensity={2} />
            <primitive ref={cloudsMesh} position={[8, 3, -20]} rotation={[0, 1, 0]} scale={1} object={gltf.scene} />
        </>
    )
}