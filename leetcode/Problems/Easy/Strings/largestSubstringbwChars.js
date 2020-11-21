/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
  s = "mgntdygtxrvxjnwksqhxuxtrv";
  let charIndexHash = {};
  let maxLen = -1;
  for (let i = 0; i < s.length; i++) {
    if (charIndexHash[s[i]]) {
      maxLen = Math.max(maxLen, i - charIndexHash[s[i]][0] - 1);
      charIndexHash[s[i]].push(i);
    } else {
      charIndexHash[s[i]] = [i];
    }
  }
  return maxLen;
};
