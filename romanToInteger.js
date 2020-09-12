function romanToInteger(roman) {
  let letterMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;
  for (let i = 0; i < roman.length; i++) {
    let currentChar = letterMap[roman[i]];

    if (i + 1 < roman.length) {
      let nextChar = letterMap[roman[i + 1]];
      if (currentChar >= nextChar) {
        sum = sum + currentChar;
      } else {
        sum = sum + nextChar - currentChar;
        i++;
      }
    } else {
      sum = sum + currentChar;
    }
  }
  console.log(sum);
}
