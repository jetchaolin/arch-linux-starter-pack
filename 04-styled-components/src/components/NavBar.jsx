import styled from "styled-components";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";
import ThemeStatus from "./ThemeStatus.jsx";
import { lightTheme, darkTheme } from "../hooks/themes.js";
import { useTheme } from "../context/ThemeContext";

function NavBar() {
  const { theme } = useTheme();

  const Logo = styled.a`
    color: ${theme == "light" ? lightTheme.primary : darkTheme.primary};
    text-decoration: none;
    font-family: "Arial", sans-serif;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    position: relative;
    // padding-left: 10px;
    // left: 10px;
    // margin: 0 0;

    &:hover {
      color: white;
    }
  `;

  const Nav = styled.nav`
    background: ${theme == "light"
      ? lightTheme.background
      : darkTheme.background};
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    margin: 0 12rem;
  `;

  const NavItem = styled.a`
    color: white;
    margin-right: 1rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  `;

  const NavItemRight = styled.a`
    color: white;
    margin-left: 1rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  `;

  const Span = styled.span`
    // position: absolute;
    // right: 10px;
  `;

  const Svg = styled.span`
    color: #white;
    width: 2.5rem;
    height: 2.5rem;

    &:hover {
      color: ${theme == "light" ? lightTheme.primary : darkTheme.primary};
    }
  `;

  return (
    <>
      <Nav id="navbar">
        <Span id="logo-span">
          <Logo href="/">ALSP</Logo>
        </Span>
        <Span id="navitems-span">
          <NavItem id="nav-item-home" href="/">
            Home
          </NavItem>
          <NavItem id="nav-item-apps" href="/apps">
            Apps
          </NavItem>
          <NavItem id="nav-item-about" href="#about">
            About
          </NavItem>
          <NavItem id="nav-item-contact" href="#contact">
            Contact
          </NavItem>
        </Span>
        <Span id="rightitems-span">
          <NavItemRight id="nav-item-cart" href="/cart">
            <Svg id="cart-icon">
              <i class="fa-solid fa-cart-shopping"></i>
            </Svg>
          </NavItemRight>
          <ThemeToggle />
        </Span>
      </Nav>
    </>
  );
}

export default NavBar;
