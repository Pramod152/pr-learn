// const Palindrome = (x) => {
//   const reversed = x.split("").reverse().join("");

//   if (x === reversed) {
//     return true;
//   }
//   return false;
// };
// Palindrome("hannah");

// str1 = "pramod";
// arr1 = str1.split("");
// arr1.array.forEach((element) => {
//   p;
// });

// const pal = (x) => {
//   const arr = [...x];
//   const arr1 = [...x];

//   const reverseArr = arr1.reverse();
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === reverseArr[i]) {
//       return "palindrome";
//     }
//     return "not palindrome";
//   }
// };
// console.log(pal("121"));
// console.log(pal("121"));

var isPalindrome = function (x) {
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== x[x.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
console.log(isPalindrome("-121"));
