/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
  let digits = [];
  let chars = [];
  for (let i = 0; i < s.length; i++) {
    if (Number.parseInt(s[i]) > -1) {
      digits.push(s[i]);
    } else {
      chars.push(s[i]);
    }
  }
  if (Math.abs(digits.length - chars.length) > 1) return "";
  let permutedString = "";
  if (digits.length == chars.length) {
    for (let i = 0; i < digits.length; i++) {
      permutedString = permutedString + digits[i] + chars[i];
    }
  } else if (digits.length > chars.length) {
    for (let i = 0; i < digits.length; i++) {
      permutedString = permutedString + digits[i] + (chars[i] ? chars[i] : "");
    }
  } else if (digits.length < chars.length) {
    for (let i = 0; i < chars.length; i++) {
      permutedString = permutedString + chars[i] + (digits[i] ? digits[i] : "");
    }
  }
  return permutedString;
};
