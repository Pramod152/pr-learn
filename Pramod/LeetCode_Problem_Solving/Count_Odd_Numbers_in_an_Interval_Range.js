var countOdds = function (low, high) {
  let count = 0;
  let value = [];
  for (let i = low; i < high; i++) {
    if (i % 2 != 0) {
      value.push(i);
      count++;
    }
  }
  console.log(`The odd numbers between ${low} and ${high} are [${value}].`);
};
countOdds(3, 7);
