/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let max = MIN;
  do {
    if (s.length % 2 == 0) {
      let mid = Math.floor(s.length / 2);
      let result = [0];
      let pallin = maxPalindrome(s, mid - 1, mid);
      if (pallin > max) {
        max = pallin;
      }
    } else {
      let mid = Math.floor(s.length / 2);
      let result = [0];
      let pallin = maxPalindrome(s, mid - 1, mid + 1);
      if (pallin > max) {
        max = pallin;
      }
    }
    s.s;
  } while (s != undefined);
};
let solveEven = function (s) {};
let solveOdd = function (s) {};
let maxPalindrome = function (s, first, second) {
  if (first < 0 || second == s.length) {
    return s;
  }
  if (s[first] != s[second]) {
    if (second - first < 2 && s[first] != s[second]) {
      return s[0];
    }

    return s.slice(first + 1, second);
  }
  return maxPalindrome(s, first - 1, second + 1);
};
