var firstUniqChar = function (s) {
  if (!s.length) {
    return -1;
  }
  let copy = s;
  copy = copy.split("");
  let i = 0;
  let passedHash = {};
  while (copy.length > 0) {
    let char = copy.shift();
    if (copy.includes(char) || passedHash[char] > -1) {
      passedHash[char] = i;
      i++;
      continue;
    }
    if (copy.length > 0) {
      return i;
    }
  }
  if (i == s.length) {
    i = -1;
  }
  return i;
};
