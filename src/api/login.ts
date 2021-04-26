import { API_BASE, POST_REQUEST_SETTINGS } from "../consts/api";

export async function loginUser(login: string, password: string) {
    return await fetch(`${API_BASE}/login`, {
        ...POST_REQUEST_SETTINGS,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({login, password}),
    })
}
  