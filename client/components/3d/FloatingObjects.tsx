import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Sphere, Octahedron, Torus, Ring } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingObjectProps {
  position: [number, number, number];
  geometry: 'box' | 'sphere' | 'octahedron' | 'torus' | 'ring';
  color?: string;
  scale?: number;
  speed?: number;
}

function FloatingObject({ position, geometry, color = '#a855f7', scale = 1, speed = 1 }: FloatingObjectProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const material = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: color,
    metalness: 0.8,
    roughness: 0.2,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
    emissive: color,
    emissiveIntensity: 0.1,
    transparent: true,
    opacity: 0.8,
  }), [color]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.7;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * speed * 0.5) * 0.3;
    }
  });

  const renderGeometry = () => {
    const props = { ref: meshRef, material, scale };
    
    switch (geometry) {
      case 'box':
        return <Box {...props} args={[1, 1, 1]} />;
      case 'sphere':
        return <Sphere {...props} args={[0.5, 32, 32]} />;
      case 'octahedron':
        return <Octahedron {...props} args={[0.7]} />;
      case 'torus':
        return <Torus {...props} args={[0.7, 0.2, 16, 32]} />;
      case 'ring':
        return <Ring {...props} args={[0.5, 0.8, 16]} />;
      default:
        return <Box {...props} args={[1, 1, 1]} />;
    }
  };

  return (
    <group position={position}>
      {renderGeometry()}
    </group>
  );
}

export default function FloatingObjects() {
  const objects = useMemo(() => [
    { position: [-8, 2, -5], geometry: 'octahedron', color: '#a855f7', scale: 0.5, speed: 0.8 },
    { position: [8, -1, -3], geometry: 'torus', color: '#3b82f6', scale: 0.7, speed: 1.2 },
    { position: [-6, -3, -8], geometry: 'ring', color: '#06b6d4', scale: 0.8, speed: 0.6 },
    { position: [7, 4, -6], geometry: 'sphere', color: '#8b5cf6', scale: 0.4, speed: 1.5 },
    { position: [-9, 0, -4], geometry: 'box', color: '#a855f7', scale: 0.3, speed: 1.0 },
    { position: [6, -2, -7], geometry: 'octahedron', color: '#06b6d4', scale: 0.6, speed: 0.9 },
    { position: [-4, 5, -9], geometry: 'torus', color: '#8b5cf6', scale: 0.5, speed: 1.3 },
    { position: [9, 1, -5], geometry: 'ring', color: '#3b82f6', scale: 0.7, speed: 0.7 },
  ] as const, []);

  return (
    <>
      {objects.map((obj, index) => (
        <FloatingObject
          key={index}
          position={obj.position}
          geometry={obj.geometry}
          color={obj.color}
          scale={obj.scale}
          speed={obj.speed}
        />
      ))}
    </>
  );
}
