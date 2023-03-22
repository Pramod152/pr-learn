var longestCommonPrefix = function (strs) {
  const strings = {};
  strs.forEach((el, i) => {
    let propertyName = "str" + i;
    strings[propertyName] = el;
  });
  const strf = [];
  strf.push(strings.str0);
  console.log(strf);

  //   const fstr = {};
  //   for (let i = 0; i < strings.str0.length; i++) {
  //     const { value, symbol } = strings.str0[i];
  //     console.log(value, symbol);
  //   }

  //   for (const i of strs) {
  //     console.log(i);
  //   }
};
longestCommonPrefix(["flower", "flow", "flight"]);
