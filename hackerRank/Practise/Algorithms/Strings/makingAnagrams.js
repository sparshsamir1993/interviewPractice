let makingAnagrams = (s1, s2) => {
  s1 = "abc";
  s2 = "dec";
  let oneHash = {};
  for (let i = 0; i < s1.length; i++) {
    oneHash[s1[i]] ? oneHash[s1[i]]++ : (oneHash[s1[i]] = 1);
  }
  let same = 0;
  for (let i = 0; i < s2.length; i++) {
    if (oneHash[s2[i]]) {
      same++;
      oneHash[s2[i]]--;
    }
  }
  return s1.length + s2.length - same * 2;
};
