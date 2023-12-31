/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 public/models/balloon.gltf 
*/

import { fadeOnBeforeCompile } from "@/utils/fadeMaterial";
import { useGLTF } from "@react-three/drei";

export function Balloon(props: any) {
  const { nodes }: any = useGLTF("./models/balloon.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.BALLOON.geometry}
        position={[0.021, 0, -0.062]}
        scale={1}
      >
        <meshStandardMaterial
          color={"#ffffff"}
          envMapIntensity={2}
          transparent
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("./models/balloon.gltf");
