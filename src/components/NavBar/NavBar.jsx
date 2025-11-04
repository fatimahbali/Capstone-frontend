import React from 'react'
import { Link, useNavigate } from "react-router";
import "./styles.css";
import p1 from "../../assets/images/p1.png";
import * as usersAPI from "../../utilities/users-api";

export default function NavBar({ user, setUser }) {
  const navigate = useNavigate();


  function handleLogout() {
    usersAPI.logout()
    setUser(null);
    navigate("/")
  }

  if (user) {
    return (
      <>
        <nav className="navbar">
          <div className="nav-content">

            

            <ul className='nav-links'>
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>

              <Link to="/projects">Projects</Link>
              <Link to="/projects/new">New Projects</Link>
            </ul>
            <form id="logout-form" onSubmit={handleLogout}>
              <button type="submit" className="logout-btn">Log out</button>
            </form>
          </div>

        </nav>
      </>
    )
  }


  if (!user)
    return (
      
        <nav className="navbar">
          <div className="nav-content">
          <ul className="nav-links">
            <Link to="/about">About</Link>
            <Link to="/home">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">SignUp</Link>
          </ul> 
          </div>
        </nav>
       
     
    );

}
