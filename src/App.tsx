import { Canvas } from "@react-three/fiber";
import Earth from "./components/earth";
import { Suspense } from "react";
import TopSection from "./components/top-section";

function App() {
  return (
    <div className="canvas-container">
      <TopSection />
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
