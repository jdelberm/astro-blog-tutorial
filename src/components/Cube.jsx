import React from "react";
import { useFrame } from '@react-three/fiber'

//https://docs.pmnd.rs/react-three-fiber/tutorials/basic-animations
export default function Cube() {

    const moonMesh = React.useRef();
    //useFrame needs to be used inside a canvas, which translates to include this component into a canvas component
    useFrame(({ clock }) => {
        moonMesh.current.rotation.x = clock.getElapsedTime()
    })
    return (
        <mesh ref={moonMesh}>
            <boxGeometry args={[3, 3, 3]} />
            <meshBasicMaterial color="royalblue" />
        </mesh>
    )
}