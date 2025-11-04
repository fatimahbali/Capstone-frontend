import sendRequest from "./sendRequest";
const url = "/users/"

export async function signup(formData) {
      try {
        const response = await sendRequest(`${url}signup/`, "POST", formData)
        localStorage.setItem('accessToken', response.access);
        localStorage.setItem("refreshToken", response.refresh)
        return response.user
    } catch(err) {
        localStorage.removeItem("accessToken")
        localStorage.removeItem("refreshToken")
        return null;
    }
}

export async function login(formData) {
try {
    console.log({formData})
        const response = await sendRequest(`${url}login/`, "POST", formData)
        localStorage.setItem('accessToken', response.access);
        localStorage.setItem("refreshToken", response.access)
        console.log(response, "login check response")
        return response.user
    } catch (err) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem("refreshToken")
        return null;
    }
}

export async function getUser() {
    try {
        const token = localStorage.getItem('accessToken');
        if (token) {
            const response = await sendRequest(`${url}token/refresh/`)
            localStorage.setItem('accessToken', response.access);
            return response.user
        }
        return null;
    } catch (err) {
        console.log(err);
        return null;
    }
}

export async function logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem("refreshToken")

}

