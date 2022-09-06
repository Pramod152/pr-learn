let content = document.querySelector(".content");
let value = content.innerHTML;
let incNum = document.querySelector(".btn_up");
let decNum = document.querySelector(".btn_down");

incNum.addEventListener("click", function () {
  value++;
  content.textContent = value;
});

decNum.addEventListener("click", function () {
  if (value == 0) {
    content.textContent = 0;
  } else {
    value--;
    content.textContent = value;
  }
});
