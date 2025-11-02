import { useState } from "react";
import React from 'react'
import * as taskAPI from "../../utilities/task-api";
import { useParams } from "react-router";

export default function TaskForm({projectDetail, tasks, setTasks}) {
    
    const today = new Date().toISOString().slice(0, 10);
    const {id} = useParams();
    const [formData, setFormData] = useState({
    name: "",
    description: "",
    status: "Not_Started",
    start_date: today,
    end_date: today,
    project: projectDetail.id
  });
  
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    
    try {
        e.preventDefault();
        const createdTasks = await taskAPI.createTask(projectDetail.id, formData);
        setTasks(createdTasks);
        setFormData({ ...formData, name: "", description: "" ,status:"",start_date:"", end_date:""  });
        const updatedTasks =await taskAPI.editTask(projectId, taskId, formData);
        console.log(updatedTasks, "line31")
        setTasks(updatedTasks);

    } catch (err) {
      console.log(err);
      setTasks([...tasks]);
    }
  }
    return (
     <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Task Title" />
      <input name="description" value={formData.description} onChange={handleChange} placeholder="Description" />

      <select name="status" value={formData.status} onChange={handleChange}>
        <option value="Not_Started">Not_Started</option>
        <option value="In_Progress">In_Progress</option>
        <option value="Completed">Completed</option>
      </select>

      <input type="date" name="start_date" value={formData.start_date} onChange={handleChange} />
      <input type="date" name="end_date" value={formData.end_date} onChange={handleChange} />

      <button type="submit">Add Task</button>
    </form>
    );
}
