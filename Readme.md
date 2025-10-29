<h2>Frontend Routes - Client</h2>

<h3>Users / Managers</h3>
<table border="1">
<tr><th>Entity</th><th>Component</th><th>Path</th><th>Description</th></tr>
<tr><td>User / Manager</td><td>UserList</td><td>/users</td><td>List all users or managers</td></tr>
<tr><td>User / Manager</td><td>UserCreate</td><td>/users/create</td><td>Create a new user or manager</td></tr>
<tr><td>User / Manager</td><td>UserDetail</td><td>/users/:id</td><td>Show details of a user or manager</td></tr>
<tr><td>User / Manager</td><td>UserEdit</td><td>/users/:id/edit</td><td>Edit user or manager details</td></tr>

</table>


<h3>Projects</h3>
<table border="1">
<tr><th>Entity</th><th>Component</th><th>Path</th><th>Description</th></tr>
<tr><td>Project</td><td>ProjectList</td><td>/projects</td><td>List all projects</td></tr>
<tr><td>Project</td><td>ProjectCreate</td><td>/projects/create</td><td>Create a new project</td></tr>
<tr><td>Project</td><td>ProjectDetail</td><td>/projects/:id</td><td>Show project details</td></tr>
<tr><td>Project</td><td>ProjectEdit</td><td>/projects/:id/edit</td><td>Edit project information</td></tr>


</table>

<h3>Tasks</h3>
<table border="1">
<tr><th>Entity</th><th>Component</th><th>Path</th><th>Description</th></tr>
<tr><td>Task</td><td>TaskList</td><td>/tasks</td><td>List all tasks</td></tr>
<tr><td>Task</td><td>TaskForm</td><td>/tasks/create</td><td>Create a new task</td></tr>
<tr><td>Task</td><td>TaskForm</td><td>/tasks/:id</td><td>Show task details</td></tr>
<tr><td>Task</td><td>TaskEdit</td><td>/tasks/:id/edit</td><td>Edit task details</td></tr>

</table>

<h3>Task Log</h3>
<table border="1">
<tr>
<th>Path</th><th>Page / Component</th><th>Description</th>
</tr>
<!-- <tr><td>/tasklogs</td><td>TaskLogListPage</td><td>List all task logs</td></tr>
<tr><td>/tasklogs/new</td><td>TaskLogCreatePage</td><td>Create a new task log (it will be linked to the task)</td></tr> -->
<tr><td>/tasklogs/:id</td><td>TaskLogDetailPage</td><td>Show task log details</td></tr>
<tr><td>/tasklogs/:id/edit</td><td>TaskLogEditPage</td><td>Update or mark complete/incomplete</td></tr>
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
<tr><td>POST</td><td>/tasks/:id/tasklogs</td><td>create</td><td>Create a new task log entry linked to a specific task</td></tr>
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
<tr><td>U2</td><td>As a manager or user, I want to log in and log out.</td></tr>
</table>

<h3>Project Stories</h3>
<table border="1">
<tr>
<th>ID</th>
<th>User Story</th>
</tr>
<tr><td>P1</td><td>As a manager or user, I want to create new projects so I can organize team work.</td></tr>
<tr><td>P2</td><td>As a manager or user, I want to view a list of all projects to track the progress.</td></tr>
<tr><td>P3</td><td>As a manager or user, I want to view details of a specific project.</td></tr>
<tr><td>P4</td><td>As a manager or user, I want to edit project details to update the information.</td></tr>
<tr><td>P5</td><td>As a manager or user, I want to delete a project.</td></tr>
</table>

<h3>Task Stories</h3>
<table border="1">
<tr>
<th>ID</th>
<th>User Story</th>
</tr>
<tr><td>T1</td><td>As a manager or user, I want to create new tasks under a project.</td></tr>
<tr><td>T2</td><td>As a manager or user, I want to view all tasks for the project.</td></tr>
<tr><td>T3</td><td>As a manager or user, I want to edit or comment on a task so I can update details.</td></tr>
<tr><td>T4</td><td>As a manager or user, I want to delete tasks to keep records clean.</td></tr>
</table>

<h3>Task Log Stories</h3>
<table border="1">
<tr>
<th>ID</th>
<th>User Story</th>

<tr><td>TL1</td><td>As a user, I want to view all my task logs so I can review what I’ve completed.</td></tr>
<tr><td>TL2</td><td>As a manager or user, I want to view all task logs.</td></tr>
<tr><td>TL3</td><td>As a user, I want to update a task log to correct or add details.</td></tr>
<tr><td>TL4</td><td>As a user, I want to mark a task log as complete or incomplete.</td></tr>
</table>
