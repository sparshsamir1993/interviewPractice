let splitAnagram = () => {
  s = "xaxbbbxx";
  let log = console.log;
  let firstHalf = s.slice(0, s.length / 2);
  let secondHalf = s.slice(s.length / 2, s.length + 1);
  if (firstHalf.length != secondHalf.length) return -1;
  let firstHalfHash = {};
  for (let i = 0; i < firstHalf.length; i++) {
    firstHalfHash[firstHalf[i]]
      ? firstHalfHash[firstHalf[i]]++
      : (firstHalfHash[firstHalf[i]] = 1);
  }
  let differences = 0;
  for (let i = 0; i < secondHalf.length; i++) {
    if (!firstHalfHash[secondHalf[i]]) {
      differences++;
    } else {
      firstHalfHash[secondHalf[i]]--;
      if (firstHalfHash[secondHalf[i]] < 0) differences++;
    }
  }
  return differences;
};
