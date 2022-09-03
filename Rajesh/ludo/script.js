const diceRoll1 = () => {
  const math = Math.trunc(Math.random() * 6) + 1;
  document.getElementById("dice1").innerHTML = math;
};

const diceRoll2 = () => {
  const math = Math.trunc(Math.random() * 6) + 1;
  document.getElementById("dice2").innerHTML = math;
};
