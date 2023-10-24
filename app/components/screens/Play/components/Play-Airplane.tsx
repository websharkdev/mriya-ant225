/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/models/airplane/model.glb 
*/

import { useGLTF } from "@react-three/drei";
import React from "react";

export function Airplane(props: any) {
  const { nodes, materials }: any = useGLTF("./models/airplane/model.gltf");
  return (
    <group {...props} dispose={null}>
      <group
        position={[-1.591, 0, 0]}
        scale={window.innerWidth > 720 ? [3, 0.6, 0.6] : [1, 0.2, 0.2]}
      >
        <mesh geometry={nodes.Plane.geometry} material={materials.Plaster} />
        <mesh geometry={nodes.Plane_1.geometry} material={materials.ENGINE} />
      </group>
    </group>
  );
}

useGLTF.preload("./models/airplane/model.gltf");