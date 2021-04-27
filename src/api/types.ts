export interface UserDataRequest {
    login: string,
    password: string
}
export interface ISchoolInfo {
    name: string,
    address: string,
    phone: string
}

export interface IClassInfo {
    id: number,
    parallel: number,
    form_master: number,
    letter: string
}
export interface UserDataResponse {
    id: number,
    class_id: number,
    name: string,
    age: number,
    phone: string,
    school_class: IClassInfo,
    school: ISchoolInfo
}