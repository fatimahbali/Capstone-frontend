<h2>Frontend Routes - Client</h2>

<h3>Users</h3>
<table border="1">
<tr><th>Entity</th><th>Component / Page</th><th>Path</th><th>Description</th></tr>
<tr><td>User</td><td>SignupPage</td><td>/signup</td><td>Create a new account</td></tr>
<tr><td>User</td><td>Login</td><td>/login</td><td>Log in to your account</td></tr>
<tr><td>User</td><td>Logout</td><td>/logout</td><td>Log out of your account</td></tr>
</table>


<h3>Projects</h3>
<table border="1">
<tr><th>Entity</th><th>Component</th><th>Path</th><th>Description</th></tr>
<tr><td>Project</td><td>ProjectIndex</td><td>/projects</td><td>List all projects</td></tr>
<tr><td>Project</td><td>ProjectDetail</td><td>/projects/create</td><td>Create a new project</td></tr>
<tr><td>Project</td><td>ProjectDetail</td><td>/projects/:id</td><td>Show project details</td></tr>
<tr><td>Project</td><td>ProjectForm</td><td>/projects/:id/edit</td><td>Edit project information</td></tr>
<tr><td>Project</td><td>ProjectForm</td><td>/projects/:id/delete</td><td>Delete project information</td></tr>


</table>

<h3>Tasks</h3>
<table border="1">
<tr><th>Entity</th><th>Component</th><th>Path</th><th>Description</th></tr>
<tr><td>Task</td><td>TaskList</td><td>/tasks</td><td>List all tasks</td></tr>
<tr><td>Task</td><td>TaskForm</td><td>/tasks/create</td><td>Create a new task</td></tr>
<tr><td>Task</td><td>TaskForm</td><td>/tasks/:id</td><td>Show task details</td></tr>
<tr><td>Task</td><td>TaskForm</td><td>/tasks/:id/edit</td><td>Edit task</td></tr>
<tr><td>Task</td><td>TaskForm</td><td>/tasks/:id/delete</td><td>Delete task</td></tr>



</table>

<h3>Task Log</h3>
<table border="1">
<tr>
<th>Path</th><th>Page / Component</th><th>Description</th>
</tr>

<tr><td>/tasklogs/:task_id</td><td>TaskLogsPage</td><td>Show task log details</td></tr>

</table>

<h3>Associate Task to Project</h3>
<table border="1">
<tr><th>Entity</th><th>Component</th><th>Path</th><th>Description</th></tr>
<tr><td>Project / Task</td><td>ProjectTaskCreate</td><td>/projects/:project_id/tasks/create</td><td>Create a new task for a specific project</td></tr>
</table>

<h3>Associate Task to Task Log</h3>
<table border="1">
<tr>
<th>HTTP Verb</th><th>Path</th><th>Action</th><th>Description</th>
</tr>
<!-- <tr><td>POST</td><td>/tasks/:id/tasklogs</td><td>create</td><td>Create a new task log entry to a specific task</td></tr> -->
<tr><td>GET</td><td>/tasks/:id/tasklogs</td><td>index</td><td>List all task logs related to a specific task</td></tr>
</table>


<!-- ---------------User Stories ----------------- -->
<h3>User Stories - Users / Managers</h3>
<table border="1">
<tr>
<th>ID</th>
<th>User Story</th>
</tr>
<tr><td>U1</td><td>As a new user, I want to register an account so I can log in to the system.</td></tr>
<tr><td>U2</td><td>As a user, I want to log in and log out.</td></tr>
</table>

<h3>Project Stories</h3>
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

<h3>Task Stories</h3>
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

<h3>Task Log Stories</h3>
<table border="1">
<tr>
<th>ID</th>
<th>User Story</th>
<tr><td>TL1</td><td>As a user, I want to view all task logs for a specific task.</td></tr>
</table>

url=[http://localhost:5173/]