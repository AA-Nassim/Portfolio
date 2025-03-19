import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import React from 'react';
import SplitType from 'split-type';


const About = () => {

    

    useGSAP(() => {
        const text = new SplitType('#AboutText')
        const chars = text.chars

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
                    // pin: "#AboutText",
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
                    // pin: "#AboutText",
                    start: "top 35%", 
                    end: "top 15%", 
                    scrub: 0.5, 
                }
            }
        )

        // gsap.to(text.words, {
        //     scrollTrigger: {
        //         trigger: ".second-section", 
        //         // pin: "#AboutText",
        //         start: "top 25%", 
        //         end: "top top", 
        //         pin: "#AboutText", 
        //         markers: true, 
        //     }
        // })
    }, [])

    return ( 
        <section className='h-screen w-screen c-space  second-section text-white-800 pt-10'>
            <div className='h-full xl:px-52'>
                <p id='AboutText' className='sm:text-3xl text-xl font-medium text-white text-center font-generalsans split-text-target'>
                With a Master's degree in Computer Science focused on AI and Human-Computer Interaction, I’m eager to channel my expertise into the world of immersive technologies. 
                <br></br>
                I thrive in R&D environments where curiosity drives innovation, and I’m passionate about exploring new ways technology can enhance human experiences.
                <br></br> 
                While I’m based in Paris, I’m fully equipped to collaborate remotely, bringing adaptability and fresh ideas to every project.
                </p>
            </div>
            
        </section>
     );
}

export default About;