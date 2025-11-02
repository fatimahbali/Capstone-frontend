import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import * as taskAPI from "../../utilities/task-api";
import "./styles.css"

export default function TaskLogs() {

    const { projectId, taskId } = useParams();
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        async function TaskLogsfun() {
            try {
                const data = await taskAPI.getTaskLogs(projectId, taskId);
                setLogs(data);
                //  setLogs(logs);
                console.log("line 17",data)
            } catch (err) {
                console.error(err);
            }
        }
        TaskLogsfun();
    }, [ projectId, taskId]);
return (
  <div className="tasklogs-container">
    <h2>Task Logs</h2>

    {logs.length === 0 ? (
      <p className="no-logs">No logs yet.</p>
    ) : (
      logs.map((log) => {
        const formattedDate = new Date(log.created_at).toLocaleString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        });

        
        return (
          <div key={log.id} className="log-card">
            <p>
              <strong>Task Modified:</strong> {log.msg}
            </p>
            <p>
              <strong>Date:</strong> {formattedDate}
            </p>
            
            {/* <p>
              <strong>Task Description:</strong> {log.description}
            </p>
            <p>
              <strong>Task state:</strong> {log.status}
            </p> */}
            {/* {log.msg && <p><strong>Note:</strong> {log.task}</p>} */}
          </div>
        );
      })
    )}
  </div>
);}
