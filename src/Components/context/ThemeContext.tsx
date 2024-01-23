import { createContext } from "react";
import { theme } from "./theme";

type ThemeContentxProviderProps = {
    children: React.ReactNode
}

export const ThemeContext = createContext(theme)


export const ThemeContentxProvider = ({children}: ThemeContentxProviderProps) => {

    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider> 
}
