'use client'

import React, { useEffect } from 'react';
import Navbar from './sections/navbar';
import Hero from './sections/hero';
import Footer from './sections/Foot';
import About from './sections/About';
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import ReactLenis from 'lenis/react';

gsap.registerPlugin(ScrollTrigger)

const App = () => {



  return ( 
  <ReactLenis root>
    <main className='max-w-7xl mx-auto'>
        <Navbar />
        <Hero /> 
        <About />
        <Footer />
    </main> 
  </ReactLenis>
  );
}
 
export default App;