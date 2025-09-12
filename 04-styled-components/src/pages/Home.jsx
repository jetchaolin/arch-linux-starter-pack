import styled from "styled-components";

import { lightTheme, darkTheme } from "../hooks/themes.js";
import { useTheme } from "../context/ThemeContext";

export default function Home() {
  const { theme } = useTheme();

  const Title = styled.h1`
    color: ${theme == "light" ? lightTheme.primary : darkTheme.primary};
    font-family: "Arial", sans-serif;
    font-size: 8.5rem;
  `;

  const Wrapper = styled.section`
    padding: 4em;
    background: ${theme == "light"
      ? lightTheme.background
      : darkTheme.background};
  `;

  return (
    <Wrapper id="home">
      <Title>Arch Linux Starter Pack</Title>
    </Wrapper>
  );
}
