/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = "race a car";
  s = s.toLowerCase();
  if (s.length == 0) {
    return true;
  }
  for (let i = 0, j = s.length - 1; i < s.length; ) {
    if (i == j || i > j) {
      return true;
    }
    if (!/[a-z0-9]/.test(s[i])) {
      i++;
      continue;
    }
    if (!/[a-z0-9]/.test(s[j])) {
      j--;
      continue;
    }
    if (s[i] != s[j]) {
      return false;
    }
    i++;
    j--;
  }
};
