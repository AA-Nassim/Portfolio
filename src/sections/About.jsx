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
            <p id='AboutText' className='sm:text-3xl text-xl font-medium text-white text-center font-generalsans split-text-target' 
            style={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"}}>
                Paragraphe de présentation (formation + interet ) Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br />
                Ducimus, unde molestiae repudiandae maiores ratione expedita in, temporibus laboriosam sint quisquam, incidunt doloribus beatae.<br />
                Nemo porro doloribus quisquam reprehenderit, minima illo?<br />
            </p>
        </section>
     );
}

export default About;