import { createContext, ReactNode, useEffect, useState } from "react";

type ContextType = {
    name:string;
    setName: (n:string) => void;
}

export const UsuarioLogadoContext = createContext<ContextType | null>(null);

export const UsuarioLogadoProvider = ({children}: {children: ReactNode}) => {

    const[name, setName] = useState(() => {
        const storedname = localStorage.getItem("ContextName")
        return storedname ? storedname : "";
    });

    useEffect(() => {
        if (name !== '') {
            localStorage.setItem('ContextName', name);
        }
    } , [name])

    return (
        <UsuarioLogadoContext.Provider value={{name, setName}}>
            {children}
        </UsuarioLogadoContext.Provider>
    )
}