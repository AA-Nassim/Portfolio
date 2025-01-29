import { Canvas } from '@react-three/fiber';
import React, { Suspense, useRef } from 'react';
import Creature from '../components/Creature';
import { Html, OrbitControls, Scroll, ScrollControls, Sphere, useHelper } from '@react-three/drei';
import { SpotLightHelper } from 'three';
import Tea from '../components/Tea';
import CanvasLoader from '../components/CanvasLoader';
import Footer from './Foot';

const Hero = () => {

    return ( 
        <section className='min-h-screen w-full flex flex-col relative '> 
            {/* <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
                <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>Hi, I am about to <span className='waving-hand'>👽</span></p>
                <p className='hero_tag text-gray_gradient'>bogos your bitned</p>
            </div> */}

            <div className='w-full h-full absolute inset-0'>
                <Canvas className='w-full h-full'>
                    <Suspense fallback={<CanvasLoader />}>
                        {/* <axesHelper args={[5]} />
                        <gridHelper args={[100, 100]} />
                        <OrbitControls/>                     */}
                        
                        <spotLight position={[0, 2, 0]} intensity={5} />

                        <ScrollControls damping={0} pages={2}>
                            
                            <Scroll html>
                                <div className='w-screen fixed top-0 left-0'>
                                    <Footer />
                                </div>
                                
                            </Scroll>
                            <Tea />
                        </ScrollControls>
                        
                    </Suspense>
                    
                </Canvas>
            </div>
        </section>
     );
}
 
export default Hero;