/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
  //   let log = console.log;
  //   s = "aaaabbbbcccc";
  //   s = "leetcode";
  let orderHash = {};
  let reverseOHash = {};
  let countHash = {};
  let orderNum = 1;
  s = s
    .split("")
    .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
    .join("");
  for (let i = 0; i < s.length; i++) {
    if (!orderHash[s[i]]) {
      orderHash[s[i]] = orderNum;
      countHash[s[i]] = 1;
      orderNum++;
    } else {
      countHash[s[i]]++;
    }
  }
  for (i in orderHash) {
    reverseOHash[orderHash[i]] = i;
  }
  let sortedString = "";
  let idx = 1;
  let increasing = true;
  let maxRank = Math.max(...Object.keys(reverseOHash));
  for (let i = 0; i < s.length; ) {
    if (countHash[reverseOHash[idx]] > 0) {
      if (increasing) {
        sortedString = sortedString + reverseOHash[idx];
        countHash[reverseOHash[idx]]--;
        idx++;
        if (idx > maxRank) {
          increasing = false;
          idx--;
        }
      } else {
        sortedString = sortedString + reverseOHash[idx];
        countHash[reverseOHash[idx]]--;
        idx--;
        if (idx < 1) {
          increasing = true;
          idx++;
        }
      }
      i++;
    } else {
      if (idx > maxRank) {
        increasing = false;
        idx--;
      } else if (idx < 1) {
        increasing = true;
        idx++;
      } else {
        if (increasing) idx++;
        if (!increasing) idx--;
      }
    }
  }
  return sortedString;
};
