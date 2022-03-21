import * as THREE from "three";

import { FC, useRef } from "react";
import { OrbitControls, Stars } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";

import EarthCloudsMap from "../../assets/textures/8k_earth_clouds.jpg";
import EarthDayMap from "../../assets/textures/8k_earth_daymap.jpg";
import EarthNightMap from "../../assets/textures/8k_earth_nightmap.jpg";
import EarthSpecularMap from "../../assets/textures/8k_earth_specular_map.jpg";
import { TextureLoader } from "three";

const Earth: FC = () => {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNightMap, EarthSpecularMap, EarthCloudsMap]
  );

  const earthRef = useRef<THREE.Mesh>(null!);
  const cloudsRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    earthRef.current.rotation.y = clock.getElapsedTime() / 6;
    cloudsRef.current.rotation.y = clock.getElapsedTime() / 9;
  });

  return (
    <>
      <pointLight color="#f6f3ea" position={[2, 0, 2]} intensity={1.2} />
      <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade
      />
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite
          transparent
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
        <OrbitControls
          enableZoom
          enablePan
          enableRotate
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />
      </mesh>
    </>
  );
};
export default Earth;
