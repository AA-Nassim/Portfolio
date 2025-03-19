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
      }
    })
  }, [])

  return (
    <div className='h-screen w-full c-space xl:pl-[15rem] xl:pr-[15rem] experience-content flex justify-center'>
      <div ref={ExperiencePanelRef} className=' 
      w-full h-full flex flex-col md:flex-row justify-center p-5
      rounded-[1rem] overflow-hidden
      bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
      shadow-lg shadow-purple-400
      border-2 border-purple-400
      '>

          <div className='h-full w-[40%]'>
            <p className='text-left xl:text-4xl md:text-3xl sm:text-2xl text-xl font-generalsans font-black !leading-normal text-white'> 
              JAMBOUR
            </p>
            <p className='text-left xl:text-xl md:text-l sm:text-m text-s font-generalsans !leading-normal text-white'>
              JAMBOURJBOURQSD SQBD QISB DYQBS DYHQSDHSHQDQSDUO QHSDUHQSDUH QSUDUQHSD QHD QDSQ
            </p>  
          </div>

          <div className='h-auto  md:h-full w-full
          flex justify-end
          '>
            <video  autoPlay loop muted className='h-[100%] w-auto justify-end rounded-[1rem]'>
              <source src='./assets/Demo_CodeDelta.mp4' type='video/mp4'/>
            </video>
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
      <ExperienceContent 
      contentTitle={`Code Delta`} 
      contentText={``} 
      contentVideo={`./assets/Demo_CodeDelta.mp4`}/> 
      
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