function minimusSwaps(arr) {
  arr = [1, 3, 5, 2, 4, 6, 7];
  let i = 0;
  let swaps = 0;
  while (i < arr.length) {
    if (arr[i] != i + 1) {
      let temp = arr[i];
      arr[i] = arr[arr[i] - 1];
      arr[temp - 1] = temp;

      swaps++;
      i = 0;
    } else {
      i++;
    }
  }
}
