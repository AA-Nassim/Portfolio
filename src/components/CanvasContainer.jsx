import React from 'react'
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

  let tl = gsap.timeline({paused: true})


  let obj = {
    x: 0, 
    y: 0, 
    z: 0
  }

  
  useGSAP(() => {

    tl.to(obj, {
      x:5, 
      scrollTrigger: {
        trigger: ".second-section", 
        start: "top bottom", 
        end: "top top",
        scrub: true, 
        immediateRender: false, 
        markers: true
      }, 
      onUpdate: () => {
        console.log(obj)
      }
    })

    tl.to(obj, {
      x:10, 
      scrollTrigger: {
        trigger: ".third-section", 
        start: "top bottom", 
        end: "top top",
        scrub: true, 
        immediateRender: false, 
        markers: true
      }, 
      onUpdate: () => {
        console.log(obj)
      }
    })

    // tl.to(camera.position, {
    //   z:5, 
    //   duration: 3,
    //   scrollTrigger: {
    //     trigger: ".second-section", 
    //     start: "top bottom", 
    //     end: "top top",
    //     scrub: true, 
    //     immediateRender: false, 
    //     markers: true
    //   }, 
    // })
    
    // let tmp = gsap.timeline({paused: true})
    // tmp.to(camera.position, {
    //   x: 10, 
    // }).to(camera.rotation, {
    //   y: Math.PI / 2, 
    // }, 0)

    // tl.to(tmp, {
    //   progress: 1, 
    //   scrollTrigger: {
    //     trigger: ".third-section", 
    //     start: "top bottom", 
    //     end: "top top",
    //     scrub: true, 
    //     immediateRender: false, 
    //   }, 
    //   onComplete: () => {
    //     console.log(camera.rotation)
    //   }
    // })

    // tl.to(camera.position, {
    //   x: 10,
    //   scrollTrigger: {
    //     trigger: ".third-section", 
    //     start: "top bottom", 
    //     end: "top top",
    //     scrub: true, 
    //     immediateRender: false, 
    //   }, 
    // })
    // tl.to(camera.rotation, {
    //   y: Math.PI / 2, 
    //   scrollTrigger: {
    //     trigger: ".third-section", 
    //     start: "top bottom", 
    //     end: "top top",
    //     scrub: true, 
    //     immediateRender: false, 
    //     markers: true
    //   }, 
    // })

    // tl.to(camera.rotation,
    // {
    //   y: Math.PI, 
    //   scrollTrigger: {
    //     trigger: ".fourth-section", 
    //     start: "top bottom", 
    //     end: "top top", 
    //     scrub: true, 
    //     immediateRender: false, 
    //     markers: true
    //   }, 
    //   onStart: () => {
    //     console.log(camera.rotation)
    //   }, 
    //   onUpdate: () => {
    //     console.log(camera.rotation)
    //   }
    // })


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