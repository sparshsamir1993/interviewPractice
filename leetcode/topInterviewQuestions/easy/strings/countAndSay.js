/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n == 1) return "1";
  if (n == 2) return "11";
  return solveCountAndSay(11 + "", n - 2);
};

let solveCountAndSay = function (s, n) {
  let countHash = {};
  if (n == 0) {
    return s;
  }
  let queue = [];
  let newString = "";
  for (let i = 0; i < s.length; i++) {
    if (!countHash[s[i]]) {
      countHash[s[i]] = 1;
      queue.push(s[i]);
    } else {
      countHash[s[i]]++;
    }
    if (s[i + 1] && s[i + 1] != s[i]) {
      newString += `${countHash[s[i]]}${s[i]}`;
      delete countHash[s[i]];
      queue.pop();
    }
  }

  for (i in queue) {
    // if (s[i + 1] && s[i + 1] != s[i]) {
    newString += `${countHash[queue[i]]}${queue[i]}`;
    //   delete countHash[s[i]];
    // }
  }
  return solveCountAndSay(newString, n - 1);
};
