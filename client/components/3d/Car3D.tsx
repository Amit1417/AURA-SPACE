import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Sphere, Cylinder } from '@react-three/drei';
import * as THREE from 'three';

export default function Car3D({ position = [0, 0, 0], scale = 1, color = '#a855f7' }) {
  const carRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (carRef.current) {
      carRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      carRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  const bodyMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: color,
    metalness: 0.9,
    roughness: 0.1,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
  }), [color]);

  const glassMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: '#87ceeb',
    metalness: 0,
    roughness: 0,
    transmission: 0.9,
    transparent: true,
    opacity: 0.8,
  }), []);

  const wheelMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#2a2a2a',
    metalness: 0.8,
    roughness: 0.2,
  }), []);

  return (
    <group ref={carRef} position={position} scale={scale}>
      {/* Car Body */}
      <Box args={[4, 1.2, 1.8]} position={[0, 0, 0]} material={bodyMaterial} />
      
      {/* Car Hood */}
      <Box args={[1.5, 0.3, 1.6]} position={[1.5, 0.4, 0]} material={bodyMaterial} />
      
      {/* Car Roof */}
      <Box args={[2.5, 0.8, 1.4]} position={[-0.5, 0.8, 0]} material={bodyMaterial} />
      
      {/* Windshield */}
      <Box args={[1.8, 0.7, 1.35]} position={[0.6, 0.6, 0]} material={glassMaterial} />
      
      {/* Side Windows */}
      <Box args={[1.2, 0.6, 0.1]} position={[-0.3, 0.5, 0.85]} material={glassMaterial} />
      <Box args={[1.2, 0.6, 0.1]} position={[-0.3, 0.5, -0.85]} material={glassMaterial} />
      
      {/* Wheels */}
      <Cylinder args={[0.4, 0.4, 0.3]} position={[1.3, -0.7, 1]} rotation={[0, 0, Math.PI / 2]} material={wheelMaterial} />
      <Cylinder args={[0.4, 0.4, 0.3]} position={[1.3, -0.7, -1]} rotation={[0, 0, Math.PI / 2]} material={wheelMaterial} />
      <Cylinder args={[0.4, 0.4, 0.3]} position={[-1.3, -0.7, 1]} rotation={[0, 0, Math.PI / 2]} material={wheelMaterial} />
      <Cylinder args={[0.4, 0.4, 0.3]} position={[-1.3, -0.7, -1]} rotation={[0, 0, Math.PI / 2]} material={wheelMaterial} />
      
      {/* Headlights */}
      <Sphere args={[0.2]} position={[2.1, 0, 0.6]} material={new THREE.MeshBasicMaterial({ color: '#ffffff', emissive: '#ffffff', emissiveIntensity: 0.5 })} />
      <Sphere args={[0.2]} position={[2.1, 0, -0.6]} material={new THREE.MeshBasicMaterial({ color: '#ffffff', emissive: '#ffffff', emissiveIntensity: 0.5 })} />
      
      {/* Tail Lights */}
      <Sphere args={[0.15]} position={[-2.1, 0, 0.7]} material={new THREE.MeshBasicMaterial({ color: '#ff0000', emissive: '#ff0000', emissiveIntensity: 0.3 })} />
      <Sphere args={[0.15]} position={[-2.1, 0, -0.7]} material={new THREE.MeshBasicMaterial({ color: '#ff0000', emissive: '#ff0000', emissiveIntensity: 0.3 })} />
    </group>
  );
}
