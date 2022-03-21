import * as THREE from "three";

import EarthCloudsMap from "../../assets/textures/8k_earth_clouds.jpg";
import EarthDayMap from "../../assets/textures/8k_earth_daymap.jpg";
import EarthNightMap from "../../assets/textures/8k_earth_nightmap.jpg";
import EarthSpecularMap from "../../assets/textures/8k_earth_specular_map.jpg";
import { FC } from "react";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";

const Earth: FC = () => {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNightMap, EarthSpecularMap, EarthCloudsMap]
  );
  return (
    <>
      <ambientLight intensity={1} />
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite
          transparent
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial map={colorMap} normalMap={normalMap} />
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
