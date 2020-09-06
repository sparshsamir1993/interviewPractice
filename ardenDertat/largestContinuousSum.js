function largestContinuousSum() {
  // arr = [-2, 3, -1, 4, 5, -9];
  arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = 0;
    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }
  console.log(maxSum);
}
