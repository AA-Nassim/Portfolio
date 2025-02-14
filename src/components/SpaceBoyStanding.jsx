import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { Html, useGLTF } from '@react-three/drei'
import { Leva, useControls } from 'leva'
import { useFrame, useThree } from '@react-three/fiber'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Quaternion } from 'three'

export default function SpaceBoyStanding(props) {
  const { nodes, materials } = useGLTF('/models/space_boy-standing.glb')

  // const controls = useControls('HackerRoom', {
  //   posX: {
  //     value: 0,
  //     min:-10, 
  //     max:10, 
  //     step:0.1
  //   }, 
  //   posY: {
  //     value: 5,
  //     min:-10, 
  //     max:10, 
  //     step:0.1
  //   }, 
  //   posZ: {
  //     value: 5,
  //     min:-10, 
  //     max:10, 
  //     step:0.1
  //   }, 
  //   rotX: {
  //     value: 0,
  //     min:-Math.PI * 2, 
  //     max:Math.PI * 2, 
  //     step:0.01
  //   }, 
  //   rotY: {
  //     value: 0,
  //     min:-Math.PI * 2, 
  //     max:Math.PI * 2, 
  //     step:0.01
  //   }, 
  //   rotZ: {
  //     value: 0,
  //     min:-Math.PI * 2, 
  //     max:Math.PI * 2, 
  //     step:0.01
  //   }, 
  // })

  // useFrame((state, delta) => {
  //   state.camera.position.x = controls.posX
  //   state.camera.position.y = controls.posY
  //   state.camera.position.z = controls.posZ
    
  //   state.camera.rotation.set(controls.rotX, controls.rotY, controls.rotZ)
  // })

  const {camera} = useThree()
  const tl = gsap.timeline()


  useGSAP(() => {
    tl.to(camera.position, {
      z:5, 
      scrollTrigger: {
        trigger: ".second-section", 
        start: "top bottom", 
        end: "top top",
        scrub: true, 
        immediateRender: false, 
      }, 
      
    })
    const camYPos = camera.position.y;
    tl.to(camera.position, {
      x: 10, 
      y: 10, 
      scrollTrigger: {
        trigger: ".third-section", 
        start: "top bottom", 
        end: "top top",
        scrub: true, 
        immediateRender: false, 
      }, 
      onUpdate: () => {
          camera.lookAt(0, camYPos, 0)
      }, 
    })

  }, [])

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.body_Material001_0.geometry}
            material={materials['Material.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.body_Material002_0.geometry}
            material={materials['Material.002']}
          />
        </group>
        <group position={[-357.404, 392.646, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={39.706}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere002_Material001_0.geometry}
            material={materials['Material.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere002_Material002_0.geometry}
            material={materials['Material.002']}
          />
        </group>
        <group
          position={[199.634, 566.883, -221.001]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={39.706}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere007_Material001_0.geometry}
            material={materials['Material.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere007_Material002_0.geometry}
            material={materials['Material.002']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.waves_Material002_0.geometry}
          material={materials['Material.002']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[100, 100, 1.891]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.waves1_Material002_0.geometry}
          material={materials['Material.002']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[100, 100, 1.891]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.waves2_Material002_0.geometry}
          material={materials['Material.002']}
          position={[92.464, 15.529, 2.112]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[100, 100, 1.891]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.particles_Material002_0.geometry}
          material={materials['Material.002']}
          position={[489.69, 793.811, 355.293]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={20.408}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_Material001_0.geometry}
          material={materials['Material.001']}
          position={[375.469, 427.948, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={62.402}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere001_Material002_0.geometry}
          material={materials['Material.002']}
          position={[375.469, 427.948, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={60.324}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere004_Material002_0.geometry}
          material={materials['Material.002']}
          position={[375.469, 427.948, 0]}
          rotation={[-0.688, 0, 0]}
          scale={[104.129, 81.609, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere005_Material001_0.geometry}
          material={materials['Material.001']}
          position={[-341.988, 460.196, -117.028]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={62.402}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere006_Material002_0.geometry}
          material={materials['Material.002']}
          position={[-341.988, 460.196, -117.028]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={60.324}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere009_Material002_0.geometry}
          material={materials['Material.002']}
          position={[507.522, 667.594, -214.475]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={16.881}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere010_Material002_0.geometry}
          material={materials['Material.002']}
          position={[-287.442, 585.792, -311.857]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={16.881}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere011_Material002_0.geometry}
          material={materials['Material.002']}
          position={[-553.462, 331.074, -379.067]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={11.437}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_Material001_0.geometry}
          material={materials['Material.001']}
          position={[0, -101.673, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1120.013, 1120.013, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere003_Material002_0.geometry}
          material={materials['Material.002']}
          position={[-357.404, 392.646, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={41.075}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere008_Material002_0.geometry}
          material={materials['Material.002']}
          position={[199.634, 566.883, -221.001]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={41.075}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/space_boy-standing.glb')
