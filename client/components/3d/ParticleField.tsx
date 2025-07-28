import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface ParticleFieldProps {
  count?: number;
  radius?: number;
  color?: string;
  speed?: number;
}

export default function ParticleField({ 
  count = 2000, 
  radius = 20, 
  color = '#00ffff',
  speed = 0.5 
}: ParticleFieldProps) {
  const pointsRef = useRef<THREE.Points>(null);
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // Random spherical distribution
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = Math.random() * radius;
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      
      // Random colors between cyan and pink
      const colorChoice = Math.random();
      if (colorChoice < 0.6) {
        // Cyan particles
        colors[i * 3] = 0;     // R
        colors[i * 3 + 1] = 1; // G  
        colors[i * 3 + 2] = 1; // B
      } else if (colorChoice < 0.9) {
        // Pink particles
        colors[i * 3] = 1;     // R
        colors[i * 3 + 1] = 0; // G
        colors[i * 3 + 2] = 1; // B
      } else {
        // White particles
        colors[i * 3] = 1;     // R
        colors[i * 3 + 1] = 1; // G
        colors[i * 3 + 2] = 1; // B
      }
    }
    
    return [positions, colors];
  }, [count, radius]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.elapsedTime * speed * 0.1;
      pointsRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} colors={colors}>
      <PointMaterial 
        transparent 
        vertexColors 
        size={0.8}
        sizeAttenuation={true}
        alphaTest={0.5}
        opacity={0.8}
      />
    </Points>
  );
}
