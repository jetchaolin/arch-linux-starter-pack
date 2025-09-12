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
  let newCartArray = getCart();
  console.log(newCartArray);
  if (newCartArray) {
    if (newCartArray.includes(item)) {
      let dupplicate = newCartArray.indexOf(item);
      if (newCartArray[dupplicate][0] === item[0]) {
        removeItem(newCartArray.indexOf(item));
        removeItem(cartArray.indexOf(item));
        return;
      }
    } else {
      if (cartArray.includes(item)) {
        console.log(cartArray);
        let dupplicate = cartArray.indexOf(item);
        if (cartArray[dupplicate][0] == item[0]) {
          removeItem(cartArray.indexOf(item));
          return;
        }
      }
    }
  }
  cartArray.push(item);
  saveData();
}

function getCart() {
  let dados = localStorage.getItem("cartList");
  return JSON.parse(dados) || [];
}

export { cartArray, addToCart, getCart, removeItem, clearCart };
