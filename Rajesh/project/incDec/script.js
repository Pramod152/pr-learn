let content1 = document.querySelector(".content");
let value = content1.textContent;
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
  console.log(e);
  if (e.key == "ArrowUp") {
    content1.textContent = ++value;
  }
});
document.addEventListener("keydown", function (e) {
  if (e.key == "ArrowDown") {
    value > 0
      ? (content1.textContent = --value)
      : (content1.textContent = value);
  }
});
