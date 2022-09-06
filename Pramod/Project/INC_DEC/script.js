let contentc = document.querySelector(".content1");
let btnMinus = document.querySelector(".minus");
let btnPlus = document.querySelector(".plus");

let score = contentc.textContent;
btnPlus.addEventListener("click", function () {
  contentc.textContent = ++score;
});
btnMinus.addEventListener("click", function () {
  score > 0 ? (contentc.textContent = --score) : (contentc.textContent = score);
});
