import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'


const Tag = (props) => {
  return (
    <div className="relative inline-flex group">
      <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px 
      bg-[#FF675E] 
      rounded-xl blur-lg 
      group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
      </div>

      <p className="relative items-center justify-center 
      px-2 py-1
      text-sm font-bold text-purple-900 
      transition-all duration-200 
      bg-white font-pj rounded-full 
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
        {props.tagContent}
      </p>
    
    </div>
  )
}

const ExperienceContent = (props) => {
  const ExperiencePanelRef = useRef()

  useGSAP(() => {
    gsap.fromTo(ExperiencePanelRef.current, {
      scale: 0.5,
      opacity: 0.25, 
    }, {
      scale: 1, 
      opacity: 1, 

      duration: 0.5, 
      ease: "power4.out",

      scrollTrigger: {
        trigger: ExperiencePanelRef.current, 
        start: "top 80%",
        end : "top 10%", 
        toggleActions: "restart reverse restart reverse", 
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

        <div className='h-full md:w-[40%] w-full'>
          <p className='text-left xl:text-4xl md:text-3xl sm:text-2xl text-xl font-generalsans font-black !leading-normal text-white'> 
            {props.contentTitle}
          </p>
          <p className='text-left  font-generalsans font-semibold !leading-normal text-white'>
            {props.contentInfo}
          </p>
          <p className='text-justify  md:text-xl sm:text-l text-m font-generalsans py-[1rem] !leading-normal text-white'>
            {props.contentText}
          </p>  
          <div className='flex flex-row gap-5 flex-wrap'>
          {props.contentTags.map((tag, i) => <Tag tagContent={tag} key={i}/>)}
          </div>
        </div>

        <div className='h-auto  md:h-full md:max-w-[60%]
        flex justify-end
        '>
          <video  autoPlay loop muted  className='h-[100%] w-auto justify-end rounded-[1rem]'>
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
    <section className='w-screen overflow-hidden fourth-section text-white-800' id='work'>
      
      <div className='h-[25vh] animation-experience-to-exp-1'>
      </div>
      
      <ExperienceContent 
      contentTitle={`Project : CoVR`} 
      contentInfo= {`ISIR - Paris | March 2025 - 1 Month`}
      contentText={`
        CoVR is a research project in HCI aimed at exploring haptic feedback methods in VR. 
        I contributed to the creation of a proof of concept, where the user could interact with multiple virtual objects that were mapped to a limited number of real objects.
        Object tracking was achieved with an OptiTrack motion capture system, and the demo was built in Unity for the Meta Quest headset.
      `} 
      contentTags={["VR", "Motion Capture", "Unity", "C#"]}
      contentVideo={`./assets/Demo_isir.mp4`}/> 

      
      
      <div className='h-[25vh] animation-exp-1-to-exp-2'>
      </div>
      <ExperienceContent 
      contentTitle={`Project : Code Delta`} 
      contentInfo= {`ATOMIC - Paris | August 2024 - 2 Months`}
      contentText={`
        Code Delta is a pilot for a youth TV show featuring augmented reality, where two teams compete in AR-based games. 
        My role was to setup the tracking systems (ZED & Mediapipe), 
        create the AR challenges, and develope the backend for video stream management. 
        I Worked closely with technical and creative teams in a fast-paced audiovisual production setting.
      `} 
      contentTags={["AR", "Computer Vision", "Unity", "C#", "Python"]}
      contentVideo={`./assets/Demo_CodeDelta.mp4`}/> 
      

      <div ref={transitionDivRef} className='h-[25vh] animation-exp-2-to-exp-3'>
      </div>
      
      <ExperienceContent 
      contentTitle={`Project : Biotherm`} 
      contentInfo= {`ATOMIC - Paris | June 2024 - 1 Month`}
      contentText={`
        I worked on an AR mirror experience for an advertising campaign for Biotherm. 
        The goal was to complete three challenges to win prizes. 
        I contributed to the development of the tracking system, the gameplay, the UI.
        Built data tracking pipelines via Unity Analytics. 
        Successfully launched at Oslo Airport, reaching 2000+ users in one week.
      `} 
      contentTags={["AR", "Computer Vision", "Unity", "C#", "Unity Analytics"]}
      contentVideo={`./assets/Demo_Biotherm.mp4`}/> 
      

    </section>
  )
}

export default Experiences