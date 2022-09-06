let contentc = document.querySelector(".content1");
let btnMinus = document.querySelector(".minus");
let btnPlus = document.querySelector(".plus");

let score = contentc.textContent;

//increment or decrement using button

// btnPlus.addEventListener("click", function () {
//   contentc.textContent = ++score;
// });

// btnMinus.addEventListener("click", function () {
//   score > 0 ? (contentc.textContent = --score) : (contentc.textContent = score);
// });

//increment or decrement using keyboard
document.addEventListener("keydown", function (e) {
  if (e.key == "ArrowDown") {
    score > 0
      ? (contentc.textContent = --score)
      : (contentc.textContent = score);
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key == "ArrowUp") {
    contentc.textContent = ++score;
  }
});
