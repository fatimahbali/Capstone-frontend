import { useState } from 'react'
import { Route, Link , Routes } from 'react-router';
// import {Link} from 'react-route'
import { Navigate } from 'react-router';
import p1 from "../../assets/images/p1.png"
import './App.css'
import ProjectDetail from '../ProjectDetail/ProjectDetail'
import ProjectIndex from '../ProjectIndex/ProjectIndex'
import HomePage from '../HomePage/home.jsx'
import ProjectForm from '../ProjectForm/ProjectForm.jsx';
import NavBar from '../../components/NavBar/NavBar.jsx';

function App() {
  
  return (
    
    <>
    <NavBar />
    <nav className='logo'>
      <div className='logo-container'>
        {/* <img src={p1} alt="project img" /> */}
      </div>
    </nav>
    <nav>
      <ul>
        {/* <li><Link to="/projects">Projects</Link> </li>
       
        <li><Link to="/projects/new">Create new Project</Link></li> */}

      </ul>
    </nav>
    <Routes>
    <Route path="/home" element={<HomePage/>}/>

    <Route path="/projects" element={<ProjectIndex/>}/>
    <Route path="/projects/:id" element={<ProjectDetail/>}/>
    <Route path="/projects/new" element={<ProjectForm createProject={true}/>}/>
    <Route path="/projects/edit/:id" element={<ProjectForm editProject={true}/>}/>
    <Route path="/projects/delete/:id" element={<ProjectForm deleteProject={true}/>}/>



    <Route path="/*" element={ <Navigate to="/home"/>}/>
</Routes>
    </>
  )
}

export default App
