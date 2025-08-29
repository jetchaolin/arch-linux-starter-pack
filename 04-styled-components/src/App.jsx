// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles.js";
import Home from "./pages/Home.jsx";
import Navbar from "./components/NavBar.jsx";
import Products from "./pages/Products.jsx";
import CartPage from "./pages/CartPage.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
