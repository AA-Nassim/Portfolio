import React from 'react';
import CanvasContainer from '../components/CanvasContainer';


const Hero = () => {

    return ( 
        <section className='h-screen w-screen'> 
            <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 justify-center text-center'>
                <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>Hi, I am about to <span className='waving-hand'>👽</span></p>
                <p className='hero_tag text-gray_gradient text-center'>bogos your bitned</p>
            </div>

            <CanvasContainer /> 
        </section>
     );
}
 
export default Hero;