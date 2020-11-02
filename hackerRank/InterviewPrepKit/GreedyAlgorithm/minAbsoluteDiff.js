function minimumAbsoluteDifference(arr) {
  // arr = [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75];
  // arr = [3, -7, 0];
  arr = [1, -3, 71, 68, 17];
  return findMinAbsoludeDiff(arr);
}

function findMinAbsoludeDiff(arr) {
  let minDiff = 2 ** 32;
  arr = arr.sort((a, b) => a - b);
  for (let i = 1; i < arr.length; i++) {
    minDiff = Math.min(minDiff, Math.abs(arr[i] - arr[i - 1]));
  }

  return minDiff;
}
