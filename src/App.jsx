import React from 'react';
import Navbar from './sections/navbar';
import Hero from './sections/hero';
import Footer from './sections/Foot';

const App = () => {
  return ( 
  <main className='max-w-7xl mx-auto'>
      {/* <Navbar /> */}
      <Hero /> 
      <Footer />
  </main> 
  );
}
 
export default App;