function whatFlavors(cost, money) {
  cost = [7, 2, 5, 4, 11];
  money = 12;
  //   cost = cost.sort((a, b) => a - b);
  let max = 0;
  let maxHash = {};
  //   for (let i = 0; i < cost.length; i++) {
  //     for (let j = i + 1; j < cost.length; j++) {
  //       //   if (cost[i] + cost[j] > money) {
  //       //     break;
  //       //   }
  //       if (cost[i] + cost[j] <= money) {
  //         if (cost[i] + cost[j] > max) {
  //           max = cost[i] + cost[j];
  //           if (!maxHash.hasOwnProperty(max)) {
  //             maxHash[max] = `${i + 1} ${j + 1}`;
  //           }
  //         }
  //       }
  //     }
  //   }
  let sumHash = {};
  for (let i = 0, j = cost.length - 1; i < cost.length; i++, j--) {
    if (j < i) {
      break;
    }
    if (cost[i] > money || cost[j] > money) {
      continue;
    }
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
