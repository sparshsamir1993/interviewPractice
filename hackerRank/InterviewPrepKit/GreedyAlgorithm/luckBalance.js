function luckBalance(k, contests) {
  contests = [
    [5, 1],
    [2, 1],
    [1, 1],
    [8, 1],
    [10, 0],
    [5, 0],
  ];
  k = 3;
  contests = contests.sort((a, b) => a[0] - b[0]);
  let sum = 0;
  let importantTotalCount = 0;
  for (let i = 0; i < contests.length; i++) {
    if (contests[i][1] == 1) {
      importantTotalCount++;
    }
  }
  let eventsToAttend = importantTotalCount - k;
  let toSubtract = 0;
  for (let i = 0; i < contests.length; i++) {
    if (eventsToAttend > 0 && contests[i][1] == 1) {
      eventsToAttend--;
      toSubtract = toSubtract + contests[i][0];
      continue;
    }
    sum = sum + contests[i][0];
  }
  return sum - toSubtract;
}
