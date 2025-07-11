import React from 'react'
import Project_Data from './Project_Data'
import Project_props from './Project_props'
const Project = () => {
  return (
    <div id='projects_section'>
    {Project_Data.map((project)=>(
        <Project_props
        key={project.id}
        name={project.name}
        img={project.img}
        />
    ))}
    </div>
  )
}

export default Project
