 import CartPageStyle from "./CartPage.module.css"
// import styled from "styled-components";
import { useState, useEffect } from "react";
import { getCart } from "../hooks/cart.js";
import { lightTheme, darkTheme } from "../theme.js";
// import { useTheme } from "../context/ThemeContext";
import { removeItem, clearCart } from "../hooks/cart.js";
import Button from "../components/Button.jsx";

function CartPage() {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    const currentCart = getCart();
    if (JSON.stringify(products) !== JSON.stringify(currentCart)) {
      setProducts(currentCart);
    }
  }, [products]);

  const handleRemoveFromCart = (index) => {
    removeItem(index);
    setProducts(getCart());
  };

  const handleClearCart = () => {
    clearCart();
    setProducts(getCart());
  };

  const handleOpenApp = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleOpenAll = (apps) => {
    apps.forEach((app, index) => {
      setTimeout(() => {
        window.open(app[3], "_blank", "noopener,noreferrer");
      }, index * 800);
    });
  };

  return (
    <>
      <div id={CartPageStyle.cartContainer}>
        <h1 id={CartPageStyle.title}>Lista de Apps</h1>
        {products.length === 0 ? (
          <p>Your directory is empty.</p>
        ) : (
          <ul id={CartPageStyle.ul}>
            {products.map((product, index) => (
              <li id={CartPageStyle.li} key={index} className={`Container-${index}`}>
                <span id={CartPageStyle.span}>
                  <h2 id={CartPageStyle.subTitle}>
                    {product[0] || products}
                  </h2>
                  <img id={CartPageStyle.img}src={product[2]} alt={`img-${product[0]}`} />
                </span>
                <span id={CartPageStyle.span2}>
                  <Button
                    buttonWidth={85}
                    buttonHeight={35}
                    fontSize={0.8}
                    childrenOnClick={() => handleOpenApp(product[3])}
                  >
                    Ir ao Site
                  </Button>
                  <Button
                    buttonWidth={85}
                    buttonHeight={35}
                    fontSize={0.8}
                    childrenOnClick={() => handleRemoveFromCart(index)}
                  >
                    Remover
                  </Button>
                </span>
              </li>
            ))}
          </ul>
        )}
        {products.length === 0 ? null : (
          <>
            <span id={CartPageStyle.span3}>
              <Button
                childrensId="openAll"
                childrenOnClick={() => handleOpenAll(products)}
              >
                Abrir Todos
              </Button>
              <Button childrensId="clearCart" childrenOnClick={handleClearCart}>
                Limpar Lista
              </Button>
            </span>
          </>
        )}
      </div>
    </>
  );
}

export default CartPage;
