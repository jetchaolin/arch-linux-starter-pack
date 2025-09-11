// import styled from "styled-components";
// import { useTheme } from "../context/ThemeContext";
import { lightTheme, darkTheme } from "../theme.js";

function Button({
  children,
  childrensId,
  childrenOnClick,
  disabled,
}) {

  let boolean = disabled;
  const handleDisabled = (state) => {
    if (state) {
      return true;
    } else {
      return false;
    }
  };


  return (
    <button id="button"
      disabled={handleDisabled(boolean)}
      id={childrensId}
      onClick={childrenOnClick}
    >
      {children}
    </button>
  );
}

export default Button;
