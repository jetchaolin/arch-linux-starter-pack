let starArray = Array(8).fill(0);

window.addEventListener("DOMContentLoaded", () => {
  const dados = localStorage.getItem("starList");
  if (dados) {
    starArray = JSON.parse(dados);
  }
});

function saveData() {
  localStorage.setItem("starList", JSON.stringify(starArray));
}

function clearStars() {
  localStorage.removeStar("starList");
  starArray = [];
  saveData();
}

function removeStar(index) {
  starArray[index] = 0;
  saveData();
  return;
}

function addToStars(index, rating) {
  if (starArray[index] == rating) {
    removeStar(index);
    return;
  }
  starArray[index] = rating;
  saveData();
}

function getStars() {
  let dados = localStorage.getItem("starList");
  return JSON.parse(dados) || [];
}

export { addToStars, getStars, removeStar, clearStars };
