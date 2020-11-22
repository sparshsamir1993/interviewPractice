let alternateCharacters = () => {
  s = "beabeefeab";
  let log = console.log;
  let charSet = new Set();
  let charCount = {};
  for (let i = 0; i < s.length; i++) {
    charSet.add(s[i]);
    charCount[s[i]] ? charCount[s[i]]++ : (charCount[s[i]] = 1);
  }
  log(charSet, charCount);
  for (i of charSet) {
  }
};

let figureOutString = () => {};
