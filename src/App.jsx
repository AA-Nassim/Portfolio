'use client'

import React, { useEffect } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/hero';
import Footer from './sections/Foot';
import About from './sections/About';
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import ReactLenis from 'lenis/react';
import Skills from './sections/Skills';
import Experiences from './sections/Experiences';
import CanvasContainer from './components/CanvasContainer';

gsap.registerPlugin(ScrollTrigger)

const App = () => {

  return ( 
  <ReactLenis root>
    <main className='max-w-7xl mx-auto section-container'>
      <Navbar />
      <CanvasContainer />
        <Hero /> 
        <About />
        <Skills /> 
        <Experiences /> 
      <Footer />
    </main>
  </ReactLenis>
  );
}
 
export default App;