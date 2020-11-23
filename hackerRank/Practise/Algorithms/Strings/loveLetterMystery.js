let theLoveLetterMystery = (s) => {
  let codeHash = {};
  for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
    codeHash[String.fromCharCode(i)] = i;
  }
  //   console.log(codeHash);
  let operations = 0;
  let sRev = s.split("").reverse().join("");
  for (let i = 0; i < sRev.length / 2; i++) {
    operations = operations + Math.abs(codeHash[sRev[i]] - codeHash[s[i]]);
  }
  return operations;
};
