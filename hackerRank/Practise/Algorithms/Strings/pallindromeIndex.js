let pallindromeIndex = () => {
  s = "baa";
  let log = console.log;
  let replacedLeft = s;
  let replacedRight = s;
  let countHash = {};
  for (let i = 0; i < s.length; i++) {
    countHash[s[i]] ? countHash[s[i]]++ : (countHash[s[i]] = 1);
  }
  for (let i = 0; i < s.length; i++) {
    if (countHash[s[i]] % 2 != 0) {
      let found = s.slice(0, i) + s.slice(i + 1, s.length);
      if (found.split("").reverse().join("") == found) {
        return i;
      }
    }
  }
  return -1;
};
