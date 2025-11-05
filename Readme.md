<h1>⚙️ Project Flow Frontend</h1>
<p><em>📊 Project & Task Tracking System - Frontend</em></p>


<h2>🔹 Project & Repository Description</h2>

<p>
<b>Project Flow Frontend</b> is a modern, responsive <b>React Single Page Application (SPA)</b> that allows users to manage projects, create tasks, and track their work progress through task logs. 
The frontend provides an intuitive interface for users to efficiently organize, monitor, and update their projects and related activities.
</p>
<h2>Main Features:</h2>
<ul>
<li>🔐 User authentication (Sign up / Login / Logout)</li>
<li>📁 Create, view, edit, and delete projects</li>
<li>🧩 Manage and organize tasks under specific projects</li>
<li>🕒Task logs for tracking work progress and updates</li>
<li>🔗Associations between projects, tasks, and logs</li>
<li>💻Responsive and clean user interface with client-side routing</li>
</ul>

<h3>📦Repository Description</h3><hr/>
<ul>
<li>React 19 SPA built with Vite</li>
<li>React Router 7 for client-side routing</li>
<li>Modular and reusable component architecture</li>
<li>Integration with backend REST API</li>
<li>State management using React Hooks</li>
<li>Fully responsive design for mobile and desktop</li>
</ul>

<h3>📄 Key Pages:</h3>

<ul>
<li>👤<em>SignupPage / LoginPage / LogoutPage</em> – User authentication</li>
<li>📁<em>ProjectsPage</em> – List of all projects</li>
<li>🔍<em>ProjectDetailPage</em> – View detailed project information and related tasks</li>
<li>✏️<em>ProjectFormPage</em> – Create or edit project details</li>
<li>✅ <em>TasksPage</em> – View all tasks</li>
<li>🧾<em>TaskFormPage</em> – Create or update or delete a task</li>
<li>🕒<em>TaskLogsPage</em> – View task logs for a specific task</li>
</ul>



<h2>🔹 Tech Stack</h2>

<h3>💡Core Technologies</h3>
<ul>
<li><b>Framework:</b> React</li>
<li><b>Router:</b> React Router</li>
<li><b>Build Tool:</b> Vite</li>
<li><b>Language:</b> JavaScript (ES6+)</li>
</ul>

<h3>🧑‍💻Development Tools</h3>
<ul>
<li>Bundler: Vite (Fast HMR & optimized builds)</li>
<li>Linting: ESLint</li>
<li>Package Manager: npm</li>
<li>React Plugins: @vitejs/plugin-react</li>
</ul>

<h2>🗺️ Frontend Routes</h2>

<p><b>Base URL:</b> <a href="http://localhost:5173/">http://localhost:5173/</a></p>
<p>All routes below are relative to the base URL.</p>

<h3>👥 Users</h3>
<table border="1">
<tr><th>Entity</th><th>Component / Page</th><th>Path</th><th>Description</th></tr>
<tr><td>User</td><td>SignupPage</td><td>/signup</td><td>Create a new account</td></tr>
<tr><td>User</td><td>Login</td><td>/login</td><td>Log in to your account</td></tr>
<tr><td>User</td><td>Logout</td><td>/logout</td><td>Log out of your account</td></tr>
</table>


<h3>🗂 Projects</h3>
<table border="1">
<tr><th>Entity</th><th>Component</th><th>Path</th><th>Description</th></tr>
<tr><td>Project</td><td>ProjectIndex</td><td>/projects</td><td>List all projects</td></tr>
<tr><td>Project</td><td>ProjectDetail</td><td>/projects/create</td><td>Create a new project</td></tr>
<tr><td>Project</td><td>ProjectDetail</td><td>/projects/:id</td><td>Show project details</td></tr>
<tr><td>Project</td><td>ProjectForm</td><td>/projects/:id/edit</td><td>Edit project information</td></tr>
<tr><td>Project</td><td>ProjectForm</td><td>/projects/:id/delete</td><td>Delete project information</td></tr>


</table>

<h3>🧩 Tasks</h3>
<table border="1">
<tr><th>Entity</th><th>Component</th><th>Path</th><th>Description</th></tr>
<tr><td>Task</td><td>TaskList</td><td>/tasks</td><td>List all tasks</td></tr>
<tr><td>Task</td><td>TaskForm</td><td>/tasks/create</td><td>Create a new task</td></tr>
<tr><td>Task</td><td>TaskForm</td><td>/tasks/:id</td><td>Show task details</td></tr>
<tr><td>Task</td><td>TaskForm</td><td>/tasks/:id/edit</td><td>Edit task</td></tr>
<tr><td>Task</td><td>TaskForm</td><td>/tasks/:id/delete</td><td>Delete task</td></tr>



</table>

<h3>🕒 Task Logs</h3>
<table border="1">
<tr>
<th>Path</th><th>Page / Component</th><th>Description</th>
</tr>

<tr><td>/tasklogs/:task_id</td><td>TaskLogsPage</td><td>Show task log details</td></tr>

</table>

<h3>🧩Associate Task to Project</h3>
<table border="1">
<tr><th>Entity</th><th>Component</th><th>Path</th><th>Description</th></tr>
<tr><td>Project / Task</td><td>ProjectTaskCreate</td><td>/projects/:project_id/tasks/create</td><td>Create a new task for a specific project</td></tr>
</table>

<h3>🕒Associate Task to Task Log</h3>
<table border="1">
<tr>
<th>HTTP Verb</th><th>Path</th><th>Action</th><th>Description</th>
</tr>
<tr><td>GET</td><td>/tasks/:task_id/tasklogs</td><td>index</td><td>List all task logs related to a specific task</td></tr>
</table>


<hr/>

<!-- ---------------User Stories ----------------- -->
<h3>👥 User Stories - Users</h3>
<table border="1">
<tr>
<th>ID</th>
<th>User Story</th>
</tr>
<tr><td>U1</td><td>As a new user, I want to register an account so I can log in to the system.</td></tr>
<tr><td>U2</td><td>As a user, I want to log in and log out.</td></tr>
</table>

<h3>📁Project Stories</h3>
<table border="1">
<tr>
<th>ID</th>
<th>User Story</th>
</tr>
<tr><td>P1</td><td>As a user, I want to create new projects.</td></tr>
<tr><td>P2</td><td>As a user, I want to view a list of all projects.</td></tr>
<tr><td>P3</td><td>As a user, I want to view details of a specific project.</td></tr>
<tr><td>P4</td><td>As a user, I want to edit project details to update the information.</td></tr>
<tr><td>P5</td><td>As a user, I want to delete a project.</td></tr>
</table>

<h3>🧩Task Stories</h3>
<table border="1">
<tr>
<th>ID</th>
<th>User Story</th>
</tr>
<tr><td>T1</td><td>As a user, I want to create new tasks under a project.</td></tr>
<tr><td>T2</td><td>As a user, I want to view all tasks for the project.</td></tr>
<tr><td>T3</td><td>As a user, I want to edit task so I can update details.</td></tr>
<tr><td>T4</td><td>As a user, I want to delete tasks to keep records clean.</td></tr>
</table>

<h3>🕒Task Log Stories</h3>
<table border="1">
<tr>
<th>ID</th>
<th>User Story</th>
<tr><td>TL1</td><td>As a user, I want to view all task logs for a specific task.</td></tr>
</table>
<hr/>

<h3>⚛️ Setup Steps</h3>
<ol>
<li><b>Clone the repository</b>
<pre><code>git clone https://github.com/fatimahbali/Capstone-frontend.git
cd Capstone-frontend
</code></pre></li>


<li><b>Install dependencies</b>
<pre><code>npm install
</code></pre></li>

<li><b>Create environment file</b>
<pre><code># .env
VITE_API_BASE=http://localhost:8000
</code></pre></li>

<li><b>Run development server</b>
<pre><code>npm run dev
</code></pre></li>

<h2>🔹 IceBox Features(Future Enhancements)</h2>
<ul>
<li>📊 Dashboard with project statistics</li>
<li>🔍Task filters and search</li>
<li>📎File upload for tasks</li>
<li>🔔Notifications for task updates</li>
<li>👥 Add an Employee model for staff management</li>
<li>👥 Expand user role system to include Admin and Employee accounts</li>
</ul>
