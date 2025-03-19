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
    <div className='md:w-[60%] w-[100%] h-[50vh] p-5 relative text-justify'>
      <p ref={SkillTitleRef} className='
      xl:text-[5rem] md:text-[4rem] sm:text-[3.5rem] text-[3rem] font-generalsans 
      font-black text-[#4f4f4f]
      absolute -z-10 left-0 xl:top-[-3rem] md:top-[-2rem] sm:top-[-1.25rem] top-[-1rem]'
      style={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"}}>
        {props.contentTitle} 
      </p>
      <p className='sm:text-3xl text-2xl 
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
    <section className='w-screen h-auto third-section text-white-800 c-space flex flex-col gap-4'>
      
      <SkillContainter id="Skill1" contentTitle={"Research & Devleopement"} 
      contentText={`I have extensive experience working with Unity, having contributed to the production side of several commercial products using the platform. 
      Beyond product development, I was also involved in an R&D project where I integrated a computer vision library with Unity, combining technical innovation with practical application. 
      Additionally, my background includes valuable experience in the research field, allowing me to bridge the gap between cutting-edge concepts and real-world solutions.`}/>
      
      <SkillContainter id="Skill2" contentTitle={"Curiosity & Initiative"} 
      contentText={`Driven by curiosity, I have found my self envolved with multiple associations that brought to life many experiences going from independent game festivals to exhibitions around the science of video games. 
        These experiences sparked a deeper interest in game design, leading me to attend various workshops where I explored creative concepts and mechanics. 
        This journey ultimately culminated in the production of three board games, blending my passion for design with hands-on experience in bringing ideas to life.`}/>
      
      <SkillContainter id="Skill3" contentTitle={"Learning & Growing"} 
      contentText={`I believe that a true master is an eternal student. After diving into Three.js to make this website, I\’m now seeking an opportunity to apply and validate my knowledge in a practical setting. 
      Looking ahead, I’m eager to revisit computer vision, with a focus on exploring how my XR expertise can be integrated into web-based experiences.`}/>

    </section>
  )
}

export default Skills