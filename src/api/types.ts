export interface UserDataRequest {
    login: string,
    password: string
}
export interface ISchoolInfo {
    id: number,
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
    gender: string,
    phone: string,
    school_class: IClassInfo,
    school: ISchoolInfo
}

export interface PupilPerfomanceRequest {
    pupilId: number
}

export interface PupilPerfomanceResponse {
    id: number,
    average_score: number,
    name: string
}

export interface SchoolAnnouncementRequest {
    schoolId: number
}

export interface SchoolAnnouncementResponse {
    id: number,
    text: string
}

export interface ClassScheduleRequest {
    classId: number
}

export interface ClassScheduleResponse {
    id: number,
    day: string,
    time: string,
    name: string
}

export interface PupilOlympiadRequest {
    pupilId: number
}

export interface PupilOlympiadResponse {
    id: number,
    name: string,
    date: string,
    type: string,
    result: string,
    subject_name: string
}

export interface PupilAchievementRequest {
    pupilId: number
}

export interface PupilAchievementResponse {
    id: number,
    name: string,
    date: string,
    type: string,
}

export interface TeacherRequest {
    classId: number
}

export interface TeacherResponse {
    id: number,
    name: string,
    phone: string,
    gender: string,
    education: string,
    experience: number
}

export interface ClassmatesRequest {
    classId: number
}

export interface ClassmatesResponse {
    id: number,
    name: string,
    phone: string,
    gender: string,
    experience: number
}