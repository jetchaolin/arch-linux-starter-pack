import { useState, useEffect } from "react";
import { getCart } from "../hooks/cart.js";
import { removeItem, clearCart } from "../hooks/cart.js";

import Button from "../components/Button.jsx";

export default function CartPage() {
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
      <div id="cart-container" class="min-h-[800px] m-0 p-8 bg-[var(--background-color)] text-[var(--primary-color)]">
        <h1 class="text-center text-4xl mb-8">Lista de Apps</h1>
        {products.length === 0 ? (
          <p>Your directory is empty.</p>
        ) : (
          <ul class="p-0 mb-24 list-none flex flex-wrap max-h-[600px] overflow-y-auto items-center">
            {products.map((product, index) => (
              <li key={index} className={`Container-${index}`} class="flex justify-start items-center rounded-lg gap-4">
                <span class="flex flex-col items-center gap-2">
                  <h2 id={`title-${products[0]}`} class="text-center text-2xl mb-8">
                    {product[0] || products}
                  </h2>
                  <img src={product[2]} alt={`img-${product[0]}`} class="block border border-[var(--primary-color)] rounded-[0.8rem] mx-4 mb-8 w-[150px] h-[95px] object-cover object-center"/>
                </span>
                <span class="pt-8 flex flex-col items-center gap-2">
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
            <span class="flex justify-center items-center gap-4 mt-8">
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
