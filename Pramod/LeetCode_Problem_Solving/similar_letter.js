// Find the similar letters from an array of strings

const simLetter = (x) => {
  const strObj = {};
  for (const [i, value] of x.entries()) {
    strObj[i] = value.split("");
  }
  let newStr = strObj[0];
  for (let obj in strObj) {
    obj = Number(obj);
    if (obj === x.length - 1) return newStr;
    newStr = newStr.filter((el) => strObj[obj + 1].find((val) => val === el));
  }
};
console.log(simLetter(["pramod", "ghimire", "rajesh", "pandey"]));
console.log(simLetter(["flower", "flow", "friend", "forget"]));
console.log(simLetter(["flower", "flow"]));
