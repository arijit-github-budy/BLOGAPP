"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
};

export const ThemeContextProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(() => {
    return getFromLocalStorage();
  });

  const themeToggle = () => {
    setThemeMode(themeMode === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", themeMode);
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, themeToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};