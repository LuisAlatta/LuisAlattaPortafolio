/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import * as React from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshTransmissionMaterial, Environment, Stars } from "@react-three/drei"
import * as THREE from "three"

// Each crystal shape is fully autonomous – no scroll influence, just pure organic floating
const crystalShapes = [
    // Icosahedrons (multifaceted gems)
    { id: "ico1", geometry: "icosahedron", args: [1.4, 0] as [number, number], pos: [-5.5, 3, -8] as [number, number, number], speed: 1.8, ri: 1.2, fi: 2.5, color: "#ffffff", thi: 2.0, rough: 0.05 },
    { id: "ico2", geometry: "icosahedron", args: [0.9, 0] as [number, number], pos: [6, -4, -6] as [number, number, number], speed: 2.4, ri: 1.8, fi: 1.8, color: "#a78bfa", thi: 1.8, rough: 0.07 },
    // Octahedrons (diamonds)
    { id: "oct1", geometry: "octahedron", args: [1.8, 0] as [number, number], pos: [5, 4.5, -9] as [number, number, number], speed: 1.2, ri: 2.0, fi: 2.0, color: "#38bdf8", thi: 2.5, rough: 0.04 },
    { id: "oct2", geometry: "octahedron", args: [1.1, 0] as [number, number], pos: [-7, -2, -7] as [number, number, number], speed: 2.2, ri: 1.5, fi: 1.5, color: "#f472b6", thi: 1.5, rough: 0.08 },
    { id: "oct3", geometry: "octahedron", args: [0.7, 0] as [number, number], pos: [2, 7, -5] as [number, number, number], speed: 3.0, ri: 2.5, fi: 2.0, color: "#4ade80", thi: 1.2, rough: 0.06 },
    // Tetrahedrons (pyramids)
    { id: "tet1", geometry: "tetrahedron", args: [2.0, 0] as [number, number], pos: [-3, 6, -12] as [number, number, number], speed: 1.0, ri: 0.8, fi: 1.2, color: "#ffffff", thi: 3.0, rough: 0.03 },
    { id: "tet2", geometry: "tetrahedron", args: [1.3, 0] as [number, number], pos: [8, -6, -10] as [number, number, number], speed: 1.6, ri: 1.4, fi: 1.8, color: "#fb923c", thi: 2.0, rough: 0.06 },
    { id: "tet3", geometry: "tetrahedron", args: [0.8, 0] as [number, number], pos: [-8, 5, -6] as [number, number, number], speed: 2.5, ri: 2.0, fi: 2.5, color: "#facc15", thi: 1.5, rough: 0.08 },
    // Dodecahedrons (complex multi-face)
    { id: "dod1", geometry: "dodecahedron", args: [1.6, 0] as [number, number], pos: [3, -8, -11] as [number, number, number], speed: 1.4, ri: 1.6, fi: 1.4, color: "#818cf8", thi: 2.5, rough: 0.05 },
    { id: "dod2", geometry: "dodecahedron", args: [0.9, 0] as [number, number], pos: [-5, -8, -9] as [number, number, number], speed: 2.0, ri: 2.2, fi: 2.2, color: "#2dd4bf", thi: 1.8, rough: 0.07 },
    // Boxes (cubes)
    { id: "box1", geometry: "box", args: [2.2, 2.2, 2.2] as [number, number, number], pos: [7, 1, -11] as [number, number, number], speed: 1.0, ri: 1.2, fi: 1.0, color: "#ffffff", thi: 2.8, rough: 0.02 },
    { id: "box2", geometry: "box", args: [1.2, 1.2, 1.2] as [number, number, number], pos: [-2, -6, -7] as [number, number, number], speed: 2.2, ri: 2.0, fi: 2.0, color: "#c084fc", thi: 2.0, rough: 0.06 },
    { id: "box3", geometry: "box", args: [0.8, 0.8, 0.8] as [number, number, number], pos: [0, 9, -6] as [number, number, number], speed: 3.0, ri: 2.8, fi: 2.5, color: "#34d399", thi: 1.5, rough: 0.08 },
    // Spheres (floating orbs)
    { id: "sph1", geometry: "sphere", args: [2.5, 32, 32] as [number, number, number], pos: [-1, -14, -18] as [number, number, number], speed: 0.8, ri: 3.0, fi: 0.8, color: "#ffffff", thi: 3.5, rough: 0.02 },
    { id: "sph2", geometry: "sphere", args: [1.0, 24, 24] as [number, number, number], pos: [9, 8, -9] as [number, number, number], speed: 2.0, ri: 2.0, fi: 2.5, color: "#60a5fa", thi: 2.0, rough: 0.05 },
    { id: "sph3", geometry: "sphere", args: [0.6, 16, 16] as [number, number, number], pos: [-9, 1, -7] as [number, number, number], speed: 3.5, ri: 3.0, fi: 3.0, color: "#f87171", thi: 1.5, rough: 0.08 },
]

function makeGeometry(shape: string, args: any) {
    switch (shape) {
        case "icosahedron": return <icosahedronGeometry args={args} />
        case "octahedron": return <octahedronGeometry args={args} />
        case "tetrahedron": return <tetrahedronGeometry args={args} />
        case "dodecahedron": return <dodecahedronGeometry args={args} />
        case "box": return <boxGeometry args={args} />
        case "sphere": return <sphereGeometry args={args} />
        default: return <icosahedronGeometry args={args} />
    }
}

function CrystalShape({ shape }: { shape: typeof crystalShapes[0] }) {
    const meshRef = React.useRef<THREE.Mesh>(null)

    const rotSpeed = React.useRef({ x: 0, y: 0, z: 0 })

    React.useEffect(() => {
        rotSpeed.current = {
            x: (Math.random() - 0.5) * 0.004,
            y: (Math.random() - 0.5) * 0.006,
            z: (Math.random() - 0.5) * 0.003,
        }
    }, [])

    useFrame(() => {
        if (!meshRef.current) return
        meshRef.current.rotation.x += rotSpeed.current.x
        meshRef.current.rotation.y += rotSpeed.current.y
        meshRef.current.rotation.z += rotSpeed.current.z
    })

    return (
        <Float
            speed={shape.speed}
            rotationIntensity={shape.ri}
            floatIntensity={shape.fi}
        >
            <mesh ref={meshRef} position={shape.pos}>
                {makeGeometry(shape.geometry, shape.args)}
                <MeshTransmissionMaterial
                    color={shape.color}
                    resolution={256}
                    thickness={shape.thi}
                    roughness={shape.rough}
                    transmission={1}
                    ior={1.5}
                    chromaticAberration={0.08}
                    backside={true}
                />
            </mesh>
        </Float>
    )
}

export function Background3D() {
    return (
        <div className="fixed inset-0 z-[-10] pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 10], fov: 55 }}
                dpr={[1, 1.5]}
                gl={{ antialias: false, powerPreference: "high-performance" }}
                frameloop="always"
            >
                <Environment preset="city" />
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 10, 5]} intensity={1.2} />
                <pointLight position={[-10, -5, 5]} color="#818cf8" intensity={0.8} />
                <pointLight position={[10, 5, -5]} color="#38bdf8" intensity={0.6} />

                {crystalShapes.map(shape => (
                    <CrystalShape key={shape.id} shape={shape} />
                ))}

                <Stars radius={60} depth={50} count={300} factor={3} saturation={1} fade speed={0.3} />
            </Canvas>
        </div>
    )
}
