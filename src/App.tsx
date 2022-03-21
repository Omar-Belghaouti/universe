import { Canvas } from "@react-three/fiber";
import Earth from "./components/earth";
import { Stars } from "@react-three/drei";
import { Suspense } from "react";

function App() {
  return (
    <Canvas style={{ background: "black" }}>
      <Suspense fallback={null}>
        <Earth />
        <Stars fade />
      </Suspense>
    </Canvas>
  );
}

export default App;
