import { createContext, useState, useContext, useMemo, useEffect } from "react";
import { toggleStoredTheme, getStoredTheme } from "../hooks/persistTheme.js";

let loadTheme = getStoredTheme();
const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    checkForStoredTheme();
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    toggleStoredTheme(theme == "light" ? "dark" : "light");
  };

  const checkForStoredTheme = () => {
    if (theme != loadTheme) {
      setTheme(loadTheme);
      toggleStoredTheme(loadTheme);
    }
  };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx)
    throw new Error("useTheme deve ser usado dentro de <ThemeProvider>");
  return ctx;
}
