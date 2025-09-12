import styled from "styled-components";

import { useTheme } from "../context/ThemeContext";
import { lightTheme, darkTheme } from "../hooks/themes.js";

export default function Footer() {
  const { theme } = useTheme();

  const FooterContainer = styled.footer`
    background: ${theme == "light"
      ? lightTheme.background
      : darkTheme.background};
    color: white;
    text-align: center;
    padding: 0.2rem;
    position: relative;
    bottom: 0;
    width: 100%;
    // margin-top: 2rem;
  `;

  return (
    <FooterContainer id="footer-container">
      <p id="copyright" className="copyright">
        &copy; 2025 Arch Linux Starter Pack. No rights reserved.
      </p>
    </FooterContainer>
  );
}
