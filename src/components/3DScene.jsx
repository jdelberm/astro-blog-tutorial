import { Canvas, useThree } from '@react-three/fiber'
import { Stats, OrbitControls } from '@react-three/drei'
import Plane from "./Plane"
import Clouds from "./Clouds"
import { Suspense } from "react";
import Cube from './Cube';

export default function App() {

    const canvasStyle = {
        width: "100%",
        height: "100%"
    }

    return (
        <div id="canvas-container" style={canvasStyle}>
            <Canvas camera={{ fov: 35, near: 1, far: 100, position: [0, 0, 0] }}>
                <Suspense fallback={null}>
                    <directionalLight color="white" intensity={4} position={[0, 0, 1]} />
                    <Plane />
                    <Clouds />
                </Suspense>
            </Canvas>
        </div >
    )
}