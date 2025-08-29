import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Logo = styled.a`
  color: #d7e144;
  font-family: "Arial", sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  position: absolute;
  padding-left: 10px;
  left: 10px;
  margin: 0 0;
`;

const Nav = styled.nav`
  // display: flex;
  padding: 1rem;
`;

const NavItem = styled.a`
  color: white;
  margin-right: 1rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Span = styled.span`
  position: absolute;
  right: 10px;
`;

const Svg = styled.svg`
  color: #d7e144;
  width: 2.5rem;
  height: 2.5rem;
`;

function NavBar() {
  return (
    <>
      <Nav>
        <Logo href="#home">Mini Loja</Logo>
        <NavItem href="/">Home</NavItem>
        <NavItem href="/products">Products</NavItem>
        <NavItem href="#about">About</NavItem>
        <NavItem href="#contact">Contact</NavItem>
        <Span>
          <NavItem href="/cart">
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 32 32"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </Svg>
          </NavItem>
        </Span>
      </Nav>
    </>
  );
}

export default NavBar;
