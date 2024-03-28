import { ReactNode, createContext,useState } from "react";
 
type ContextType = {    
    idusuario:String;    
    setIdUsuario: (n:string) => void;
}
 
export const UsuarioLogadoContext = createContext<ContextType | null>(null);
 
 
export const UsuarioLogadoProvider = ({ children}: {children: ReactNode}) => {
 
    const[idusuario, setIdUsuario] = useState('');
 
    return (
        <UsuarioLogadoContext.Provider value={{idusuario, setIdUsuario}}>
            {children}
        </UsuarioLogadoContext.Provider>
    )
 
}
 