import React from 'react'
import './styles.css'
import { useState, useEffect} from 'react'
import { useNavigate } from "react-router";
import * as projectAPI from "../../utilities/project-api";


export default function ProjectIndex() {
  const [AllProjects, setAllProjects] = useState([]);
  const navigate = useNavigate();
  // const displayAllProjects = AllProjects.map(p => "");
  useEffect(() => {
    async function getAllProjects() {
      try {
        const projData = await projectAPI.index()
        setAllProjects(projData)
        console.log(projData)

      } catch (er) {
        console.log(er)
      }

    } getAllProjects()
  }, [])

  return (
  <section className="projects-page">

    <div className="projects-list">
  {AllProjects.map((p) => (
    <div
      key={p.id}
      className="project-row"
      onClick={() => navigate(`/projects/${p.id}`)}>
        
      <h3>{p.name}</h3>
      <p>{p.description}</p>
      <span className="dates">
        {p.start_date} → {p.end_date}
      </span>
      <p>{p.status}</p>
    </div>
  ))}
</div>
  </section>
);

}
