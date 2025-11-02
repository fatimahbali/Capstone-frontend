import sendRequest from "./sendRequest";

const url = "/projects/"

export function gettasks(projectId) {
    return sendRequest(`/projects/${projectId}/tasks/`)
}
export function createTask(projectId, formData) {
    return sendRequest(`/projects/${projectId}/tasks/`, "POST", formData);
}
export async function editTask(projectId, taskId, formData) {
  return sendRequest(`/projects/${projectId}/tasks/${taskId}/`, "PUT", formData);
}
export async function deleteTask(projectId, taskId) {
  return sendRequest(`/projects/${projectId}/tasks/${taskId}/`, "DELETE");
}
// export function getTaskLogs(projectId, taskId) {
//   return sendRequest(`/projects/${projectId}/tasks/${taskId}/logs/`);
// }
export function getTaskLogs(projectId, taskId) {
  return sendRequest(`/projects/${projectId}/tasks/${taskId}/logs/`);
}

