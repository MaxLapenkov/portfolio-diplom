import { API_BASE } from "../consts/api";

export async function getTeacher(classId: number) {
    return await fetch(`${API_BASE}/teacher/${classId}`)
}
  