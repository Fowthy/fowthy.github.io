import React, { Suspense, useState, useRef, useEffect, Component } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Decal,
  Float,
  useTexture,
  Preload,
  Html,
} from "@react-three/drei";

import { motion } from "framer-motion";
import CanvasLoader from "./Loader";
import { technologies } from "../constants";
import { staggerContainer } from "../utils/motion";

// Error boundary to catch per-ball texture/render failures
class BallErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

const TechBallInner = ({ icon, position, name }) => {
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

const TechBall = (props) => (
  <BallErrorBoundary>
    <TechBallInner {...props} />
  </BallErrorBoundary>
);

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

  // Calculate camera distance to fit all balls with padding
  const fov = 50;
  const gridHalfHeight = ((totalRows - 1) / 2) * spacing + 2; // +2 for ball radius + float buffer
  const cameraZ = gridHalfHeight / Math.tan((fov / 2) * Math.PI / 180) + 2; // +2 extra padding
  const height = Math.max(400, totalRows * 140 + 80);

  return (
    <div style={{ width: '100%', height: `${height}px` }}>
      <Canvas
        camera={{ position: [0, 0, cameraZ], fov }}
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

// Top-level error boundary so Tech section never crashes the page
class TechErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

const SafeTech = () => (
  <TechErrorBoundary>
    <motion.section
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.1 }}
      className='max-w-[1600px] mx-auto px-2 sm:px-4 sm:py-16 py-10 relative z-0'
    >
      <Tech />
    </motion.section>
  </TechErrorBoundary>
);

export default SafeTech;
