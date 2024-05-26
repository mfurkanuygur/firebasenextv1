import Cookies from "js-cookie"
import { create } from "zustand"

export const useLoginState = create((set) => ({
    loginState:  false,
    updateLoginState: (newState) => set({ loginState: newState })
}))

export const sessionState = create((set) => ({
    userSessionState:  false,
    updateUserSessionState: (newState) => set({ userSessionState: newState })
}))