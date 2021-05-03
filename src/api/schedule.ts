import { API_BASE } from "../consts/api";

export async function getClassSchedule(classId: number) {
    return await fetch(`${API_BASE}/schedule/${classId}`)
}
  