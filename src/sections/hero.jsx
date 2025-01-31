import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect, useRef } from 'react';
import Creature from '../components/Creature';
import { Html, OrbitControls, Scroll, ScrollControls, Sphere, useHelper } from '@react-three/drei';
import Tea from '../components/Tea';
import CanvasLoader from '../components/CanvasLoader';
import { useGSAP } from '@gsap/react';





const Hero = () => {
    
    const canvasRef = useRef()

    var teaPosition = 0

    useGSAP(() => {
        canvasRef.current.addEventListener("click", () => {
            gsap.to(teaPosition, {
                        
            })
        })
    })

    return ( 
        <section className='min-h-screen w-full flex flex-col relative '> 
            {/* <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
                <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>Hi, I am about to <span className='waving-hand'>👽</span></p>
                <p className='hero_tag text-gray_gradient'>bogos your bitned</p>
            </div> */}

            <div className='w-full h-full absolute inset-0'>
                <Canvas className='w-full h-full' ref={canvasRef}>
                    <Suspense fallback={<CanvasLoader />}>
                        {/* <axesHelper args={[5]} />
                        <gridHelper args={[100, 100]} />
                        <OrbitControls/>                     */}
                        
                        <spotLight position={[0, 2, 0]} intensity={5} />
                        <Tea teaPosition={0}/>
                    </Suspense>
                    
                </Canvas>
            </div>
        </section>
     );
}
 
export default Hero;