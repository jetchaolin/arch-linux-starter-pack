import { useEffect, useState } from "react";
// import { useTheme } from "../context/ThemeContext";
// import styled from "styled-components";
// import { lightTheme, darkTheme } from "../hooks/themes.js";
import { toggleStoredTheme, getStoredTheme } from "../hooks/persistTheme.js";

export default function ThemeToggle({ theme, setTheme }) {
  const [currentTheme, setCurrentTheme] = useState(theme);
  console.log("currentTheme", currentTheme);
  let storedTheme = getStoredTheme();
  console.log("storedTheme", storedTheme);

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
    <button id="cart-button" type="button" onClick={toggleTheme}>
      {currentTheme == "light" ? (
        <i class="fa-solid fa-toggle-off"></i>
      ) : (
        <i class="fa-solid fa-toggle-on"></i>
      )}
    </button>
  );
}
