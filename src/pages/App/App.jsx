import { useState, useEffect } from 'react'
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
import TaskForm from '../../components/Forms/TaskForm.jsx';
import EditTask from '../Tasks/EditTask.jsx';
import TaskLogs from '../TaskLogs/TaskLogs.jsx';
import Navbar from '../../components/NavBar/NavBar.jsx';
import SignupPage from '../SignupPage/SignupPage';
import AboutPage from '../AboutApp/AboutApp.jsx'
import { getUser } from '../../utilities/users-api';
import AboutApp from '../AboutApp/AboutApp.jsx';
import LogIn from '../Login/LogIn.jsx';

export default function App() {
  const [user, setUser] = useState(getUser())
  const routes = ["about", "projects", "home"]
  const mainCSS = routes.filter(r => location.pathname.includes(r) ? r : "").join(" ")

  useEffect(() => {
    async function checkUser() {
      const foundUser = await getUser();
      setUser(foundUser)
    }
    checkUser()
  }, [])

  return (
    
    <>
    <header>
        <div className={`${mainCSS} header-logo-container`}>
          <Link href="/"></Link>
          </div>
          <nav>
    <ul>
      <Navbar user={user} setUser={setUser} />
    </ul>
   </nav>
   </header>
   <main>
    <Routes>
      {user ? <>
    <Route path="/home" element={<HomePage user={user} setUser={setUser} />} />
    <Route path="/signup" element={<SignupPage user={user} setUser={setUser} />}/>
    <Route path="/about" element={<AboutApp />}/>
    <Route path="/login"      element={<LogIn user={user} setUser={setUser} />}/>

    <Route path="/projects" element={<ProjectIndex/>}/>
    <Route path="/projects/:id" element={<ProjectDetail/>}/>
    <Route path="/projects/new" element={<ProjectForm createProject={true} />}/>
    <Route path="/projects/edit/:id" element={<ProjectForm editProject={true} />}/>
    <Route path="/projects/delete/:id" element={<ProjectForm deleteProject={true} />}/>
    <Route path="/projects/:projectId/tasks/edit/:taskId" element={<EditTask  />} />
    <Route path="/projects/:projectId/tasks/:taskId/logs" element={<TaskLogs />} />

    <Route path="/*" element={ <Navigate to="/home"/>}/>
    </> : <>
          <Route path="/home"                      element={<HomePage user={user} setUser={setUser} />} />
          <Route path="/about"                     element={<AboutPage />} />
          <Route path="/signup"                    element={<SignupPage user={user} setUser={setUser} />}/>
          <Route path="/login"                    element={<LogIn user={user} setUser={setUser} />}/>

          <Route path="/*"                         element={<Navigate to="/home"/>}/>
        </>}
</Routes>
</main>
</>
       );
      }

