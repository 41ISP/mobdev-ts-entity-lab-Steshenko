import axios from "axios"
import type { IStrapiResponse, IToilet, TToiletInput } from "./Store/types"

export const API_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY

export const apiInstance = axios.create({
    baseURL: API_URL + "/api",
    headers: {
        Authorization: `Bearer ${API_KEY}`,
    },
})

const getToilets = async (): Promise<IStrapiResponse<IToilet[]>> => {
    const res = await apiInstance.get<IStrapiResponse<IToilet[]>>("/toilets", {
        params: {
            populate: "Media",
            sort: "createdAt:desc"
        },
    })
    return res.data
}

const createToilet = async (input: TToiletInput): Promise<TToiletInput> => {
    const res = await apiInstance.post('/toilets', {data: input})
    return res.data.data
}

const deleteToilet = async (id: string): Promise<void> => {
    await apiInstance.delete(`/toilets/${id}`)
}
export const api = { getToilets, createToilet, deleteToilet}