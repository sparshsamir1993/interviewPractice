/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  if (str1.length > str2.length) {
    return findStringGCD(str1, str2);
  } else {
    return findStringGCD(str2, str1);
  }
};

let findStringGCD = (longer, smaller) => {
  for (let i = smaller.length; i >= 0; i--) {
    let arr = longer.split(smaller.slice(0, i)).filter((x) => x.length > 0);
    let arr2 = smaller.split(smaller.slice(0, i)).filter((x) => x.length > 0);
    if (arr.length == 0 && arr2.length == 0) {
      return smaller.slice(0, i);
    }
  }
  return "";
};
