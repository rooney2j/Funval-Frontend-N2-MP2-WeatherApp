'use client'

import { createContext, useState } from "react";

export const IsFahrenheitContext = createContext();

export function IsFahrenheitProvider({children}) {
    const [isFahrenheit, setIsFahrenheit] = useState(false);

    return (
        <IsFahrenheitContext.Provider value={{isFahrenheit, setIsFahrenheit}}>
            {children}
        </IsFahrenheitContext.Provider>
    )
}