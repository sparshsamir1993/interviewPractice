function maxSubsetSum(arr) {
  arr = [-2, 1, 3, -4, 5, -1, 4, 10, 1];
  return getDpSubsets(arr);
  //   return getSubsets(arr);
}

//dp solution
function getDpSubsets(arr) {
  let dpArr = [];
  if (arr.length == 1) return arr[0];
  if (arr.length == 2) return arr[0] > arr[1] ? arr[0] : arr[1];
  dpArr[0] = arr[0];
  dpArr[1] = arr[0] > arr[1] ? arr[0] : arr[1];
  for (let i = 2; i < arr.length; i++) {
    dpArr[i] = Math.max(arr[i], arr[i] + dpArr[i - 2], dpArr[i - 1]);
  }
  return Math.max(...dpArr);
}

//cubic time function
function getSubsets(arr) {
  let subsetArr = [];
  let maxSum = -1 * 2 ** 32;
  for (i = 0; i < arr.length; i++) {
    for (j = 2; j < arr.length; j++) {
      let currentArr = [];
      currentArr.push(arr[i]);
      let currentSum = arr[i];
      for (k = i + j; k < arr.length; k = k + 2) {
        currentArr.push(arr[k]);
        currentSum += arr[k];
      }
      maxSum = Math.max(maxSum, currentSum);
      if (currentArr.length > 1) subsetArr.push(currentArr);
    }
  }
  console.log(subsetArr);
  return maxSum;
}
