import { useTheme } from "../context/ThemeContext";
import styled from "styled-components";
import { lightTheme, darkTheme } from "../hooks/themes.js";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const Button = styled.button`
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 1.5rem;
    margin-left: 1rem;

    &:hover {
      color: ${theme == "light" ? lightTheme.primary : darkTheme.primary};
    }
  `;

  return (
    <Button type="button" onClick={toggleTheme}>
      {theme == "light" ? (
        <i class="fa-solid fa-toggle-off"></i>
      ) : (
        <i class="fa-solid fa-toggle-on"></i>
      )}
    </Button>
  );
}
