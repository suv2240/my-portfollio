import React from 'react'
import data from './skillsData'
import Skills_props from './skills_props'
const Skills = () => {

  return (
    <div id='skills_section'>
      {data.map((item)=>(
     <Skills_props
     key={item.id}
     name={item.name}
     img={item.Image}
     
     />
     ))}
    </div>
  )
}

export default Skills
