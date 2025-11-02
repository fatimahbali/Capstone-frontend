import React from 'react'
import "./styles.css"
import { Link} from "react-router";
import { useState } from 'react';
import * as usersAPI from "../../utilities/users-api";
import { useNavigate  } from "react-router";

export default function home({ user, setUser }) {
  const initialState = { username: "", password: "" }
  const [formData, setFormData] = useState(initialState)


  function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value})
  }

  async function handleLogin(evt) {
    try {
      evt.preventDefault();
      const loggedInUser = await usersAPI.login(formData);
      setUser(loggedInUser);
      navigate("/projects");
    } catch (err) {
      setUser(null);
    }
}

   return (
    <>

    <div className="home-container">
      <h1>Welcome to Project Manager</h1>
      <p>Keep track of your projects and tasks in one simple place.</p>

      <div className="home-buttons">
        <Link to="/projects" className="btn primary">View Projects</Link>
        <Link to="/projects/new" className="btn secondary">Create New</Link>
      </div>
    </div>
     {!user &&
      <section>
        <form onSubmit={handleLogin} className="form-container login">
          <h1>Login</h1>
          <p>
            <label htmlFor="id_username">Username:</label>
            <input value={formData.username} type="text" name="username" maxLength="150" required id="id_username" onChange={handleChange}/>
          </p>
          <p>
            <label htmlFor="id_password">Password:</label>
            <input value={formData.password} type="password" name="password" required id="id_password" onChange={handleChange} />
          </p>
          <button type="submit" className="btn submit">Login</button>
        </form>
      </section>
    }
  </>
  );
}
