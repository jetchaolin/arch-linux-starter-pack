import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";
import { lightTheme, darkTheme } from "../hooks/themes.js";

function Button({
  children,
  childrensId,
  childrenOnClick,
  buttonWidth,
  buttonHeight,
  fontSize,
  disabled,
}) {
  const { theme } = useTheme();

  let boolean = disabled;
  const handleDisabled = (state) => {
    if (state) {
      return true;
    } else {
      return false;
    }
  };

  const StyledButton = styled.button`
    background-color: ${theme == "light"
      ? lightTheme.background
      : darkTheme.background};
    color: ${theme == "light" ? lightTheme.primary : darkTheme.primary};
    border: solid 0.1rem
      ${theme == "light" ? lightTheme.primary : darkTheme.primary};
    padding: 0.5rem 0.8rem;
    border-radius: 0.5rem;
    cursor: pointer;
    text-align: center;
    font-size: ${fontSize ? fontSize + "rem" : "1rem"};
    font-weight: bold;
    transition: background-color 0.3s ease;
    width: ${buttonWidth ? buttonWidth + "px" : "auto"};
    height: ${buttonHeight ? buttonHeight + "px" : "auto"};

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

    &:focus-visible {
      outline: 2px solid ${theme == "light" ? lightTheme.primary : darkTheme.primary}; /* Borda da cor do seu tema */
      outline-offset: 2px;
      border-radius: 4px;
    }

    &:disabled {
      background-color: #ccc; /* Lighter background */
      color: #666; /* Darker text color */
      cursor: not-allowed; /* Indicate it's unclickable */
      opacity: 0.7; /* Reduce opacity */
    }
  `;

  return (
    <StyledButton
      disabled={handleDisabled(boolean)}
      id={childrensId}
      onClick={childrenOnClick}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
