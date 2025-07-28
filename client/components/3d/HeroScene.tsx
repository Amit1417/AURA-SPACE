import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Stars } from '@react-three/drei';
import Car3D from './Car3D';
import FloatingObjects from './FloatingObjects';
import ParticleField from './ParticleField';

interface HeroSceneProps {
  className?: string;
}

export default function HeroScene({ className = "" }: HeroSceneProps) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.4} color="#00ffff" />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={1} 
            color="#00ffff"
            castShadow
          />
          <pointLight 
            position={[-10, -10, -10]} 
            intensity={0.5} 
            color="#ff00ff"
          />
          
          {/* Environment */}
          <Environment preset="night" />
          <Stars 
            radius={300} 
            depth={60} 
            count={1000} 
            factor={4} 
            saturation={0} 
            fade 
            speed={1}
          />
          
          {/* 3D Objects */}
          <Car3D 
            position={[2, 0, 0]} 
            scale={0.8} 
            color="#00ffff"
          />
          
          <FloatingObjects />
          
          <ParticleField 
            count={1500}
            radius={25}
            speed={0.3}
          />
          
          {/* Camera Controls (disabled for auto-rotation) */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
