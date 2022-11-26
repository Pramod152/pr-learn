//The problem is that, can we generate the target value using the elements of an array in any possible way?
const canSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
};

console.log(canSum(8, [2]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [2, 2, 3]));
console.log(canSum(500, [37, 23]));
