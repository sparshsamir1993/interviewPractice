function getMaxStreaks(toss) {
  toss = ["Heads", "Tails", "Tails", "Tails", "Heads", "Heads", "Tails"];
  let headStreakMax = 0;
  let tailStreakMax = 0;
  let headCount = 0;
  let tailCount = 0;

  for (let i = 0; i < toss.length; i++) {
    if (toss[i] == "Heads") {
      tailCount = 0;
      headCount++;
    }
    if (toss[i] == "Tails") {
      headCount = 0;
      tailCount++;
    }
    if (headStreakMax < headCount) {
      headStreakMax = headCount;
    }
    if (tailStreakMax < tailCount) {
      tailStreakMax = tailCount;
    }
  }

  return [headStreakMax, tailStreakMax];
}
