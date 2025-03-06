import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'


const ExperienceContent = (props) => {
  return (
    <div className={'h-screen w-full c-space flex items-center justify-center' + ' ' + props.addClass}>
      <div className='h-1/2 w-full bg-blue-600 '>
        Project 1
      </div>
    </div>
  )
}

const Experiences = () => {

  const transitionDivRef = useRef()

  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".animation-exp-2-to-exp-3", 
        start: "top 10%", 
        end: "top top", 
        scrub: true, 
      }
    })
    tl.to(transitionDivRef.current, {
      backgroundColor: "#1E0051"
    })

    tl.to(transitionDivRef.current, {
      backgroundColor: "black"
    })

    tl.to(".GigaCanvas", {
      display: "None",
    })
  }, [])

  return (
    <section className='w-screen fourth-section text-white-800'>
      <div className='h-screen animation-experience-to-exp-1'>
      </div>
      <ExperienceContent addClass='first-experience' textContent=""/> 
      <div className='h-screen animation-exp-1-to-exp-2'>
      </div>
      <ExperienceContent addClass='second-experience'/> 
      <div ref={transitionDivRef} className='h-screen animation-exp-2-to-exp-3'>
      </div>
      {/* <ThirdExperience />  */}
      <ExperienceContent  addClass='third-experience' />
    </section>
  )
}

export default Experiences