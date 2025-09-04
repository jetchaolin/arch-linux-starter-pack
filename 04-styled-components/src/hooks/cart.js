let cartArray = [];

window.addEventListener("DOMContentLoaded", () => {
  const dados = localStorage.getItem("cartList");
  if (dados) {
    cartArray = JSON.parse(dados);
    // renderizarLista();
  }
});

function saveData() {
  localStorage.setItem("cartList", JSON.stringify(cartArray));
}

function clearCart(item) {
  localStorage.removeItem("cartList");
  cartArray = [];
  console.log("Cart cleared");
}

function removeItem(item) {
  cartArray.splice(cartArray.indexOf(item), 1);
  console.log(`${item} removed from cart`);
  return;
}

function addToCart(item) {
  if (cartArray.includes(item)) {
    removeItem(item);
    saveData();
    return;
  }
  cartArray.push(item);
  saveData();
  console.log(`${item} added to cart`);
  console.log("Cart list: ", cartArray);
}

function getCart() {
  return cartArray;
}

export { addToCart, getCart };
