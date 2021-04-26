export interface UserDataRequest {
    login: string,
    password: string
}

export interface UserDataResponse {
    id: number,
    class_id: number,
    name: string,
    age: number,
    phone: string
}