import { createContext, useState } from "react";

export const FutevoleiContext = createContext();

export const FtvContextProvider = ({children}) =>{

    const[number, setNumber] = useState(1)

    return(
        <FutevoleiContext.Provider value={{number, setNumber}}>
            {children}
        </FutevoleiContext.Provider>
    )

}


