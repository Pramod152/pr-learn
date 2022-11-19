const pal = (x) => {
  const arr = [...x];
  const arr1 = [...x];

  const reverseArr = arr1.reverse();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === reverseArr[i]) {
      return "palindrome";
    }
    return "not palindrome";
  }
};
console.log(pal("121"));
