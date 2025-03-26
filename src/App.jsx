'use client'

import React, {Suspense} from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/hero';
import Footer from './sections/Foot';
import About from './sections/About';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CanvasLoader from './components/CanvasLoader';
import ReactLenis from 'lenis/react';
import Skills from './sections/Skills';
import Experiences from './sections/Experiences';
import CanvasContainer from './components/CanvasContainer';

gsap.registerPlugin(ScrollTrigger)


const App = () => {

  return ( 
  <ReactLenis root>
    <main className='mx-auto section-container'>
      <Suspense fallback={<CanvasLoader />}>
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
        <Footer />
      </Suspense>                
    </main>
  </ReactLenis>
  );
}
 
export default App;