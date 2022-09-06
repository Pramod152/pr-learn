var contentc = document.querySelector(".content1");
var btnMinus = document.querySelector(".minus");
var btnPlus = document.querySelector(".plus");

console.log(contentc);
var score = 1;
contentc.textContent = score;
btnMinus.addEventListener("click", function () {
  if (score >= 1) {
    contentc.textContent = --score;
  } else contentc.textContent = score;
});
btnPlus.addEventListener("click", function () {
  contentc.textContent = ++score;
});
