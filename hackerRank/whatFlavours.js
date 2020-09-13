function whatFlavors(cost, money) {
  cost = [7, 2, 5, 4, 16];
  money = 12;
  let max = 0;
  let maxHash = {};
  let sumHash = {};
  for (let i = 0, j = cost.length - 1; i < cost.length; i++, j--) {
    if (j < i) {
      break;
    }
    if (cost[i] > money || cost[j] > money) {
      continue;
    }
    console.log("hi  " + i);
    for (let k = i + 1; k < cost.length; k++) {
      if (cost[i] + cost[k] == money && i != k) {
        console.log(`${i + 1} ${k + 1}`);
      }
      if (cost[j] + cost[k] == money && j != k) {
        console.log(`${j + 1} ${k + 1}`);
      }
    }
    //     let sum = cost[i]
    //   if(!sumHash.hasOwnProperty())
  }
  //   console.log(max);
  console.log(maxHash[max]);
}
