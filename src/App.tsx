import * as THREE from "three";

import { OrbitControls, Sky, Stars } from "@react-three/drei";
import { Suspense, useRef } from "react";

import { Canvas } from "@react-three/fiber";
import Earth from "./components/earth";

function App() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <OrbitControls />
        <Earth />
      </Suspense>
    </Canvas>
  );
}

export default App;
