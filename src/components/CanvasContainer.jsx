import React, { useEffect, useLayoutEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Suspense } from 'react';
import Creature from '../components/Creature';
import { GizmoHelper, GizmoViewport } from '@react-three/drei';
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

    let cameraRotationTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".third-section", 
        endTrigger: ".fourth-section", 
        start: "top bottom", 
        end: "top top", 
        scrub: true, 
      }
      // , 
      // onComplete: () => {
      //   console.log(camera.position)
      //   console.log(camera.rotation)
      // }
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
        <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
          <GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="black" />
        </GizmoHelper>
        <Suspense fallback={<CanvasLoader />}>
            <SpaceBoyStanding />  
            {/* <CloudStation position={[Pos.posX, Pos.posY, Pos.posZ]} rotation={[Rot.rotX, Rot.rotY, Rot.rotZ]}/> */}
            <CloudStation/>
        </Suspense>                
      </Canvas>
    </div>     


  )
}

export default CanvasContainer