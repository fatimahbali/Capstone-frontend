import sendRequest from "./sendRequest";

const url = "/projects/"

export async function index() {
    return sendRequest(url)
}

export function show(projectId) {
    return sendRequest(`${url}${projectId}/`);
}

export function create(projectData) {
return sendRequest(url, "POST", projectData);
}

export function getAllProjects() {
  return sendRequest(url);
}
export async function update(projectData, projectId) {
    return sendRequest(`${url}${projectId}/`, "PUT", projectData)
}

export async function deleteProject(projectId) {
    return sendRequest(`${url}${projectId}/`, "DELETE")
}