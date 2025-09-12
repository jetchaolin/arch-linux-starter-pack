import styled from "styled-components";

import { lightTheme, darkTheme } from "../hooks/themes.js";
import { useTheme } from "../context/ThemeContext";

export default function WrapperContainer({ children }) {
  const { theme } = useTheme();

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: min-content;
    min-height: 100vh;
    margin: 0;
    background: ${theme == "light"
      ? lightTheme.background
      : darkTheme.background};
  `;
  return <Container id="wrapper">{children}</Container>;
}
