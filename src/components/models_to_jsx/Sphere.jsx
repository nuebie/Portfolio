import React from "react";
import { Decal, Float, OrbitControls, Preload, useTexture} from "@react-three/drei";
import {Canvas, useLoader} from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader'

export default function Sphere({texture}) {
   const Texture = useLoader(TextureLoader, texture);

   return (
      <Canvas>
         <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={0.25}/>
            <directionalLight position={[0,0,0.05]}/>
            <mesh castShadow receiveShadow scale={2.75}>
               <icosahedronGeometry args={[1,1]}/>
               <meshStandardMaterial
                  color='#fff8eb'
                  polygonOffset
                  polygonOffsetFactor={-5}
                  flatShading/>
               <Decal position={[0,0,1]}
                  rotation={[2*Math.PI,0,6.25]}
                  flatShading
                  map={Texture}/>
            </mesh>
         </Float>
      </Canvas>
   );
}