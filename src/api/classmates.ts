import { API_BASE } from "../consts/api";

export async function getClassmates(classId: number) {
    return await fetch(`${API_BASE}/pupils/classmates/${classId}`)
}
  