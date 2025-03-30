'use client'

import React, {Suspense} from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/hero';
import Footer from './sections/Foot';
import About from './sections/About';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ReactLenis from 'lenis/react';
import Skills from './sections/Skills';
import Experiences from './sections/Experiences';
import CanvasContainer from './components/CanvasContainer';
import PageLoader from './components/PageLoader';

gsap.registerPlugin(ScrollTrigger)


const App = () => {

  return ( 
  <ReactLenis root>
    <main className='mx-auto section-container'>
        <Navbar />
        
        <CanvasContainer />

        <Hero /> 

        <div className='h-[50vh] animation-hero-to-about'>
        </div>

        <About />

        <div className='h-screen animation-about-to-skills'>
        </div>

        <Skills /> 
    
        <div className='h-[50vh] animation-skills-to-work'>
        </div>

        <Experiences /> 

        <div className='h-[50vh] animation-work-to-footer'>
        </div>

        <Footer />
        
                   
    </main>
  </ReactLenis>
  );
}
 
export default App;