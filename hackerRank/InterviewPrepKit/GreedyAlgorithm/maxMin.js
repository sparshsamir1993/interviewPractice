function maxMin(k, arr) {
  arr = [100, 200, 300, 350, 400, 401, 402];
  k = 3;
  let minDiff = 2 ** 32;
  arr = arr.sort((a, b) => a - b);
  for (let i = k; i <= arr.length; i++) {
    minDiff = Math.min(minDiff, arr[i - 1] - arr[i - k]);
    console.log(i - k, "---", i - 1);
  }
  return minDiff;
}
