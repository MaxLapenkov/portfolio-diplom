export const API_BASE = 'https://lapenkov-portfolio-server.herokuapp.com'

export const POST_REQUEST_SETTINGS: RequestInit = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    mode: 'cors'
}