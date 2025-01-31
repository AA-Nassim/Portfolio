import React from 'react';
import Navbar from './sections/navbar';
import Hero from './sections/hero';
import Footer from './sections/Foot';
import About from './sections/About';

const App = () => {
  return ( 
  <main className='max-w-7xl mx-auto'>
      <Navbar />
      <Hero /> 
      <About />
      <Footer />
  </main> 
  );
}
 
export default App;