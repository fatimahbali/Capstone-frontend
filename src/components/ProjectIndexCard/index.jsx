import React from 'react'

export default function index({ project }) {

    return (
        <div className='project-card'>
            <Link to={`/projects/${project.id}`}>
            <h2>{project.name}</h2>
            <p><small>{project.description}</small></p>
            {/* <p>{project.start_date}</p>
            <p>{project.end_date}</p>

            <p>{project.status}</p> */}

            </Link>
        </div>

    )
}
