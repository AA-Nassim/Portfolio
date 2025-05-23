import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import React, { useEffect } from 'react';
import SplitType from 'split-type';


const About = () => {

    useGSAP(() => {
        
        
        const text = SplitType.create("#AboutText", { types: "words,chars" });

        gsap.fromTo(text.words, 
            {
                // y: 100, 
                opacity: 0
            }, 
            {
                // y: 0, 
                opacity: 0.2, 
                stagger: 0.05, 
                duration: 0.5, 
                ease: 'power4.out', 
                scrollTrigger: {
                    trigger: ".second-section", 
                    start: "top 50%", 
                    end: "top 35%", 
                    scrub: 0.5, 
                }
            }
        )
        
        gsap.fromTo(text.words, 
            {
                opacity: 0.2, 
            }, 
            {
                opacity: 1, 
                stagger: 0.05, 
                duration: 0.5, 
                ease: 'power4.out', 
                scrollTrigger: {
                    trigger: ".second-section", 
                    start: "top 35%", 
                    end: "top 15%", 
                    scrub: 0.5, 
                }
            }
        )

    }, [])

    return ( 
        <section className='h-screen w-screen c-space  second-section text-white-800 pt-[10%]' id='about'>
            <div className='h-full flex w-full xl:px-[20%]'>
                <p id='AboutText' className='w-full sm:text-3xl text-xl font-medium text-white text-center font-generalsans split-text-target'>
                Artificial Intelligence (AI) and Human-Computer Interaction (HCI) Engineer with strong experience in developing immersive augmented and virtual reality (AR/VR) applications on Unity. 
                <br></br>
                Skilled in training and deploying AI models for real-world use cases. 
                <br></br>
                Multilingual (Arabic, French, English) with a robust academic background from Sorbonne University.
                <br></br>
                I thrive in R&D environments where curiosity drives innovation ! 
                </p>
            </div>
            
        </section>
     );
}

export default About;