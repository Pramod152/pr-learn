// var romanToInt = function (s) {
//   const arr = [
//     { value: 1000, symbol: "M" },
//     { value: 900, symbol: "CM" },
//     { value: 500, symbol: "D" },
//     { value: 400, symbol: "CD" },
//     { value: 100, symbol: "C" },
//     { value: 90, symbol: "XC" },
//     { value: 50, symbol: "L" },
//     { value: 40, symbol: "XL" },
//     { value: 10, symbol: "X" },
//     { value: 9, symbol: "IX" },
//     { value: 5, symbol: "V" },
//     { value: 4, symbol: "IV" },
//     { value: 1, symbol: "I" },
//   ];
// };
// romanToInt(467);
function romanToInt(s) {
  var s = String(s);
  const romanNumerals = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  let result = 0;
  let i = 0;

  while (i < romanNumerals.length) {
    const { value, symbol } = romanNumerals[i];
    if (s.indexOf(symbol) === 0) {
      result += value;
      s = s.slice(symbol.length);
    } else {
      i++;
    }
  }

  return result;
}
// console.log(romanToInt("XXI"));
// console.log(romanToInt("XCI"));
console.log(romanToInt("XVXXCMI"));
