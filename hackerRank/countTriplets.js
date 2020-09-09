function countTriplets() {
  let arr = [1, 3, 3, 9, 9, 27, 81];
  let r = 3;
  let count = 0;

  let countHash = {};
  for (let i = 0; i < arr.length; i++) {
    if (!countHash.hasOwnProperty(arr[i])) {
      countHash[arr[i]] = 1;
    } else {
      countHash[arr[i]] += 1;
    }
  }

  let pairHash = {};
  for (let i = 0; i < arr.length; i++) {
    let leftNumber = arr[i] / r;
    let rightNumber = arr[i] * r;
    console.log(leftNumber, rightNumber);
    console.log(countHash, pairHash);
    countHash[arr[i]] -= 1;
    if (countHash[rightNumber] && pairHash[leftNumber]) {
      count = count + countHash[rightNumber] * pairHash[leftNumber];
      console.log("count is  " + count);
    }
    if (!pairHash.hasOwnProperty(arr[i])) {
      pairHash[arr[i]] = 1;
    } else {
      pairHash[arr[i]] += 1;
    }
    console.log(countHash, pairHash);
  }
  console.log(count);
}
