/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  prices = [7, 1, 5, 3, 6, 4];
  //   prices = [7, 6, 4, 3, 1];
  //   prices = [1, 4, 3];
  //   prices = [2, 1, 2, 1, 0, 1, 2];
  let maxSum = 0;
  let dp = [];
  if (prices.length == 0) {
    return 0;
  }
  if (prices.length == 2) {
    if (prices[1] < prices[2]) {
      return prices[2] - prices[1];
    } else {
      return 0;
    }
  }
  dp[0] = 0;
  dp[1] = Math.min(prices[0], prices[1]);
  maxSum = Math.max(prices[1] - prices[0], 0);
  for (let i = 2; i < prices.length; i++) {
    let diff = prices[i] - prices[i - 1];
    dp[i] = Math.min(dp[i - 1], prices[i]);
    maxSum = Math.max(prices[i] - dp[i], maxSum);
  }
  console.log(maxSum);
};
