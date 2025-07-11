import React from 'react'

const Skills_props = ({ name, img }) => {
    return (
        <div id='skills_props_section'>
            <div className='skills_props_container'>
                <img src={img} className='skills_img' />
                
                <h3>{name}</h3>
                </div>
        </div>
    )
}

export default Skills_props