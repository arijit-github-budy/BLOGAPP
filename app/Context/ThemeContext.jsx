'use client';
import { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext(null);

const getFormLocalStorage = () => {
    if(typeof window != undefined){
        let themeMode = localStorage.getItem('themeMode');
        themeMode = themeMode && (String(themeMode).toLowerCase() == 'dark' || String(themeMode).toLowerCase() == 'light') ? themeMode : 'light';
        return themeMode;
    }
}

export const ThemeContextProvider = ({children}) => {
    const [themeMode, setThemeMode] = useState(() => {
        return getFormLocalStorage();
    });

    const themeToggle = () => {
        setThemeMode(String(themeMode).toLowerCase() == 'light' ? 'dark' : 'light');
    }

    useEffect(() => {
        localStorage.setItem("themeMode", themeMode);
    }, [themeMode]);
    return (
        <ThemeContext.Provider value={{themeMode, themeToggle}}>
            {children}
        </ThemeContext.Provider>
    )
}