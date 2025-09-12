import styled from "styled-components";

import { lightTheme, darkTheme } from "../hooks/themes.js";
import { useTheme } from "../context/ThemeContext";

import { NavLink } from "react-router-dom";

import ThemeToggle from "./ThemeToggle.jsx";

export default function NavBar({ navCart }) {
  let cartCount = navCart.length;

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

    &:focus-visible {
      outline: 2px solid
        ${theme == "light" ? lightTheme.primary : darkTheme.primary}; /* Borda da cor do seu tema */
      outline-offset: 2px;
      border-radius: 4px;
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

    &:focus-visible {
      outline: 2px solid
        ${theme == "light" ? lightTheme.primary : darkTheme.primary}; /* Borda da cor do seu tema */
      outline-offset: 2px;
      border-radius: 4px;
    }
  `;

  const NavItemRight = styled.a`
    color: white;
    margin-left: 1rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    &:focus-visible {
      outline: 2px solid
        ${theme == "light" ? lightTheme.primary : darkTheme.primary}; /* Borda da cor do seu tema */
      outline-offset: 2px;
      border-radius: 4px;
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
      <Nav id="navbar" aria-label="Navegação Principal">
        <Span id="logo-span">
          <Logo href="/" aria-label="Voltar para a página inicial, ALSP">
            ALSP
          </Logo>
        </Span>
        <Span id="navitems-span">
          <NavItem id="nav-item-home" href="/" aria-current="page">
            Home
          </NavItem>
          <NavItem id="nav-item-apps" href="/apps">
            Apps
          </NavItem>
          <NavItem id="nav-item-about" href="/about">
            About
          </NavItem>
          <NavItem id="nav-item-contact" href="#contact">
            Contact
          </NavItem>
        </Span>
        <Span id="rightitems-span">
          <NavItemRight
            id="nav-item-cart"
            href="/cart"
            aria-label="Ir para o carrinho de compras"
          >
            <Svg id="cart-icon">
              <i class="fa-solid fa-cart-shopping" aria-hidden="true"></i>
              {cartCount > 0 ? <span>[{cartCount}]</span> : null}
            </Svg>
          </NavItemRight>
          <ThemeToggle />
        </Span>
      </Nav>
    </>
  );
}
