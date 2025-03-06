import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'


const ExperienceContent = (props) => {
  return (
    <div className={'h-screen w-full c-space flex items-center justify-center' + ' ' + props.addClass}>
      <div className='h-1/2 w-full bg-blue-600'>
        Project 1
      </div>
    </div>
  )
}

const ThirdExperience = () => {

  useGSAP(() => {

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".second-experience", 
        start: "90% top", 
        end: "bottom top", 
        scrub: true, 
        marker: true,
      }
    })
    tl.to(".third-experience ", {
      backgroundColor: "#1E0051"
    })

    tl.to(".third-experience ", {
      backgroundColor: "black"
    })

    tl.to(".GigaCanvas", {
      display: "None",
    })
  
  }, [])

  return (
    <div className='h-screen third-experience bg-transparent'>
      <ExperienceContent addClass='third-experience' />
    </div>
  )
}

const Experiences = () => {
  return (
    <section className='w-screen fourth-section text-white-800'>
      <div className='h-screen experience-animation'>
      </div>
      <ExperienceContent addClass='first-experience' textContent=""/> 
      <ExperienceContent addClass='second-experience'/> 
      <ThirdExperience /> 
    </section>
  )
}

export default Experiences