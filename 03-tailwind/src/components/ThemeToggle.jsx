import { useEffect, useState } from "react";
import { toggleStoredTheme, getStoredTheme } from "../hooks/persistTheme.js";

export default function ThemeToggle({ theme, setTheme }) {
  const [currentTheme, setCurrentTheme] = useState(theme);
  let storedTheme = getStoredTheme();

  useEffect(() => {
    const checkForStoredTheme = () => {
      if (currentTheme != storedTheme) {
        setCurrentTheme(storedTheme);
        toggleStoredTheme(storedTheme);
      }
    };

    checkForStoredTheme();
  }, [currentTheme, storedTheme]);

  const toggleTheme = () => {
    toggleStoredTheme(currentTheme == "light" ? "dark" : "light");
    setCurrentTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    storedTheme = getStoredTheme();
  };

  return (
    <button id="cart-button" type="button" onClick={toggleTheme} class="bg-transparent border-none text-white cursor-pointer text-[1.5rem] ml-4
         hover:text-[var(--primary-color)]
         focus-visible:outline-2 focus-visible:outline-solid
         focus-visible:outline-[var(--primary-color)] focus-visible:outline-offset-2
         focus-visible:rounded-md">
      {currentTheme == "light" ? (
        <i class="fa-solid fa-toggle-off"></i>
      ) : (
        <i class="fa-solid fa-toggle-on"></i>
      )}
    </button>
  );
}
