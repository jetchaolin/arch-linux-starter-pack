import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";
import { lightTheme, darkTheme } from "../hooks/themes.js";

function Button({ children, childrensId, childrenOnClick }) {
  const { theme } = useTheme();

  const StyledButton = styled.button`
    background-color: ${theme == "light"
      ? lightTheme.background
      : darkTheme.background};
    color: ${theme == "light" ? lightTheme.primary : darkTheme.primary};
    border: solid 0.1rem
      ${theme == "light" ? lightTheme.primary : darkTheme.primary};
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${theme == "light"
        ? lightTheme.primary
        : darkTheme.primary};
      color: ${theme == "light" ? lightTheme.background : darkTheme.background};
      border: solid 0.1rem white;
    }

    &:active {
      background-color: ${theme == "light"
        ? lightTheme.primary
        : darkTheme.primary};
    }
  `;

  return (
    <StyledButton id={childrensId} onClick={childrenOnClick}>
      {children}
    </StyledButton>
  );
}

export default Button;
