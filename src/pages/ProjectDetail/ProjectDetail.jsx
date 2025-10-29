import React from 'react'
import "./styles.css"
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import * as projectAPI from "../../utilities/project-api.js"
import { Link } from "react-router";

export default function ProjectDetail() {
  const [projectDetail, setProjectDetail] = useState([])
  const { id } = useParams();

  useEffect(() => {
    async function getSetDetail() {

      try {
        const project = await projectAPI.show(id);
        setProjectDetail(project);
        console.log({project})
        console.log("line18", project)

      } catch (err) {
        console.log(err);
        setProjectDetail(null);
      }
    }
    if (id) getSetDetail()
  }, [id])
  //  if (!projectDetail) return <h2>Loading...</h2>;
  return (
    <section className='page-detail'>
      <div className='project-deatil'>
        <h1>{projectDetail.name}</h1>
        <p><small>{projectDetail.description}</small></p>
        <p>{projectDetail.start_date}</p>
        <p>{projectDetail.end_date}</p>

        <p>{projectDetail.status}</p>

      </div>
      <div className='project-actions'>
        <Link to={`/projects/edit/${projectDetail.id}`} className="btn warn">Edit</Link>
        <Link to={`/projects/delete/${projectDetail.id}`} className="btn danger">Delete</Link>

      </div>
    </section>
  )
}
