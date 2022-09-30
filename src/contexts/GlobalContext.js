import React from 'react';
import { createContext } from 'react';

export const GlobalContext = createContext({})

export function InfoProvider({children}) {

    return (
        <GlobalContext.Provider value={{
            valor, 
            nome,
            setNome
        }}>
            {children}
        </GlobalContext.Provider>
    )
}