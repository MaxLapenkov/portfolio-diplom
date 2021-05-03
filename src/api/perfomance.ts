import { API_BASE } from "../consts/api";

export async function getPupilPefomance(pupilId: number) {
    return await fetch(`${API_BASE}/perfomance/${pupilId}`)
}
  