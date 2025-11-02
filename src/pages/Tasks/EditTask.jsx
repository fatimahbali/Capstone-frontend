import React from 'react'
import { useState, useEffect } from "react";
import "./styles.css"
import { useParams, useNavigate } from "react-router";
import * as taskAPI from "../../utilities/task-api";

export default function EditTask(task) {

    const { projectId, taskId } = useParams();

    const navigate = useNavigate();

    const [formData, setFormData] = useState({

    name: "",
    description: "",
    status: "Not_Started",
    start_date: "",
    end_date: "",
    project: projectId
  });

  useEffect(() => {
    async function editTask1() {
      const tasks = await taskAPI.gettasks(projectId, taskId);
      console.log({tasks})
      console.log({taskId})
      const task = tasks.filter((task) => task.id === parseInt(taskId))[0]
      console.log({task})
      setFormData(task);  
    }
    editTask1();
  }, [task]);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value, project: projectId });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await taskAPI.editTask(projectId, taskId, formData);
    navigate(`/projects/${projectId}`);  
  }

  return (
    <div className="page-detail">
      <h2>Edit Task</h2>

      <form onSubmit={handleSubmit} className="task-edit-form">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Task Title"
        />

        <input
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
        />

        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="Not_Started">Not Started</option>
          <option value="In_Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <input type="date" name="start_date" value={formData.start_date} onChange={handleChange} />
        <input type="date" name="end_date" value={formData.end_date} onChange={handleChange} />

        <button type="submit" className="btn submit">Save Changes</button>
      </form>
    </div>
  );
}