import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'


const ExperienceContent = (props) => {
  const ExperiencePanelRef = useRef()

  useGSAP(() => {
    gsap.fromTo(ExperiencePanelRef.current, {
      width: "0%", 
      height: "0%",
      opacity: 0, 
    }, {
      width: "100%",
      height: "50%",
      opacity: 1, 

      duration: 0.5, 
      ease: "power4.out",

      scrollTrigger: {
        trigger: ExperiencePanelRef.current, 
        // pin: PanelParenRef.current,
        start: "top 35%",
        end : "top 10%", 
        toggleActions: "restart reverse restart reverse", 
        markers: true, 
      }
    })
  }, [])

  return (
    <div className='h-screen w-full c-space flex justify-center experience-content'>
      <div ref={ExperiencePanelRef} className='h-[100%] sm:h-[50%] w-full flex flex-col sm:flex-row bg-blue-600 rounded-[1rem] overflow-hidden'>
        <div className='h-full w-full sm:w-[50%] bg-red-600  p-5'>
          <p className='text-left xl:text-4xl md:text-3xl sm:text-2xl text-xl font-generalsans font-black !leading-normal text-white'> 
            JAMBOUR
          </p>
          <p className='text-left xl:text-2xl md:text-xl sm:text-l text-m font-generalsans !leading-normal text-white'>
            JAMBOURJBOURQSD SQBD QISB DYQBS DYHQSDHSHQDQSDUO QHSDUHQSDUH QSUDUQHSD QHD QDSQ
          </p>
        </div>

        <div className='h-full w-full sm:w-[50%] bg-yellow-600'>

        </div>

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
      <ExperienceContent /> 
      <div className='h-screen animation-exp-1-to-exp-2'>
      </div>
      <ExperienceContent /> 
      <div ref={transitionDivRef} className='h-screen animation-exp-2-to-exp-3'>
      </div>
      <ExperienceContent />
    </section>
  )
}

export default Experiences