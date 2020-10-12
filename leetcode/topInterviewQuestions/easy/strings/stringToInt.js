/**
 * @param {string} s
 * @return {number}
 */
let MIN = -1 * 2 ** 31;
let MAX = 2 ** 31 - 1;
var stringToInt = function (s) {
  let sign;
  let sawNumber = false;
  let number = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] == " ") {
      if (sawNumber) {
        break;
      }
      continue;
    }
    if (/[+-]/i.test(s[i]) && !sawNumber) {
      if (!/[0-9]/i.test(s[i + 1])) {
        return 0;
      }
      sign = s[i];
      continue;
    }
    if (/[0-9]/i.test(s[i])) {
      number += s[i];
      sawNumber = true;
      //   continue;
    }
    if (sawNumber && !/[0-9]/i.test(s[i])) {
      break;
    }
    if (!/[0-9]/i.test(s[i]) && !sawNumber) {
      return 0;
    }
  }
  number = +number;
  if (number > MAX) {
    if (sign == "-") {
      return MIN;
    } else {
      return MAX;
    }
  }
  if (sign == "-") {
    return number * -1;
  } else {
    return number;
  }
};
