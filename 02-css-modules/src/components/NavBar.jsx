import NavBarStyle from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";

export default function NavBar({ theme, setTheme, navCart }) {
  let cartCount = navCart.length;

  return (
    <>
      <nav id="navbar" aria-label="Navegação Principal">
        <span id={NavBarStyle.logo}>
          <a
            id="logo"
            classname="logo"
            href="/"
            aria-label="Voltar para a página inicial, ALSP"
          >
            ALSP
          </a>
        </span>
        <span id={NavBarStyle.navitems}>
          <a id="nav-item-home" href="/" aria-current="page">
            Home
          </a>
          <a id="nav-item-apps" href="/apps">
            Apps
          </a>
          <a id="nav-item-about" href="/about">
            About
          </a>
          <a id="nav-item-contact" href="#contact">
            Contact
          </a>
        </span>
        <span id={NavBarStyle.rightitems}>
          <a
            id="nav-item-cart"
            href="/cart"
            aria-label="Ir para o carrinho de compras"
          >
            <span id="cart-icon">
              <i class="fa-solid fa-cart-shopping" aria-hidden="true"></i>
              {cartCount > 0 ? <span>[{cartCount}]</span> : null}
            </span>
          </a>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </span>
      </nav>
    </>
  );
}
