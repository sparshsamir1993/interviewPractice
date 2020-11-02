function maximumSum(a, m) {
  a = [3, 2, 7, 4];
  m = 7;
  let subsetArr = [];
  let maxModulo = { max: 0 };
  return findSubsetSumDP(a, m);
  //   findSubsets(a, 0, subsetArr, []);
  //   console.log(subsetArr);
  //   return maxModulo.max;
}

function findSubsets(arr, currentIndex, subsetArr, currentSet) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    let newArr = [];

    for (let j = i; j >= 0; j--) {
      newArr.push(arr[j]);
      max = Math.max(max);
    }
    console.log(newArr);
  }

  //   if (currentSet.length > 0) {
  //     subsetArr.push([...currentSet]);
  //     currentSet = [];
  //   }
  //   for (let i = currentIndex; i < arr.length; i++) {
  //     currentSet.push(arr[i]);
  //   }
  //   if (currentIndex + 1 <= arr.length)
  //     findSubsets(arr, currentIndex + 1, subsetArr, currentSet);
}

function findSubsetSumDP(arr, m) {
  let dpArr = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    dpArr[i] = sum % m;
  }
  let max = 0;
  //   dpArr = dpArr.sort((a, b) => a - b);
  let dpSet = new Set(dpArr);
  dpArr = [];
  dpSet.forEach((x) => dpArr.push(x));
  for (let i = 0; i < dpArr.length; i++) {
    let newArr = [];
    for (let j = i - 1; j >= 0; j--) {
      newArr.push(arr[j]);
      max = Math.max(max, (dpArr[i] - dpArr[j] + m) % m);
    }
    max = Math.max(max, dpArr[i]);
  }
  return max;
}
