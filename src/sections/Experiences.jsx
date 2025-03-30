import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'


const ExperienceContent = (props) => {
  const ExperiencePanelRef = useRef()

  useGSAP(() => {
    gsap.fromTo(ExperiencePanelRef.current, {
      scale: 0,
      opacity: 0, 
    }, {
      scale: 1, 
      opacity: 1, 

      duration: 0.5, 
      ease: "power4.out",

      scrollTrigger: {
        trigger: ExperiencePanelRef.current, 
        start: "top 60%",
        end : "top 20%", 
        toggleActions: "restart reverse restart reverse", 
        markers: true
      }
    })
  }, [])

  return (
    <div className='md:h-[50%] sm:h-[85%] w-full c-space xl:pl-[15rem] xl:pr-[15rem] experience-content flex justify-center'>
      <div ref={ExperiencePanelRef} className=' 
      w-full h-auto flex flex-col md:flex-row justify-center p-5 gap-5
      rounded-[1rem] overflow-hidden
      bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
      shadow-lg shadow-purple-400
      border-2 border-purple-400
      '>

        <div className='h-full md:w-[30%] w-full'>
          <p className='text-left xl:text-4xl md:text-3xl sm:text-2xl text-xl font-generalsans font-black !leading-normal text-white'> 
            {props.contentTitle}
          </p>
          <p className='text-justify  md:text-xl sm:text-l text-m font-generalsans !leading-normal text-white'>
            {props.contentText}
          </p>  
        </div>

        <div className='h-auto  md:h-full md:max-w-[70%]
        flex justify-end
        '>
          <video  autoPlay loop muted className='h-[100%] w-auto justify-end rounded-[1rem]'>
            <source src={props.contentVideo} type='video/mp4'/>
          </video>
        </div>
          
      </div>
    </div>
  )
}

const Experiences = () => {

  const transitionDivRef = useRef()

  return (
    <section className='w-screen fourth-section text-white-800'>
      <div className='h-[25vh] animation-experience-to-exp-1'>
      </div>
      <ExperienceContent 
      contentTitle={`Code Delta`} 
      contentText={`
        I contributed to the development of a pilot for a youth TV show featuring augmented reality, where two teams compete in AR-based games. 
        My role involved actively participating in the implementation of tracking systems, creating AR challenges, and developing the backend for video stream management. 
        This project was built using Unity and with the ZED SDK for the tracking.  
      `} 
      contentVideo={`./assets/Demo_CodeDelta.mp4`}/> 
      
      <div className='h-[25vh] animation-exp-1-to-exp-2'>
      </div>
      
      <ExperienceContent 
      contentTitle={`Biotherm Up For Summer`} 
      contentText={`
        I worked on an AR mirror experience for an advertising campaign. The goal was to complete three sports challenges to win prizes. 
        I contributed to the development of tracking methods, challenges, and the user interface. 
        The project was developed using Unity, with tracking implemented via MediaPipe.
      `} 
      contentVideo={`./assets/Demo_Biotherm.mp4`}/> 


      <div ref={transitionDivRef} className='h-[25vh] animation-exp-2-to-exp-3'>
      </div>
      
      <ExperienceContent 
      contentTitle={`CoVR`} 
      contentText={`
        CoVR is a research project in HCI aimed at exploring haptic feedback methods in VR. 
        I contributed to the creation of an experience for the Science Festival. 
        The project was developed using Unity with motion capture (OptiTrack).
      `} 
      contentVideo={`./assets/Demo_isir.mp4`}/> 

    </section>
  )
}

export default Experiences