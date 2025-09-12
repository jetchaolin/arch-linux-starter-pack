import "../assets/style/index.css";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";

export default function NavBar({ theme, setTheme }) {
  return (
    <>
      <nav id="navbar" aria-label="Navegação Principal">
        <span id="logo-span">
          <a
            id="logo"
            classname="logo"
            href="/"
            aria-label="Voltar para a página inicial, ALSP"
          >
            ALSP
          </a>
        </span>
        <span id="navitems-span">
          <a id="nav-item-home" href="/" aria-current="page">
            Home
          </a>
          <a id="nav-item-apps" href="/apps">
            Apps
          </a>
          <a id="nav-item-about" href="#about">
            About
          </a>
          <a id="nav-item-contact" href="#contact">
            Contact
          </a>
        </span>
        <span id="rightitems-span">
          <a
            id="nav-item-cart"
            href="/cart"
            aria-label="Ir para o carrinho de compras"
          >
            <span id="cart-icon">
              <i class="fa-solid fa-cart-shopping" aria-hidden="true"></i>
            </span>
          </a>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </span>
      </nav>
    </>
  );
}
