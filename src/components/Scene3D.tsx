import { Canvas } from '@react-three/fiber';
import { FloatingOrb } from './FloatingOrb';

export function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#7c3aed" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
        
        {/* Multiple floating orbs */}
        <FloatingOrb position={[-3, 2, -2]} color="#7c3aed" size={0.8} speed={0.8} />
        <FloatingOrb position={[3, -1, -3]} color="#3b82f6" size={1.2} speed={1.2} />
        <FloatingOrb position={[1, 3, -1]} color="#8b5cf6" size={0.6} speed={0.6} />
        <FloatingOrb position={[-2, -2, -4]} color="#60a5fa" size={1} speed={1} />
        <FloatingOrb position={[4, 1, -2]} color="#a855f7" size={0.9} speed={0.9} />
      </Canvas>
    </div>
  );
}