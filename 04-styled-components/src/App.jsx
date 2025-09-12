import { useEffect, useState } from "react";
import { getCart } from "./hooks/cart.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.jsx";

import WrapperContainer from "./components/WrapperContainer.jsx";
import GlobalStyles from "./styles/GlobalStyles.js";
import Home from "./pages/Home.jsx";
import Navbar from "./components/NavBar.jsx";
import Products from "./pages/Products.jsx";
import CartPage from "./pages/CartPage.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    let newCart = getCart();
    setCart(newCart);
  }, []);

  const handleCart = () => {
    let newCart = getCart();
    setCart(newCart);
  };

  return (
    <>
      <ThemeProvider value={"light"}>
        <Router>
          <WrapperContainer>
            <GlobalStyles />
            <Navbar navCart={cart} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/apps"
                element={<Products updateCart={() => handleCart()} />}
              />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
            <Footer />
          </WrapperContainer>
        </Router>
      </ThemeProvider>
    </>
  );
}
