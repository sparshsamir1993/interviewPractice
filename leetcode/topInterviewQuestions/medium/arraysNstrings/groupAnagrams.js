/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  //   strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
  let hash = {};
  for (let i = 0; i < strs.length; i++) {
    let stringKey = strs[i].split("").sort((a, b) => a.localeCompare(b));
    if (!hash[stringKey]) {
      hash[stringKey] = [strs[i]];
    } else {
      hash[stringKey].push(strs[i]);
    }
  }
  return Object.values(hash);
};

let getLetterHash;
