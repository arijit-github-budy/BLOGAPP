"use client"

import { useState, useContext, useEffect } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

const ThemeProvider = ({ children }) => {
    const { themeMode, themeToggle } = useContext(ThemeContext);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (mounted) {
        return <div className={themeMode}>{children}</div>;
    }
}

export default ThemeProvider;