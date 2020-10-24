/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let mapping = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  digits = "5974693";
  if (digits.length == 0) return [];
  let result = [];
  solveCombinations(digits, result, mapping, "", 0);
  console.log(result);
};

function solveCombinations(
  digits,
  result,
  mapping,
  currentString,
  currentDigit
) {
  if (currentString.length == digits.length) {
    result.push(currentString);
    currentString = "";
  } else if (currentString.length < digits.length) {
    if (currentDigit < digits.length) {
      let currentMapping = mapping[digits[currentDigit]].split("");
      let currentChar = currentMapping.shift();
      while (currentChar) {
        solveCombinations(
          digits,
          result,
          mapping,
          currentString + currentChar,
          currentDigit + 1
        );
        currentChar = currentMapping.shift();
      }
    }
  }
}
