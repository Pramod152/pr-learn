function display(values) {
  document.querySelector(".result").value += values;
}
function clearScreen() {
  document.querySelector(".result").value = " ";
}

function calculate() {
  let result = document.querySelector(".result").value;
  let ans = eval(result);
  document.querySelector(".result").value = ans;
}
