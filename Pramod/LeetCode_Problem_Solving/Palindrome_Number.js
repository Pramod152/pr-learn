const Palindrome = (x) => {
  const reversed = x.split("").reverse().join("");

  if (x === reversed) {
    return true;
  }
  return false;
};
console.log(Palindrome("122221"));
