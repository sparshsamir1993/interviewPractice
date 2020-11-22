let hackerrankInString = (s) => {
  s = "hackerworld";
  let searchWord = "hackerrank";
  let searchIdx = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == searchWord[searchIdx]) {
      searchIdx++;
      if (searchIdx >= searchWord.length) {
        return "YES";
      }
    }
  }
  return "NO";
};
