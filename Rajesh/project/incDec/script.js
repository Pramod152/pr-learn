let content = document.querySelector(".content");
let value = content.innerHTML;
let incNum = document.querySelector(".btn_up");
let decNum = document.querySelector(".btn_down");

// incNum.addEventListener("click", function () {
//   content.textContent = value++;
// });
// decNum.addEventListener("click", function () {
//   if (value == 0) {
//     content.textContent = 0;
//   } else {
//     content.textContent = value--;
//   }
// });

//-------------ON KEY PRESS-------------//
document.addEventListener("keydown", function (e) {
  if ((e.key = "ArrowUp")) {
    content.textContent = value++;
  }
});
document.addEventListener("keydown", function (e) {
  if ((e.key = "ArrowDown")) {
    content.textContent = --value;
  }
});
