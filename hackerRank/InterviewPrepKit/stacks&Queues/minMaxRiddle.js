// Complete the solve function below.
function riddle(arr) {
  // solve here
  //   arr = [6, 3, 5, 1, 12];
  //   arr = [3, 5, 4, 7, 6, 2];
  arr = bigOne.split(" ");
  return minMaxBF(arr);
}

function findMax(arr) {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
  }
  return max;
}

function minMaxBF(arr) {
  let resultArr = [];
  resultArr[0] = findMax(arr);
  for (let i = 2; i <= arr.length; i++) {
    let mins = [];
    for (let j = 0; j < arr.length - i + 1; j++) {
      mins.push(Math.min(...arr.slice(j, j + i)));
    }
    resultArr.push(findMax(mins));
  }
  return resultArr;
}
