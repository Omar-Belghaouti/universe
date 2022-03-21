import { Canvas } from "@react-three/fiber";
import Earth from "./components/earth";
import { Stars } from "@react-three/drei";
import { Suspense } from "react";

function App() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Earth />
      </Suspense>
    </Canvas>
  );
}

export default App;
