import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'


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
      Experience 3
    </div>
  )
}

const Experiences = () => {
  return (
    <section className='w-screen fourth-section text-white-800'>
      <div className='h-screen experience-animation'>
        sosig
      </div>

      <div className='h-screen first-experience'>
        Experience 1
      </div>

      <div className='h-screen second-experience'>
        Experience 2
      </div>

      {/* <div className='h-screen third-experience'>
        Experience 3
      </div> */}

      <ThirdExperience /> 
    </section>
  )
}

export default Experiences