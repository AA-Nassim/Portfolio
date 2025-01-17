import { Canvas } from '@react-three/fiber';
import React, { Suspense, useRef } from 'react';
import Creature from '../components/creature';
import { OrbitControls, Sphere, useHelper } from '@react-three/drei';
import { SpotLightHelper } from 'three';
import Tea from '../components/tea';

const Hero = () => {

    return ( 
        <section className='min-h-screen w-full flex flex-col relative '> 
            <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
                <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>Hi, I am about to <span className='waving-hand'>👽</span></p>
                <p className='hero_tag text-gray_gradient'>bogos your bitned</p>
            </div>

            <div className='w-full h-full absolute inset-0'>
                <Canvas className='w-full h-full'>
                    <axesHelper args={[5]} />
                    <gridHelper args={[100, 100]} />
                    <OrbitControls />                    
                    
                    <spotLight position={[0, 2, 0]} intensity={5} />

                    {/* <mesh position={[0, 0, 0]}>
                        <sphereGeometry />
                        <meshStandardMaterial color="hotpink" />
                    </mesh> */}

                    {/* <Creature />  */}
                    <Tea />
                    {/* <ambientLight intensity={1} /> */}
                </Canvas>
            </div>
        </section>
     );
}
 
export default Hero;