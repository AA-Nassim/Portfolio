import React from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense } from 'react';
import Creature from '../components/Creature';
import { Html, OrbitControls, Scroll, ScrollControls, Sphere, useHelper } from '@react-three/drei';
import Tea from '../components/Tea';
import CanvasLoader from '../components/CanvasLoader';
import SpaceBoyLaying from './SpaceBoyLaying';
import SpaceBoyStanding from './SpaceBoyStanding';
import { Leva, useControls } from 'leva';
import { PerspectiveCamera } from 'three';


const CanvasContainer = () => {
  // const controls = useControls('HackerRoom', {
  //   posX: {
  //     value: 0,
  //     min:-5, 
  //     max:5, 
  //     step:0.1
  //   }, 
  //   posY: {
  //     value: 0,
  //     min:-5, 
  //     max:5, 
  //     step:0.1
  //   }, 
  //   posZ: {
  //     value: 0,
  //     min:-5, 
  //     max:5, 
  //     step:0.1
  //   }, 
  // })

  let camera = new PerspectiveCamera()
  camera.fov = 75
  camera.near = 0.1
  camera.far = 1000 
  camera.position.set(0,5,5)

  return ( 
    <div className='w-full h-full fixed top-0 left-0 -z-10'>
      {/* <Leva />    */}
      <Canvas camera={camera} className='w-full h-full' >
          <Suspense fallback={<CanvasLoader />}>
              {/* basic position : 0, -5, -5 */}
              
              <SpaceBoyStanding />
          </Suspense>                
      </Canvas>
    </div>     


  )
}

export default CanvasContainer