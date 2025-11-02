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
        {/* <header className="navbar">
        <div className="nav-content">
      <div className="nav-logo">
        {/* <img src={p1} alt="project img " /> */}
        {/* </div> */}
        <li><Link to="/home">Home</Link></li>

        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/projects/new">New Projects</Link></li>
        <form id="logout-form" onSubmit={handleLogout}>
          <button type="submit">Log out</button>
        </form>

      </>
    )
  }


  if (!user)
    return (
      <>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/signup">SignUp</Link></li>
      </>
    )

}
