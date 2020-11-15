// Input size n
// [1,6,8,5,9,4,7,2,3,4,5]
// Output size m
// [1,14,18,16,5]

function arraySpecialSum() {
  let arr = [1, 6, 8, 5, 9, 4, 7, 2, 3, 4, 5];
  let dpArr = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    dpArr[i] = arr[i] + dpArr[i - 1];
  }
  let resultArr = [];
  let count = 2;
  let prev = 0;
  resultArr[0] = dpArr[0];
  for (let i = count; i < dpArr.length; ) {
    console.log(i);
    resultArr.push(dpArr[i] - dpArr[prev]);
    count++;
    prev = i;
    i = i + count;
  }
  let sum = 0;
  for (let i = prev + 1; i < arr.length; i++) {
    sum += arr[i];
  }
  resultArr.push(sum);
  console.log(resultArr);
}
