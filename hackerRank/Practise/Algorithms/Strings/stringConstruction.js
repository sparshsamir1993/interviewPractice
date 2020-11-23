let stringConstruction = () => {
  s = "cdcdcde";
  let charHash = {};
  for (let i = 0; i < s.length; i++) {
    charHash[s[i]] ? charHash[s[i]]++ : (charHash[s[i]] = 1);
  }
  console.log(charHash);
  return Object.keys(charHash).length;
};
