import { API_BASE } from "../consts/api";

export async function getSchoolAnnouncements(school_id: number) {
    return await fetch(`${API_BASE}/announcement/${school_id}`)
}
  