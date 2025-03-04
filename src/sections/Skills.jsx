import React from 'react'

const SkillContainter = (props) => {
  return (
    <div className='w-full h-[30%] border-2 rounded'>
      {props.content}
    </div>
  )
}

const Skills = () => {

  return (
    <section className='w-[50%] h-screen third-section text-white-800 c-space flex flex-col gap-4'>
      
      <SkillContainter content={"JAJ"}/>
      <SkillContainter content={"JA2"}/>
      <SkillContainter content={"JA3"}/>
    </section>
  )
}

export default Skills