dice1 = document.querySelector(".dice1");
dice2 = document.querySelector(".dice2");
btnRoll = document.querySelector(".button-roll");
winner = document.querySelector(".winner-name");
console.log(dice1, dice2);
console.log(btnRoll);

btnRoll.addEventListener("click", function () {
  const number1 = Math.trunc(Math.random() * 6 + 1);
  const number2 = Math.trunc(Math.random() * 6 + 1);

  dice1.src = `dice-${number1}.png`;
  dice2.src = `dice-${number2}.png`;

  if (number1 > number2) {
    winner.textContent = `Player -1 WON`;
  } else if (number2 > number1) {
    winner.textContent = `Player -2 WON`;
  } else {
    winner.textContent = `DRAW`;
  }
});
