var isPalindrome = function (x) {
  let arr = x.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false;
    }
    return true;
  }
};
isPalindrome("madam");
