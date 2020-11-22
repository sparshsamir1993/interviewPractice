let weightedUniformStrings = (s, queries) => {
  let log = console.log;
  s = "aaabbbbcccddd";
  let letters = "qwertyuiopasdfghjklzxcvbnm"
    .split("")
    .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
  let letterSet = new Set(s.split(""));
  queries = [9, 7, 8, 12, 5];
  let start = 0;
  let uniformStrings = [];
  let weightHash = {};
  let weightArr = [];

  for (let i = 1; i < letters.length + 1; i++) {
    weightHash[letters[i - 1]] = i;
  }
  for (let i = 1; i < s.length; i++) {
    if (s[i] == s[i - 1]) {
      uniformStrings.push(s.slice(start, i + 1));
    } else {
      start = i;
    }
  }
  letterSet.forEach((x) => {
    weightArr.push(weightHash[x]);
  });
  for (i of uniformStrings) {
    let weight = i.length * weightHash[i[0]];
    weightArr.push(weight);
  }
  let resultArr = [];
  for (i of queries) {
    if (weightArr.includes(i)) {
      resultArr.push("YES");
    } else {
      resultArr.push("NO");
    }
  }
  return resultArr;
};
