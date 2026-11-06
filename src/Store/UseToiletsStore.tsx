import { create } from "zustand";
import type { IToilet, IStrapiResponse } from "./types";
import { api } from "../api";

interface IGameStore {
    games: IStrapiResponse<IToilet[]> | undefined,
    getGames: () => void
}

export const useGamesStore = create<IGameStore>((set) => 
    ({
    games: undefined,
    getGames: async () => {
        try {
            const res = await api.getToilets()
            set({games: res})
        } catch (error) {
            console.error(error)
        }
    },
}))