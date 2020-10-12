/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  s = "sparshh";
  t = "rashsph";
  if (s.length != t.length) {
    return false;
  }
  let hash1 = {};
  let hash2 = {};
  for (let i = 0; i < s.length; i++) {
    if (!hash1[s[i]]) {
      hash1[s[i]] = 1;
    } else {
      hash1[s[i]]++;
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (!hash2[t[i]]) {
      hash2[t[i]] = 1;
    } else {
      hash2[t[i]]++;
    }
  }
  for (i in hash1) {
    if (!hash2[i]) {
      return false;
    }
    if (hash1[i] != hash2[i]) {
      return false;
    }
  }
  return true;
};
