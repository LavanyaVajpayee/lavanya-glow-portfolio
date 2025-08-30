import { Canvas } from '@react-three/fiber';
import { FloatingOrb } from './FloatingOrb';

export function Footer() {
  return (
    <footer className="relative py-16 bg-gradient-to-t from-muted/30 to-background border-t border-border/50 overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 h-full">
        <Canvas camera={{ position: [0, 0, 3] }}>
          <ambientLight intensity={0.2} />
          <pointLight position={[0, 0, 5]} intensity={0.5} color="#7c3aed" />
          <FloatingOrb position={[0, 0, 0]} color="#8b5cf6" size={1.5} speed={0.5} />
        </Canvas>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gradient mb-2">
              Lavanya Vajpayee
            </h3>
            <p className="text-muted-foreground">
              Aspiring Software Engineer | Backend & Web Developer | Researcher
            </p>
          </div>
          
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Lavanya Vajpayee. All rights reserved.
            </p>
            
            <p className="text-sm text-muted-foreground">
              Built with React, Three.js & ❤️
            </p>
          </div>
        </div>
      </div>
      
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none"></div>
    </footer>
  );
}