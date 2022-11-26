const howSum = (targetSum, numbers) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (const num of numbers) {
    const remainder = targetSum - num;
    const remainderresult = howSum(remainder, numbers);
    if (remainderresult !== null) {
      return [...remainderresult, num];
    }
  }
  return null;
};

console.log(howSum(7, [2, 3]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(7, [2, 4]));
