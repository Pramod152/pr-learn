var isPalindrome = function (x) {
  let arr = x.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false;
    }
    return true;
  }
};
const bul = isPalindrome(11111111100010101);
console.log(bul);
