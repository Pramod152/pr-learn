var contentc = document.querySelector(".content1");
var btnMinus = document.querySelector(".minus");
var btnPlus = document.querySelector(".plus");

var score = contentc.textContent;
// contentc.textContent = score;
btnMinus.addEventListener("click", function () {
  score > 0 ? (contentc.textContent = score--) : (contentc.textContent = score);
});
btnPlus.addEventListener("click", function () {
  contentc.textContent = score++;
});
