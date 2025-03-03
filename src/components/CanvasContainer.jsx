import React from 'react'
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { GizmoHelper, GizmoViewport } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader';
import SpaceBoyStanding from './SpaceBoyStanding';
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
      immediateRender: false,
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
      immediateRender: false,
      scrollTrigger: {
        trigger: ".third-section", 
        endTrigger: ".fourth-section", 
        start: "top bottom", 
        end: "top top", 
        scrub: 0.5, 
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

    // Transition to experience 1: 
    gsap.fromTo(camera.position, {
      z: 5,
      y: 5, 
      x: 10, 
      immediateRender: false, 
    }, {
      z: 9.8,
      y: 4.6,
      x: 10.6,
      immediateRender: false, 
      scrollTrigger: {
        trigger: ".experience-animation", 
        start: "40% 30%", 
        end: "bottom top",
        scrub: 0.5,
      }
    })

    gsap.fromTo(camera.rotation, {
      y: Math.PI,
      immediateRender: false, 
    },  {
      y: 0.8 *  Math.PI,
      immediateRender: false, 
      scrollTrigger: {
        trigger: ".experience-animation", 
        start: "80% 30%", 
        end: "bottom top",
        scrub: 0.5,
      }
    })

    // transition to expeirence 2
    gsap.fromTo(camera.position, {
      x: 10.6,
      y: 4.6,
      z: 9.8,
      immediateRender: false, 
    }, {
      x: 8.4, 
      y: 5.2,
      z: 11.4, 
      immediateRender: false, 
      scrollTrigger: {
        trigger: ".first-experience", 
        start: "60% top", 
        end: "bottom top", 
        scrub: 0.5, 
      }
    })

    gsap.fromTo(camera.rotation, {
      y: 0.8 *  Math.PI,
      immediateRender: false, 
    }, {
      y: 1.3 * Math.PI, 
      // x: -0.1 * Math.PI, 
      immediateRender: false, 
      scrollTrigger: {
        trigger: ".first-experience", 
        start: "70% top", 
        end: "bottom top", 
        scrub: 0.5, 
      }, 
    }
    )

    gsap.fromTo(camera.position, {
      x: 8.4, 
      y: 5.2,
      z: 11.4, 
    }, {
      immediateRender: false, 
      x: 10.45, 
      y: 5.7, 
      z: 13.065,
      scrollTrigger: {
        trigger: ".second-experience", 
        start: "70% top", 
        end: "bottom top", 
        scrub: 0.5, 
        // markers: true, 
      }
    })

    camera.position.set(0, 5, -10)
    camera.rotation.set(0, 0, 0)
  }, [])

  return ( 
    <div className='w-full h-full fixed top-0 left-0 -z-10'>
      {/* <Leva />    */}
      <Canvas camera={camera} className='w-full h-full GigaCanvas'>
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