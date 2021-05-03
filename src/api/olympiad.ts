import { API_BASE } from "../consts/api";

export async function getPupilOlympiad(pupilId: number) {
    return await fetch(`${API_BASE}/olympiads/${pupilId}`)
}