/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function (s) {
  let log = console.log;
  //   s = "ubv?w";
  //   s = "a?b";
  //   s = "d?a";
  let fills = ["a", "b", "c"];
  let newString = "";
  for (let i = 0; i < s.length; i++) {
    let prev = newString[i - 1],
      next = s[i + 1],
      current = s[i],
      fIdx = 0;
    if (current == "?") {
      if (prev && fills.indexOf(prev) > -1) {
        fIdx = fills.indexOf(prev) + 1 > 2 ? 0 : fills.indexOf(prev) + 1;
        if (next && fills.indexOf(next) > -1) {
          if (fills[fIdx] == next) {
            fIdx = fIdx + 1 > 2 ? 0 : fIdx + 1;
          }
        }
      }
      if (next && fills.indexOf(next) > -1) {
        if (fills[fIdx] == next) {
          fIdx = fIdx + 1 > 2 ? 0 : fIdx + 1;
        }
      }
      newString += fills[fIdx];
      fIdx = fIdx + 1 > 2 ? 0 : fIdx + 1;
      continue;
    }
    newString += current;
  }
  return newString;
};
