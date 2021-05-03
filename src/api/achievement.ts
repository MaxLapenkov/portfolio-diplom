import { API_BASE } from "../consts/api";

export async function getPupilAchievement(pupilId: number) {
    return await fetch(`${API_BASE}/achievements/${pupilId}`)
}