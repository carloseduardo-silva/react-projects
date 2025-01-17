import { useContext, createContext } from "react";

export const authContext = createContext()

export function AuthContextProvider({children, value}){

    return <authContext.Provider value={value}>
        {children}
    </authContext.Provider>

}

export function useAuthValue(){
    return useContext(authContext)
}