function whatFlavors(cost, money) {
  cost = [2, 2, 4, 3, 10];
  money = 12;
  let passedHash = {};

  for (let i = 0; i < cost.length; i++) {
    let diff = money - cost[i];
    if (passedHash[diff] != undefined) {
      console.log(`${passedHash[diff] + 1} ${i + 1}`);
    } else {
      passedHash[cost[i]] = i;
    }
  }
}
