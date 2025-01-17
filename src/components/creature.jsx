import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/models/creature.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials['null']}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.2]}
      />
    </group>
  )
}

useGLTF.preload('/models/creature.glb')