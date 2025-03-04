import React from 'react';

const Footer = () => {
    return ( 
        <section className='relative h-[300px] text-black-100 bg-white-800 fifth-section -z-10'
            style={{clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0, 100%)"}}>
            <div className='relative h-[calc(100vh+300px)] -top-[100vh]'>
                <div className='sticky top-[calc(100vh-300px)] h-[300px]'>
                    JAJ
                </div>
            </div>
        </section>
        
     );
}
 
export default Footer;