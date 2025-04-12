import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import SplitType from 'split-type';


const SkillContainter = (props) => {
  
  const SkillTitleRef = useRef()


  useGSAP(() => {
    const text = new SplitType(SkillTitleRef.current)
    gsap.fromTo(text.chars, 
      {
        y: 100, 
      }, 
      {
        y: 0, 
        duration: 0.5, 
        stagger: 0.05, 
        ease: 'back.out', 
        scrollTrigger: {
          trigger: SkillTitleRef.current, 
          start: "top 75%",
          end: "top top",
          toggleActions: "restart none none reverse", 
        }
      }
    )
  })

  return (
    <div className='md:w-[60%] w-[100%] h-full p-5 relative text-justify'>
      <p ref={SkillTitleRef} className='
      xl:text-[5rem] md:text-[4rem] sm:text-[3.5rem] text-[3rem] font-generalsans 
      font-black text-[#4d4d4d]
      absolute -z-10 left-0 xl:top-[-3rem] md:top-[-2rem] sm:top-[-1.25rem] top-[-1rem]'
      style={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"}}>
        {props.contentTitle} 
      </p>
      <p className='xl:text-2xl md:text-xl sm:text-xl text-l 
      font-medium  font-generalsans 
      text-white'>
      {props.contentText}
      </p>
    </div>
  )
}
// 
const Skills = () => {

  useGSAP(() => {

  }, [])

  return (
    <section className='w-screen h-auto third-section text-white-800 c-space flex flex-col gap-[3rem] pt-[10%]' id='vision'>
      
      <SkillContainter id="Skill1" contentTitle={"Development"} 
      contentText={`I have extensive experience working with Unity, having contributed to the production side of several AR & VR products. 
      I was also involved in multiple R&D projects, such as, the implementation of computer vision models for Unity, object tracking for Web AR applications, 
      and some projects that many developers would refer to as "black magic".
      `}/>
      
      <SkillContainter id="Skill3" contentTitle={"Learning"} 
      contentText={`True mastery comes from lifelong learning. After diving into Three.js to make this website, 
      I’m eager to apply my freshly acquired knowledge to explore new XR possibilities.`}/>

      <SkillContainter id="Skill2" contentTitle={"Curiosity"} 
      contentText={`Driven by curiosity, I have found my self involved in a diverse range of projects, 
        from developing software solutions to designing and producing three board games.
        This relentless pursuit of knowledge and creativity has allowed me to explore different fields, connect ideas in innovative ways, and cultivate a unique vision`}/>
      
      

    </section>
  )
}

export default Skills