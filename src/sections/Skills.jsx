import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const SkillContainter = (props) => {
  

  return (
    <div className='w-[100%] h-[30vh] p-5 relative'>
      <p className='xl:text-[5rem] md:text-[4rem] sm:text-[3.5rem] text-[3rem] font-generalsans 
      font-black text-[#4f4f4f]

      absolute -z-10 top-[-2.5rem]'>
        BOGOS Binted TITLE
      </p>
      <p className='sm:text-3xl text-2xl 
      font-medium  
      font-generalsans 
      text-white'>
        Jiji la morozo
      </p>
    </div>
  )
}

const Skills = () => {

  useGSAP(() => {

  }, [])

  return (
    <section className='w-screen h-screen third-section text-white-800 c-space flex flex-col gap-4'>
      
      <SkillContainter id="Skill1" content={"1 : interet xr "}/>
      <SkillContainter id="Skill2" content={"JA2 : casé formation + savoir2"}/>
      <SkillContainter id="Skill3" content={"3 :A true master is an eternal student."}/>

    </section>
  )
}

export default Skills