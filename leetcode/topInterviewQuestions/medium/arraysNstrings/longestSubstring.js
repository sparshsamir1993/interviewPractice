/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLen = 0;
  for (let i = 0; i < s.length; i++) {
    // let startChar = s[i];
    let checkSet = new Set();
    for (let j = i; j < s.length; j++) {
      if (checkSet.has(s[j])) {
        break;
      } else {
        checkSet.add(s[j]);
      }
    }
    if (checkSet.size > maxLen) {
      maxLen = checkSet.size;
    }
  }
  //   console.log(maxLen);
  return maxLen;
};
