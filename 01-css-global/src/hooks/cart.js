let cartArray = [];

window.addEventListener("DOMContentLoaded", () => {
  const dados = localStorage.getItem("cartList");
  if (dados) {
    cartArray = JSON.parse(dados);
  }
});

function saveData() {
  localStorage.setItem("cartList", JSON.stringify(cartArray));
}

function clearCart() {
  localStorage.removeItem("cartList");
  cartArray = [];
  saveData();
}

function removeItem(index) {
  cartArray.splice(index, 1);
  saveData();
  return;
}

function addToCart(item) {
  if (cartArray.includes(item)) {
    removeItem(cartArray.indexOf(item));
    return;
  }
  cartArray.push(item);
  saveData();
}

function getCart() {
  let dados = localStorage.getItem("cartList");
  return JSON.parse(dados) || [];
}

export { cartArray, addToCart, getCart, removeItem, clearCart };
