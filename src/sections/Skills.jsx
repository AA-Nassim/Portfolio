import React, { useRef } from 'react'
import SplitType from 'split-type';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';


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
    <div className='w-screen h-full p-5 flex justify-center'>
      <div className='md:w-[60%] w-[80%] h-full relative text-justify'>
        <p ref={SkillTitleRef} className='
        xl:text-[5rem] md:text-[4rem] sm:text-[3.5rem] text-[3rem] font-generalsans 
        font-black text-[#5f5f5f]
        absolute -z-10 left-0 xl:top-[-4rem] md:top-[-3.5rem] sm:top-[-3rem] top-[-2.5rem]'
        style={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"}}>
          {props.contentTitle} 
        </p>
        <p className='xl:text-2xl md:text-xl sm:text-xl text-l 
        font-medium  font-generalsans 
        text-white'>
        {props.contentText}
        </p>
      </div>
      
    </div>
  )
}

const Skills = () => {

  // useGSAP(() => {

  // }, [])

  // return (
  //   <section className='w-screen h-auto third-section text-white-800 c-space flex flex-col gap-[3rem] pt-[10%]' id='vision'>
      
  //     <SkillContainter id="Skill1" contentTitle={"Development"} 
  //     contentText={`I have extensive experience working with Unity, having contributed to the production side of several AR & VR products. 
  //     I was also involved in multiple R&D projects, such as, the implementation of computer vision models for Unity, object tracking for Web AR applications.
  //     `}/>
      
  //     <SkillContainter id="Skill3" contentTitle={"Learning"} 
  //     contentText={`True mastery comes from lifelong learning. After diving into Three.js to make this website, 
  //     I’m eager to apply my freshly acquired knowledge to explore new XR possibilities.`}/>

  //     <SkillContainter id="Skill2" contentTitle={"Curiosity"} 
  //     contentText={`Driven by curiosity, I have found my self involved in a diverse range of projects, 
  //       from developing software solutions to designing and producing three board games.
  //       This relentless pursuit of knowledge and creativity has allowed me to explore different fields, connect ideas in innovative ways, and cultivate a unique vision`}/>
      
      
  //     <div className='h-screen'>

  //     </div>
  //   </section>
  // )
  useGSAP(() => {
    const races = document.querySelector(".skills_container");
    console.log(races.offsetWidth)

    function getScrollAmount() {
      let racesWidth = races.scrollWidth;
      return -(racesWidth - window.innerWidth);
    }

    const tween = gsap.to(races, {
      x: getScrollAmount,
      duration: 3,
      ease: "none",
    });

    ScrollTrigger.create({
      trigger:".skills_container_wrapper",
      start:"top 40%",
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      animation:tween,
      scrub:1,
      invalidateOnRefresh:true,
    })
  }, [])

  return (
    <section className='w-full overflow-hidden h-auto third-section text-white-800 c-space pt-[10%]' id='vision'>
      <div className='skills_container_wrapper'>
        <div className='skills_container w-fit flex flex-row flex-nowrap gap-[3rem]'>
          
          <SkillContainter id="Skill1" contentTitle={"Development"} 
          contentText={`I have extensive experience working with Unity, having contributed to the production side of several AR & VR products. 
          I was also involved in multiple R&D projects, such as, the implementation of computer vision models for Unity, object tracking for Web AR applications.
          `}/>

          <SkillContainter id="Skill3" contentTitle={"Learning"} 
          contentText={`True mastery comes from lifelong learning. After diving into Three.js to make this website, 
          I’m eager to apply my freshly acquired knowledge to explore new XR possibilities.`}/>

          <SkillContainter id="Skill2" contentTitle={"Curiosity"} 
          contentText={`Driven by curiosity, I have found my self involved in a diverse range of projects, 
          from developing software solutions to designing and producing three board games.
          This relentless pursuit of knowledge and creativity has allowed me to explore different fields, connect ideas in innovative ways, and cultivate a unique vision.`}/>
        
        </div>
      </div>
      <div className='h-[100vh]'></div>
    </section>
  )
}

export default Skills