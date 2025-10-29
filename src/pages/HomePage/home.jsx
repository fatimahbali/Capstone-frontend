import React from 'react'
import "./styles.css"
import { Link } from "react-router";
export default function home() {
   return (
    <div className="home-container">
      <h1>Welcome to Project Manager</h1>
      <p>Keep track of your projects and tasks in one simple place.</p>

      <div className="home-buttons">
        <Link to="/projects" className="btn primary">View Projects</Link>
        <Link to="/projects/new" className="btn secondary">Create New</Link>
      </div>
    </div>
  );
}
