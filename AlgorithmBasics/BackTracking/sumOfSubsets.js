function sumOfSubsets() {
  const arr = [5, 10, 12, 13, 15, 18];
  const desiredSum = 30;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    let inclusionArr = Array(arr.length).fill(0);
    for (let j = i; j < arr.length; j++) {
      if (arr[j + 1] && sum + arr[j + 1] <= 30) {
        sum += arr[j];
        inclusionArr[j] = 1;
      } else if (!arr[j + 1] && sum + arr[j] <= 30) {
        sum += arr[j];
        inclusionArr[j] = 1;
        break;
      } else {
        break;
      }
    }
    console.log(sum);
    console.log(inclusionArr);
  }
}
