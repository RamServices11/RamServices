import { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial } from '@react-three/drei';
import type { Group } from 'three';
import CanvasBoundary from './CanvasBoundary';

interface Droplet {
  position: [number, number, number];
  scale: number;
  speed: number;
  offset: number;
}

function pseudoRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function generateDroplets(count: number): Droplet[] {
  return Array.from({ length: count }, (_, i) => {
    const r1 = pseudoRandom(i * 5 + 1);
    const r2 = pseudoRandom(i * 5 + 2);
    const r3 = pseudoRandom(i * 5 + 3);
    const r4 = pseudoRandom(i * 5 + 4);
    const r5 = pseudoRandom(i * 5 + 5);
    return {
      position: [
        (r1 - 0.5) * 7,
        (r2 - 0.5) * 4.5,
        (r3 - 0.5) * 3,
      ] as [number, number, number],
      scale: 0.14 + r4 * 0.24,
      speed: 0.35 + r5 * 0.5,
      offset: r2 * Math.PI * 2,
    };
  });
}

function useDroplets(count: number): Droplet[] {
  return useMemo(() => generateDroplets(count), [count]);
}

/** A single glassy, transparent droplet — real refraction, no opaque fill. */
function Droplet({ data, color }: { data: Droplet; color: string }) {
  return (
    <mesh position={data.position} scale={data.scale}>
      {/* Smooth sphere, not faceted — this is what actually reads as a droplet rather than a gem. */}
      <sphereGeometry args={[1, 32, 32]} />
      <MeshTransmissionMaterial
        thickness={0.6}
        roughness={0.04}
        transmission={1}
        ior={1.33}
        chromaticAberration={0.03}
        distortion={0.15}
        distortionScale={0.2}
        temporalDistortion={0.08}
        color={color}
        resolution={128}
        samples={1}
        anisotropicBlur={0.1}
      />
    </mesh>
  );
}

function DropletField({ count, color }: { count: number; color: string }) {
  const droplets = useDroplets(count);
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const group = groupRef.current;
    if (!group) return;
    group.children.forEach((child, i) => {
      const d = droplets[i];
      // Gentle vertical drift with a soft horizontal sway — reads as
      // suspended droplets rather than tumbling debris.
      child.position.y = d.position[1] + Math.sin(t * d.speed + d.offset) * 0.4;
      child.position.x = d.position[0] + Math.cos(t * d.speed * 0.5 + d.offset) * 0.15;
    });
    group.rotation.y = Math.sin(t * 0.04) * 0.1;
  });

  return (
    <group ref={groupRef}>
      {droplets.map((d, i) => (
        <Droplet key={i} data={d} color={color} />
      ))}
    </group>
  );
}

interface ParticleFieldProps {
  /** Accent hex color tinting the glass. */
  color?: string;
  count?: number;
}

/**
 * A drifting cluster of genuinely transparent, refractive glass droplets —
 * real MeshTransmissionMaterial spheres rather than an opaque faceted shape,
 * so light passes through them the way it would through actual water.
 */
const ParticleField = ({ color = '#00B4D8', count = 12 }: ParticleFieldProps) => {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <CanvasBoundary>
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 5], fov: 45 }}
          gl={{ alpha: true, antialias: true }}
        >
          <ambientLight intensity={0.9} />
          <pointLight position={[3, 3, 4]} intensity={70} color="#ffffff" />
          <pointLight position={[-3, -2, -3]} intensity={35} color={color} />
          <Suspense fallback={null}>
            <DropletField count={count} color={color} />
          </Suspense>
        </Canvas>
      </CanvasBoundary>
    </div>
  );
};

export default ParticleField;
