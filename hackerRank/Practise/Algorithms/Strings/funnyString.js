let funnyString = () => {
  s = "acxz";
  let log = console.log;
  let lrDiff = [];
  let rlDiff = [];
  for (let i = 1, j = s.length - 2; i < s.length; i++, j--) {
    lrDiff.push(Math.abs(s[i].charCodeAt(0) - s[i - 1].charCodeAt(0)));
    rlDiff.push(Math.abs(s[j].charCodeAt(0) - s[j + 1].charCodeAt(0)));
  }
  for (let i = 0; i < lrDiff.length; i++) {
    if (lrDiff[i] != rlDiff[i]) {
      return "Not Funny";
    }
  }
  return "Funny";
};
