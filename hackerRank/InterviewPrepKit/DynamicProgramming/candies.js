function candies(n, arr) {
  n = 7;
  //   arr = [2, 4, 2, 6, 1, 7, 8, 9, 2, 1];
  //   arr = [4, 6, 4, 5, 6, 2];
  arr = [10, 9, 8, 7, 6, 5, 4];
  //   arr = [2, 4, 2, 6, 1, 7, 8, 9, 5, 4, 3, 2, 1, 6];
  return getTotalCandies(n, arr);
}

function getTotalCandies(n, arr) {
  let dpArr = [];
  if (arr.length == 1) return 1;
  if (arr.length == 2) return arr[0] == arr[1] ? 2 : 3;
  dpArr[0] = 1;
  if (arr[0] == arr[1]) {
    dpArr[1] = 1;
  } else if (arr[0] < arr[1]) {
    dpArr[1] = 2;
  } else {
    dpArr[0] = 2;
    dpArr[1] = 1;
  }
  let smallCount = 0;
  for (let i = 2; i < n; i++) {
    if (arr[i] > arr[i - 1]) {
      dpArr[i] = dpArr[i - 1] + 1;
    } else {
      dpArr[i] = 1;
    }
  }
  for (let i = n - 1; i >= 1; i--) {
    if (arr[i - 1] > arr[i] && dpArr[i - 1] <= dpArr[i]) {
      dpArr[i - 1] = dpArr[i] + 1;
    }
  }
  let sum = 0;
  dpArr.map((x) => (sum += x));
  return sum;
}

// else {
//     let j = i;
//     if (smallCount == 0) {
//       while (arr[j] < arr[j - 1]) {
//         smallCount++;
//         j++;
//       }
//     }
//     if (smallCount >= 1) {
//       dpArr[i] = smallCount--;
//       if (dpArr[i] > dpArr[i - 1]) {
//         dpArr[i - 1] = dpArr[i] + 1;
//       }
//     } else {
//       dpArr[i] = 1;
//     }
//   }
