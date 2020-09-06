function missingElement() {
  let arr1 = [4, 1, 0, 2, 9, 6, 8, 7, 5, 3];
  let arr2 = [6, 4, 7, 2, 1, 0, 8, 3, 9];
  let sum1 = 0,
    sum2 = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum1 += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum2 += arr2[i];
  }
  console.log(sum1 - sum2);
}
