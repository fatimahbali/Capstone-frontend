import React from 'react'
import { Link } from "react-router";
import "./styles.css";
import p1 from "../../assets/images/p1.png";
export default function NavBar() {
  return (
    <header className="navbar">
        <div class="nav-content">
      <div className="nav-logo">
        {/* <img src={p1} alt="project img " /> */}
      </div>

      <nav>
        <Link to="/projects" className="nav-link">Projects</Link>
        <Link to="/projects/new" className="nav-link">Create Project</Link>
      </nav>
      </div>
    </header>
  );
}
