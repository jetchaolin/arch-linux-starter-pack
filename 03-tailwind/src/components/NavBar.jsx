import "../assets/style/index.css";

import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";

export default function NavBar({ theme, setTheme, navCart }) {
  let cartCount = navCart.length;

  return (
    <>
      <nav
        id="navbar"
        aria-label="Navegação Principal"
        class="flex justify-between p-4 mx-[12rem] h-fit"
      >
        <span id="logo-span">
          <a
            id="logo"
            class="text-[var(--primary-color)] no-underline font-sans text-[1.2rem] font-bold text-center relative hover:text-white focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-[var(--primary-color)] focus-visible:outline-offset-2 focus-visible:rounded"
            classname="logo"
            href="/"
            aria-label="Voltar para a página inicial, ALSP"
          >
            ALSP
          </a>
        </span>
        <span id="navitems-span" class="">
          <a
            id="nav-item-home"
            href="/"
            aria-current="page"
            class="mr-4 text-white mr-4 no-underline hover:underline focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-[var(--primary-color)] focus-visible:outline-offset-2 focus-visible:rounded"
          >
            Home
          </a>
          <a
            id="nav-item-apps"
            href="/apps"
            class="mr-4 text-white mr-4 no-underline hover:underline focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-[var(--primary-color)] focus-visible:outline-offset-2 focus-visible:rounded"
          >
            Apps
          </a>
          <a
            id="nav-item-about"
            href="/about"
            class="text-white mr-4 no-underline hover:underline focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-[var(--primary-color)] focus-visible:outline-offset-2 focus-visible:rounded"
          >
            About
          </a>
          <a
            id="nav-item-contact"
            href="mailto:joao.ramos0793@gmail.com"
            class="text-white mr-4 no-underline hover:underline focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-[var(--primary-color)] focus-visible:outline-offset-2 focus-visible:rounded"
          >
            Contact
          </a>
        </span>
        <span
          id="rightitems-span"
          class="text-white ml-4 no-underline hover:underline focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-[var(--primary-color)] focus-visible:outline-offset-2 focus-visible:rounded"
        >
          <a
            id="nav-item-cart"
            href="/cart"
            aria-label="Ir para o carrinho de compras"
            class="hover:text-[var(--primary-color)]"
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
