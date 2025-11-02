import React from 'react'
import "./styles.css"
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import * as projectAPI from "../../utilities/project-api.js"
import { Link } from "react-router";
import * as taskAPI from "../../utilities/task-api.js"
import TaskForm from '../../components/Forms/TaskForm.jsx';

export default function ProjectDetail() {

  const [projectDetail, setProjectDetail] = useState([])
  const { id } = useParams();
  const [tasks, setTasks] = useState([])
  const [tasklogs, setTaskLogs] = useState([]);

  useEffect(() => {
    async function getSetDetail() {

      try {
        const project = await projectAPI.show(id);
        setProjectDetail(project);
        console.log({ project })
        // console.log("line18", project)
        const tasks1 = await taskAPI.gettasks(id);
        setTasks(tasks1)

        // const logs= await taskAPI.getTaskLogs(id, taskId);
        // setTaskLogs(logs);
        // console.log(logs);

      } catch (err) {
        console.log(err);
        setProjectDetail(null);
      }
    }
    if (id) getSetDetail()
  }, [id])

  async function handleDelete(e, taskId) {
    e.preventDefault();
    try {

      console.log(projectDetail.id)

      const { tId } = await taskAPI.deleteTask(projectDetail.id, taskId);
      console.log("line41", tId)
      // if its matching the id delete it
      setTasks(prev => prev.filter(task => task.id !== tId));
      // setTasks(t1)

    } catch (err) {
      console.log(err);
    }
  }

  async function handleEdit(e, taskId) {
    e.preventDefault();

    try {

      const t2 = await taskAPI.editTask(projectDetail.id, taskId);
      setTasks(t2)

    } catch (err) {
      console.log(err);
      // setNoteDetail(null);
    }
  }
  async function handleShowLogs(taskId) {
    try {
      const logs = await taskAPI.getTaskLogs(id, taskId);
      setTaskLogs(logs);
      console.log(logs);
    } catch (err) {
      console.log(err);
    }
  }


  //  if (!projectDetail) return <h2>Loading...</h2>;
  return (
    <section className='page-detail'>
      <div className='project-deatil'>
        <h1>{projectDetail.name}</h1>
        <p><small>{projectDetail.description}</small></p>
        <p>Start Date : {projectDetail.start_date}</p>
        <p> → </p>
        <p>End Date : {projectDetail.end_date}</p>

        <p>{projectDetail.status}</p>

      </div>
      <div className='project-actions'>
        <Link to={`/projects/edit/${projectDetail.id}`} className="btn warn">Edit</Link>
        <Link to={`/projects/delete/${projectDetail.id}`} className="btn danger">Delete</Link>

      </div>

      <div className="tasks-section">
        <h2>Tasks</h2>
        <div className="task-form-row">
          <TaskForm
            projectDetail={projectDetail}
            tasks={tasks}
            setTasks={setTasks}
          />
        </div>
        <div className="tasks-table-container">
          <table className="tasks-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Start</th>
                <th>End</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {tasks && tasks.length > 0 ? (
                tasks.map((task) => (
                  <tr key={task.id}>
                    <td>{task.name}</td>
                    <td>{task.description}</td>
                    <td>{task.start_date}</td>
                    <td>{task.end_date}</td>


                    <td>
                      <span className={`status ${task.status.replace(" ", "_").toLowerCase()}`}>
                        {task.status}
                      </span>
                    </td>

                    <td>
                      {/* <button type ="submit" className="btn edit" onClick={(e)=> handleEdit(e, task.id)}>Edit</button> */}
                      <Link
                        to={`/projects/${projectDetail.id}/tasks/edit/${task.id}`}
                        className="btn warn"
                      >
                        Edit
                      </Link>
                      {/* <Link to={`/projects/${projectDetail.id}/tasks/edit/${task.id}`} className="btn warn">Edit</Link> */}
                      <button type="submit" className="btn delete" onClick={(e) => handleDelete(e, task.id)}>Delete</button>
                      <Link to={`/projects/${projectDetail.id}/tasks/${task.id}/logs`} className="btn logs">View Logs</Link>               
                    </td>

                  </tr>

                ))
              ) : (
                <tr>
                  <td colSpan="6" style={{ textAlign: "center" }}>No tasks yet</td>

                </tr>

              )}
            </tbody>
          </table>
        </div>

        {tasklogs.length > 0 && (
          <div className="task-log-box">
            <h3>Task Logs</h3>
            <ul>
              {tasklogs.map(log => (
                <li key={log.id}>
                  {log.action} — {log.timestamp}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
