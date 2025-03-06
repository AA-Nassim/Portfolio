import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const SkillContainter = (props) => {
  

  return (
    <div className='w-[50%] h-[30vh] border-2 rounded'>
      {props.content}   
    </div>
  )
}

const Skills = () => {

  useGSAP(() => {

  }, [])

  return (
    <section className='w-screen h-[200vh] third-section text-white-800 c-space flex flex-col gap-4'>
      
      <SkillContainter id="Skill1" content={"1 : interet xr "}/>
      <SkillContainter id="Skill2" content={"JA2 : casé formation + savoir2"}/>
      <SkillContainter id="Skill3" content={"3 :A true master is an eternal student."}/>
      <div className='h-screen animation-skills-to-work'>
      </div>
    </section>
  )
}

export default Skills