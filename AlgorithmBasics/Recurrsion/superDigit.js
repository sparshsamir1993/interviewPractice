function superDigit(n, k) {
  n = (n + "").repeat(k);
  let digitSum = n.split("").reduce((a, b) => +a + +b);
  if (digitSum < 10) {
    // console.log(digitSum);
    return digitSum;
  }

  if (digitSum >= 10) {
    return superDigit(digitSum, 1);
  }

  // console.log(digitSum);
}
