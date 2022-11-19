import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage, PerspectiveCamera } from '@react-three/drei'
import { Model } from '../components/Model'
import { Header, Causes, Treatment, Prevention, FAQS } from "../containers"

export default function HomePage() {
  const ref = useRef()
  return (
    <div className=' overflow-x-hidden'>
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}
        style={{
          height: "100vh",
          width: "50vw",
          // maxHeight: "500px"
        }}
        className="max-h-[330px] md:max-h-[800px]"
      >
        <PerspectiveCamera makeDefault fov={50} position={[90, 20, 80]} />
        <ambientLight />
        <ambientLight />
        <ambientLight />
        <pointLight intensity={1} position={[200, 0, 100]} />
        <pointLight intensity={1} position={[200, 0, 100]} />
        <directionalLight intensity={1} position={[100, 200, 100]} />
        <directionalLight intensity={1} position={[-100, -200, -100]} />
        <Suspense fallback={null}>
          <Stage controls={ref} preset="rembrandt" intensity={1} environment="city">
            false
            <Model />
            false
          </Stage>
        </Suspense>
        <OrbitControls ref={ref} autoRotate />
      </Canvas>
      <Header />
      <Causes />
      <Treatment />
      <Prevention />
      <FAQS />
    </div>
  )
}