import axios from "axios";

export const axiosInstance = axios.create({ baseURL: "http://www.boredapi.com" });
export const activityTypes = ["All", 'Busywork', 'Recreational', 'Education', 'Social', 'Relaxation', 'Cooking', 'Charity', 'Music', 'Diy']

export type ActivityItem = {
    accessibility: number,
    activity: string,
    participants: number,
    price: number,
    type: string
} & {error: string}