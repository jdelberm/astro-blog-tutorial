import React, { useEffect } from "react";
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

//https://docs.pmnd.rs/react-three-fiber/tutorials/basic-animations
export default function Moon() {

    const moonMesh = React.useRef();
    useEffect(() => {
        //moonMesh.current.position.x = 0;
    })
    //useFrame needs to be used inside a canvas, which translates to include this component into a canvas component
    useFrame(({ clock }) => {
        //moonMesh.current.rotation.y = clock.getElapsedTime() / 10
    })
    const gltf = useLoader(GLTFLoader, "../../src/assets/models/gltf/moon/scene.gltf")

    return (
        <primitive ref={moonMesh} position={[0, 0, 0]} object={gltf.scene} />
    )
}