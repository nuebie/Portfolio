import { useState, useRef, Suspense } from 'react';
import {Canvas, useFrame} from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function StarsGroup() {
    const ref = useRef();
    const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });
  
    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        ref.current.rotation.x = elapsedTime * 0.1; // Adjust the rotation speed as needed
        ref.current.rotation.y = elapsedTime * 0.1; // Adjust the rotation speed as needed
      });
  
    return (
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points ref={ref} positions={sphere} stride={3} frustumCulled>
          <PointMaterial
            transparent
            color="'#ffffff"
            size={0.002}
            sizeAttenuation={true}
            depthWrite={false}
          />
        </Points>
      </group>
    );
  }


export default function Stars() {
    return (
      <div className="StarsBackground">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <StarsGroup />
        </Canvas>
      </div>
    );
  }
