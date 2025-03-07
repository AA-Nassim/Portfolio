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
  camera.near = 0.01
  camera.far = 1000 
  camera.position.set(0,5,-10)

  useGSAP(() => {
    // First transtion
    gsap.fromTo(camera.position, {
      x: 0, 
      y: 5, 
      z: -10
    }, {
      x: 0, 
      y: 5, 
      z: 5, 
      immediateRender: false, 
      scrollTrigger: {
        trigger: ".animation-hero-to-about", 
        start: "top bottom", 
        end: "top top", 
        scrub: 0.5, 
      }
    })

    //Second transition 
    gsap.fromTo(camera.position, {
      x: 0, 
      y: 5, 
      z: 5, 
    }, {
      x: 10, 
      y: 5, 
      z: 5, 
      immediateRender : false, 
      scrollTrigger: {
        trigger: ".animation-about-to-skills", 
        start: "top bottom", 
        end: "top top", 
        scrub: 0.5, 
      }
    })

    gsap.fromTo(camera.rotation, {
      x: 0, 
      y: 0, 
      z: 0, 
    }, {
      x: 0, 
      y: Math.PI / 2, 
      z: 0, 
      immediateRender : false, 
      scrollTrigger: {
        trigger: ".animation-about-to-skills", 
        start: "top bottom", 
        end: "top top", 
        scrub: 0.5, 
      }
    })

    // Third transition : 

    gsap.fromTo(camera.rotation, {
      x: 0, 
      y: Math.PI / 2, 
      z: 0, 
    }, {
      x: 0, 
      y: Math.PI, 
      z: 0, 
      immediateRender : false, 
      scrollTrigger: {
        trigger: ".animation-skills-to-work", 
        start: "top bottom", 
        end: "top top", 
        scrub: 0.5, 
      }
    })

    // Transition to experience 1: 
    gsap.fromTo(camera.position, {
      z: 5,
      y: 5, 
      x: 10, 
    }, {
      z: 9.8,
      y: 4.6,
      x: 10.6,
      immediateRender: false, 
      scrollTrigger: {
        trigger: ".animation-experience-to-exp-1", 
        start: "top 50%", 
        end: "top top",
        scrub: 0.5,
      }
    })

    gsap.fromTo(camera.rotation, {
      y: Math.PI,
    },  {
      y: 0.8 *  Math.PI,
      immediateRender: false, 
      scrollTrigger: {
        trigger: ".animation-experience-to-exp-1", 
        start: "top 50%", 
        end: "top top",
        scrub: 0.5,
      }
    })

    // transition to expeirence 2
    gsap.fromTo(camera.position, {
      x: 10.6,
      y: 4.6,
      z: 9.8,
    }, {
      x: 8.4, 
      y: 5.2,
      z: 11.4, 
      immediateRender: false, 
      scrollTrigger: {
        trigger: ".animation-exp-1-to-exp-2", 
        start: "top bottom", 
        end: "top top", 
        scrub: 0.5, 
      }
    })

    gsap.fromTo(camera.rotation, {
      y: 0.8 *  Math.PI,
    }, {
      y: 1.3 * Math.PI, 
      // x: -0.1 * Math.PI, 
      immediateRender: false, 
      scrollTrigger: {
        trigger: ".animation-exp-1-to-exp-2", 
        start: "top bottom", 
        end: "top top", 
        scrub: 0.5, 
      }, 
    }
    )

    //Transition to experience 3
    gsap.fromTo(camera.position, {
      x: 8.4, 
      y: 5.2,
      z: 11.4, 
    }, {
      immediateRender: false, 
      x: 10.435951,
      y: 5.696573,
      z: 13.05359, 
      scrollTrigger: {
        trigger: ".animation-exp-2-to-exp-3", 
        start: "top bottom", 
        end: "top top", 
        scrub: 0.5, 
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