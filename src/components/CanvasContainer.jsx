import React, { useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense } from 'react';
import Creature from '../components/Creature';
import { CameraControls, Html, OrbitControls, Scroll, ScrollControls, Sphere, useHelper } from '@react-three/drei';
import Tea from '../components/Tea';
import CanvasLoader from '../components/CanvasLoader';
import SpaceBoyLaying from './SpaceBoyLaying';
import SpaceBoyStanding from './SpaceBoyStanding';
import { Leva, useControls } from 'leva';
import { PerspectiveCamera, Vector3 } from 'three';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import CloudStation from './CloudStation';


const CanvasContainer = () => {
  let camera = new PerspectiveCamera()
  camera.fov = 75
  camera.near = 0.1
  camera.far = 1000 
  camera.position.set(0,5,-10)

  useGSAP(() => {

    let cameraRotationTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".third-section", 
        endTrigger: ".fourth-section", 
        start: "top bottom", 
        end: "top top", 
        scrub: true, 
      }
    })

    let cameraPositionTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".second-section", 
        endTrigger: ".third-section", 
        start: "top bottom", 
        end: "top top", 
        scrub: true, 
        // snap: 0.5
      }
    })

    cameraPositionTL.to(camera.position, {
      z:5
    }).to(camera.position, {
      x: 10, 
    })
    
    cameraRotationTL.to(camera.rotation, {
      y: Math.PI / 2, 
    }).to(camera.rotation, {
      y: Math.PI
    })

  }, [])

  return ( 
    <div className='w-full h-full fixed top-0 left-0 -z-10'>
      {/* <Leva />    */}
      <Canvas camera={camera} className='w-full h-full' >
          <Suspense fallback={<CanvasLoader />}>
              <SpaceBoyStanding />
              <CloudStation position={[10, 2, 15]} rotation={[0, 180, 0]}/>
          </Suspense>                
      </Canvas>
    </div>     


  )
}

export default CanvasContainer