function arrayPairSum() {
  let arr = [1, 4, 45, 6, 10, -8];
  let sum = 16;
  let numberHash = {};
  let pairs = 0;
  let pairsJ = {};

  for (let i = 0; i < arr.length; i++) {
    if (numberHash.hasOwnProperty(sum - arr[i]) && numberHash[sum - arr[i]]) {
      if (
        !pairsJ.hasOwnProperty(sum - arr[i]) &&
        !pairsJ.hasOwnProperty(arr[i])
      ) {
        console.log(sum - arr[i], arr[i]);
        pairsJ[sum - arr[i]] = arr[i];
        pairs++;
      }
    } else if (!numberHash.hasOwnProperty(arr[i])) {
      numberHash[arr[i]] = true;
    }
  }
  console.log(pairs);
}
