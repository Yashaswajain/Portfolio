import React from 'react'
import './ProjectCard.scss'
function ProjectCard({title,live,code,image,colorName}) {
    const styling1={
        backgroundImage:`url(${image})`
    }
    const styling2={
        color:`${colorName}`
    }
    return (
        <div className="projectCard" style={styling1}>
        <div className="lowerCard">
        <h2 style={styling2}>{title}</h2>
        <div>
            <a href={live} target="_blank">Live</a>
            <a href={code} target="_blank">Code</a>
        </div>
        </div>
        </div>
    )
}

export default ProjectCard
