let gameOfThrones = () => {
  let s = "cdcdcdcdeeer";
  let charHash = {};
  for (let i = 0; i < s.length; i++) {
    charHash[s[i]] ? charHash[s[i]]++ : (charHash[s[i]] = 1);
  }
  let counts = Object.values(charHash);
  if (s.length % 2 == 0) {
    let arr = counts.filter((x) => x % 2 !== 0);
    if (arr.length == 0) {
      return "YES";
    } else {
      return "NO";
    }
  } else {
    let arr = counts.filter((x) => x % 2 !== 0);
    if (arr.length == 1) {
      return "YES";
    } else {
      return "NO";
    }
  }
};
