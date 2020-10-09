function sumOfSubsets() {
  // const arr = [5, 10, 12, 13, 15, 18];
  const arr = [10, 7, 5, 18, 12, 20, 15];
  //   const desiredSum = 30;
  const desiredSum = 35;
  let result = new Set();

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    let inclusionArr = Array(arr.length).fill(0);

    let s = findSum(i, i - 1, i, arr, desiredSum, inclusionArr, result);
    console.log(sum, s);
    console.log(inclusionArr);
  }
  console.log(result);
}

function calArrSum(arr, inclusionArr) {
  let sum = 0;

  for (let i = 0; i < inclusionArr.length; i++) {
    sum += inclusionArr[i] * arr[i];
  }
  return sum;
}

function findSum(
  startIndex,
  recIdx,
  sumIndex,
  arr,
  desiredSum,
  inclusionArr,
  result
) {
  let sum = calArrSum(arr, inclusionArr);
  let difference = desiredSum - sum;
  if (arr.includes(difference)) {
    let diffIndex = arr.indexOf(difference);
    let tempIncArr = [...inclusionArr];
    if (tempIncArr[diffIndex] == 0) {
      tempIncArr[diffIndex] = 1;
      result.add(tempIncArr.join(""));
    }
  }

  if (sumIndex == arr.length) {
    return sum;
  }
  if (sum > desiredSum) {
    inclusionArr = Array(arr.length).fill(0);
    inclusionArr[startIndex] = 1;
    recIdx = recIdx + 1;
    sumIndex = recIdx;
  }

  inclusionArr[sumIndex] = 1;
  return findSum(
    startIndex,
    recIdx,
    sumIndex + 1,
    arr,
    desiredSum,
    inclusionArr,
    result
  );
}
