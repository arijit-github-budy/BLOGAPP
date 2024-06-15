"use client"

import { useState, useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

const ThemeProvider = ({children}) => {
    const {themeMode, themeToggle} = useContext(ThemeContext);
    return (
        <div className={themeMode}>
            {children}
        </div>
    )
}

export default ThemeProvider;