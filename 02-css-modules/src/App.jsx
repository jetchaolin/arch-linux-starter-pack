import { useEffect, useState } from "react";
import "./assets/style/base.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import WrapperContainer from "./components/WrapperContainer.jsx";
import GlobalStyles from "./styles/GlobalStyles.js";
import { lightTheme, darkTheme } from "./theme";
import { getStoredTheme } from "./hooks/persistTheme.js";
import Home from "./pages/Home.jsx";
import Navbar from "./components/NavBar.jsx";
import Products from "./pages/Products.jsx";
import CartPage from "./pages/CartPage.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [theme, setTheme] = useState(getStoredTheme());
  console.log(theme);
  let localTheme = getStoredTheme();

  useEffect(() => {
    setTheme(localTheme);
  }, [localTheme]);
  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <Router>
          <WrapperContainer>
            <GlobalStyles />
            <Navbar theme={theme} setTheme={setTheme} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/apps" element={<Products />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
            <Footer />
          </WrapperContainer>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
