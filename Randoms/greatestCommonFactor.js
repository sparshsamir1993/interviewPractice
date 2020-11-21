let greatestCommonFactor = (...args) => {
  let start = 2;
  let arr = [...args];
  let min = Math.min(...arr);
  let gcd = 1;
  while (start <= min) {
    if (arr.every((x) => x % start == 0)) {
      gcd *= start;
      arr = arr.map((x) => x / start);
    } else {
      start++;
    }
  }
  console.log(gcd);
};
