import React from 'react'

const Project_props = ({name,img}) => {
  return (
    <div id='project_props_section'>
      <div className='project_container'> 
        <img src={img} className='project_img'/>
        <h3>{name}</h3>
      </div>
    </div>
  )
}

export default Project_props
