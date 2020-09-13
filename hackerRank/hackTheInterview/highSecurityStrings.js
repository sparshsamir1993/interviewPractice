function highSecurityStrings(s, start) {
  let init = start;
  let weightHash = {};
  let startCode = "a".charCodeAt(0);

  for (let i = startCode; i < startCode + 26; i++) {
    if (String.fromCharCode(i) == "z") {
      start = init - 1;
    }
    if (start > 25) {
      start = 0;
    }
    weightHash[String.fromCharCode(i)] = start;
    start++;
  }
  console.log(weightHash);
  let weight = 0;
  for (let i = 0; i < s.length; i++) {
    weight += weightHash[s[i]];
  }
  console.log(weight);
}
