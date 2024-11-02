// Contexto para el nombre de la ciudad

'use client'

import { createContext, useState } from "react";

export const CityContext = createContext();

export function CityProvider({children}) {

    const [cityName, setCityName] = useState('Santiago');

    return (
        <CityContext.Provider value={{cityName, setCityName}}>
            {children}
        </CityContext.Provider>
    )

}