import React, { useEffect } from 'react'
import "./styles.css"
import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router";
import * as projectAPI from "../../utilities/project-api";
export default function ProjectForm({createProject, editProject, deleteProject}) {

    const { id } = useParams();
    const navigate = useNavigate();
    const initialvalues= {
    name:"",
    description: "",
    start_date: "",
    end_date: "",
    status:"In_progress"};
    const [Form , setForm]=useState(initialvalues);
    const [currProject, setCurrProject] = useState(null);

    useEffect(() =>{
        async function getProject() {
            try{
                const project = await projectAPI.show(id);
                setCurrProject(project);
                setForm(project);
            }catch(err){
                console.log(err)
                setForm(initialvalues)
            }  
        }
        if ((editProject || deleteProject) && id) 
            getProject();},[id])
    // ****************************
    function handleChange(evt) {
      const Updated = { ...Form };
      setForm({ ...Updated, [evt.target.name]: evt.target.value })
    }
    //*****************************
    // async function handleSubmit(e){
    //      e.preventDefault();
    //      try{
           
    //         const newp=await projectAPI.create(Form);
    //         console.log(newp)
    //         setForm(initialvalues)
    //         setForm(newp)
    //         navigate(`/projects/${newp.id}`)

    //     }catch(err){
    //         console.log(err)
    //     }
    // }
    async function handleSubmit(e){
        e.preventDefault();
        try {
        let newp;

        if (editProject) {
        newp = await projectAPI.update(Form, currProject.id);
        } else {
        newp = await projectAPI.create(Form);
        }
        // setForm(initialvalues);
        setForm(newp)
        navigate(`/projects/${newp.id}`);}
        // try{
        //     e.preventDefault();
        //     const newp = editProject? await projectAPI.update(Form,currProject.id): await projectAPI.create(Form);
        //     setForm(initialvalues),
        //     navigate(`/projects/${newp.id}`);
        //     }
            catch(e){
                console.log("This is a Submit error:", e)

            }
    }
    async function handleDelete(evt) {
        evt.preventDefault();
        console.log({currProject: currProject})
        const response = await projectAPI.deleteProject(currProject.id)
        console.log({response})
        if (response.success) {
            setForm(initialvalues)
            navigate(`/projects/`);
        }
    }
    
    //********* edit and delete ******************
    

        if (deleteProject && !currProject) return <h1>Loading...</h1>;
        if (deleteProject && currProject) return (<>
        <div className="page-header">
            <h1>Delete Project?</h1>
        </div>
        <h2>Are you sure you want to delete { currProject.name }?</h2>
        <form onSubmit={handleDelete}>
            <Link to={`/projects/${currProject.id}`} className="btn secondary2">Cancel</Link>
            <button type="submit" className="btn danger">Yes - Delete!</button>
        </form>
    </>)
        
    if (editProject && !currProject)  return <h1>Loading</h1>
    if (createProject || editProject) return (<>
    {/* return ( */}
        
    <section className="form-wrapper">
        <h1>{editProject ? `Edit ${currProject.name}` : "Add New Project"}</h1>

        <form onSubmit={handleSubmit} className="project-form">

        <div className="field">
            <label>Project Name</label>
            <input
            type="text"
            name="name"
            value={Form.name}
            onChange={handleChange}
            placeholder="Enter project name"
            required
            />
        </div>

        <div className="field2">
            <label>Description</label>
            <textarea
            name="description"
            value={Form.description}
            onChange={handleChange}
            placeholder="Describe your project"
            rows="4"
            required
            ></textarea>
        </div>

        <div className="field3">
            <label>Start Date</label>
            <input
            type="date"
            name="start_date"
            value={Form.start_date}
            onChange={handleChange}
            required
            />
        </div>

        <div className="field4">
            <label>End Date</label>
            <input
            type="date"
            name="end_date"
            value={Form.end_date}
            onChange={handleChange}
            required
            />
        </div>
        <label>Project State</label>
        <select name="status" value={Form.status} onChange={handleChange}>
       
        <option value="In_progress">In Progress</option>
        <option value="Completed">Completed</option>
        <option value="On_hold">On hold</option>
      </select>

        <button type="submit" className="submit-btn">Save Project</button>
        </form>
    </section>
    </>
    );

    }
