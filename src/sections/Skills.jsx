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
        font-black text-white
        '
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
          
          <SkillContainter id="Skill1" contentTitle={"Immersive Realities"} 
          contentText={`
            I have extensive experience working with Unity, having contributed to the production side of several AR & VR products. 
          Whether optimizing for Meta Quest or prototyping mobile AR filters, I thrive on solving spatial design challenges and making virtual interactions feel real.
          `}
          />

          <SkillContainter id="Skill3" contentTitle={"Intelligent Systems"} 
          contentText={`
          With a strong foundation in AI, I’ve designed and deployed models for real-world applications specializing in computer vision. 
          My work includes R&D projects like implementing models for body and object tracking, gesture recognition for Unity.          
          `}/>

          <SkillContainter id="Skill2" contentTitle={"Limitless Curiosity"} 
          contentText={`
          Driven by curiosity, I have found my self involved in a diverse range of projects, from developing software solutions to designing and producing three board games on my free time.
          This relentless pursuit of knowledge and creativity has allowed me to explore different fields, connect ideas in innovative ways, and cultivate a unique vision.
          `}/>
        
        </div>
      </div>
      <div className='h-[100vh]'></div>
    </section>
  )
}

export default Skills