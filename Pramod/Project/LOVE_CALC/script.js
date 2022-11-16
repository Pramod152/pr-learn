const submit = document.querySelector(".btn");
const result = document.querySelector("#second");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  const percent = Math.trunc(Math.random() * 100 + 1);
  result.placeholder = percent + "%";
});
