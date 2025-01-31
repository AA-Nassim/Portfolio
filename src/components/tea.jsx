import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Tea(props) {
  const { nodes, materials } = useGLTF('/models/fiesta_tea.glb')
  
  
  // materials.teapot_glass_Base_Color.transparent = true
  // materials['table_Base_Color.002'].transparent = true
  materials.peripheri_Base_Color.transparent = true
  materials.trad_edges.transparent = true

  // materials.peripheri_Base_Color.opacity = 0
  return (
    <group {...props} dispose={null} scale={[0.5, 0.5, 0.5]} position={[0, -30, 0]} ref={props.innerRef}>
      
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.teapot_glass_Base_Color}
        position={[-0.958, 1.351, -0.021]}
      />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials.teapot_glass_Base_Color}
        position={[-0.908, 1.351, 0.038]}
      />
      <mesh
        geometry={nodes.Object_8.geometry}
        material={materials.teapot_glass_Base_Color}
        position={[-0.908, 1.351, 0.038]}
      />
      <mesh
        geometry={nodes.Object_10.geometry}
        material={materials.teapot_glass_Base_Color}
        position={[-0.908, 1.351, 0.038]}
      />
      <mesh
        geometry={nodes.Object_12.geometry}
        material={materials.teapot_glass_Base_Color}
        position={[-0.908, 1.351, 0.038]}
      />
      <mesh
        geometry={nodes.Object_14.geometry}
        material={materials.teapot_glass_Base_Color}
        position={[-0.908, 1.351, 0.038]}
      />
      <mesh
        geometry={nodes.Object_16.geometry}
        material={materials.teapot_glass_Base_Color}
        position={[-0.908, 1.351, 0.038]}
      />
      
      
      <mesh
        geometry={nodes.Object_30.geometry}
        material={materials['table_Base_Color.002']}
        position={[0, 0.316, 0]}
        scale={0.69}
      />
      <mesh
        geometry={nodes.Object_32.geometry}
        material={materials['table_Base_Color.002']}
        position={[-0.277, 1.689, 0.594]}
        rotation={[-2.937, -0.086, -0.29]}
        scale={[-0.012, 0.084, 0.012]}
      />
      <mesh
        geometry={nodes.Object_34.geometry}
        material={materials['table_Base_Color.002']}
        position={[-0.277, 1.689, 0.594]}
        rotation={[-2.937, -0.086, -0.29]}
        scale={[-0.012, 0.084, 0.012]}
      />

      <mesh
        geometry={nodes.Object_18.geometry}
        material={materials.trad_edges}
        position={[0, 0.316, 0]}
      />
      <mesh
        geometry={nodes.Object_20.geometry}
        material={materials.trad_edges}
        position={[0, 0.316, 0]}
      />
      <mesh
        geometry={nodes.Object_22.geometry}
        material={materials.trad_edges}
        position={[0, 0.316, 0]}
      />
      <mesh
        geometry={nodes.Object_24.geometry}
        material={materials.trad_edges}
        position={[0, 0.316, 0]}
      />
      <mesh
        geometry={nodes.Object_26.geometry}
        material={materials.trad_edges}
        position={[0, 0.316, 0]}
      />
      <mesh
        geometry={nodes.Object_28.geometry}
        material={materials.peripheri_Base_Color}
        renderOrder={-1}
        position={[-0.238, 1, 0.665]}
        // scale={0.625}
        scale={10}
      />
    </group>
  )
}

useGLTF.preload('/models/fiesta_tea.glb')