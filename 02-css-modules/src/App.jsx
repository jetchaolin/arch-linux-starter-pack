import { useEffect, useState } from "react";
import { lightTheme, darkTheme } from "./theme";
import { getStoredTheme } from "./hooks/persistTheme.js";
import { getCart } from "./hooks/cart.js";

import "./assets/style/base.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import WrapperContainer from "./components/WrapperContainer.jsx";
import GlobalStyles from "./styles/GlobalStyles.js";
import Home from "./pages/Home.jsx";
import Navbar from "./components/NavBar.jsx";
import Products from "./pages/Products.jsx";
import About from "./pages/About.jsx"
import CartPage from "./pages/CartPage.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [cart, setCart] = useState([]);
  const [theme, setTheme] = useState(getStoredTheme());

  let localTheme = getStoredTheme();

  useEffect(() => {
    let newCart = getCart();
    setCart(newCart);
    setTheme(localTheme);
  }, [localTheme]);

  const handleCart = () => {
    let newCart = getCart();
    setCart(newCart);
  };
  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <Router>
          <WrapperContainer>
            <GlobalStyles />
            <Navbar theme={theme} setTheme={setTheme} navCart={cart} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/apps"
                element={<Products updateCart={() => handleCart()} />}
              />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
          </WrapperContainer>
        </Router>
      </ThemeProvider>
    </>
  );
}
