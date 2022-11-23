// Find the similar letters from an array

const simLetter = (x, stringObj = {}) => {
  for (const [i, value] of x.entries()) {
    stringObj[i] = value;
  }
  console.log(stringObj);
};
simLetter(["pramod", "ghimire", "rajesh"]);

// const stringObj = {
//   0: "pramod",
//   1: "ghimire",
//   2: [],
// };
