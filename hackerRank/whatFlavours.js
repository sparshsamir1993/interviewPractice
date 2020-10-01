function whatFlavors(cost, money) {
  cost = [2, 2, 4, 3];
  money = 12;
  let max = 0;
  let maxHash = {};
  let sumHash = {};
  let idHash = {};
  let found = false;

  for (let i = 0; i < cost.length; i++) {
    idHash[cost[i]] = i + 1;
  }
  let sortedCost = cost.sort((a, b) => a - b);
  for (let i = 0; i < cost.length; i++) {
    for (let j = i + 1; j < cost.length; j++) {
      if (cost[i] + cost[j] > money) {
        continue;
      }
      if (cost[i] + cost[j] == money && i != j) {
        console.log(`${idHash[cost[i]]} ${idHash[cost[j]]}`);
        found = true;
        break;
      }
    }
    if (found) {
      break;
    }
  }
  //   for (let i = 0, j = cost.length - 1; i < cost.length; i++, j--) {
  //     if (j < i) {
  //       break;
  //     }
  //     if (cost[i] > money || cost[j] > money) {
  //       continue;
  //     }
  //     console.log("hi  " + i);
  //     for (let k = i + 1; k < cost.length; k++) {
  //       if (cost[i] + cost[k] == money && i != k) {
  //         console.log(`${i + 1} ${k + 1}`);
  //       }
  //       if (cost[j] + cost[k] == money && j != k) {
  //         console.log(`${j + 1} ${k + 1}`);
  //       }
  //     }
  //   }
  //   console.log(maxHash[max]);
}
