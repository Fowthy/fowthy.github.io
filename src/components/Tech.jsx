import React, { Suspense, useState, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Decal,
  Float,
  useTexture,
  Preload,
  Html,
} from "@react-three/drei";

import CanvasLoader from "./Loader";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const TechBall = ({ icon, position, name }) => {
  const [decal] = useTexture([icon]);
  const [hovered, setHovered] = useState(false);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <group position={position}>
        <mesh
          castShadow
          receiveShadow
          scale={1.1}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color='#fff8eb'
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1}
            map={decal}
            flatShading
          />
        </mesh>
        {hovered && (
          <Html center position={[0, -1.6, 0]} style={{ pointerEvents: 'none' }}>
            <span className='bg-tertiary text-white text-[12px] px-2 py-1 rounded whitespace-nowrap shadow-lg'>
              {name}
            </span>
          </Html>
        )}
      </group>
    </Float>
  );
};

const Tech = () => {
  const [cols, setCols] = useState(7);

  useEffect(() => {
    const updateCols = () => {
      const width = window.innerWidth;
      if (width < 480) setCols(3);
      else if (width < 768) setCols(4);
      else if (width < 1024) setCols(5);
      else setCols(7);
    };
    updateCols();
    window.addEventListener('resize', updateCols);
    return () => window.removeEventListener('resize', updateCols);
  }, []);

  const spacing = 2.8;
  const totalRows = Math.ceil(technologies.length / cols);
  const height = Math.max(400, totalRows * 120 + 60);

  return (
    <div style={{ width: '100%', height: `${height}px` }}>
      <Canvas
        camera={{ position: [0, 0, 18], fov: 50 }}
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
      >
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 0, 5]} />
        <Suspense fallback={<CanvasLoader />}>
          {technologies.map((tech, i) => {
            const row = Math.floor(i / cols);
            const col = i % cols;
            const itemsInRow = Math.min(cols, technologies.length - row * cols);
            const rowOffset = (cols - itemsInRow) * spacing / 2;
            const x = (col - (cols - 1) / 2) * spacing + rowOffset;
            const y = ((totalRows - 1) / 2 - row) * spacing;

            return (
              <TechBall
                key={tech.name}
                icon={tech.icon}
                position={[x, y, 0]}
                name={tech.name}
              />
            );
          })}
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default SectionWrapper(Tech, "");
