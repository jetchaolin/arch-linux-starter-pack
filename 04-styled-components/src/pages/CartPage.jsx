import { useState } from "react";

function CartPage() {
  let [products, setProducts] = useState([]);

  return (
    <div>
      <h1>Cart Page</h1>
      {products.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {products.map((product, index) => (
            <li key={index}>{product}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartPage;
