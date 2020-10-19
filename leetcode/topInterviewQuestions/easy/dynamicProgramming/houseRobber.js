/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  //   nums = [2, 1, 1, 2, 1, 1, 5];
  // [0,2,]
  if (nums.length == 0) {
    return 0;
  }
  if (nums.length == 1) {
    return nums[0];
  }
  if (nums.length == 2) {
    return Math.max(nums[0], nums[1]);
  }
  let dp = [];
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }
  return dp[nums.length - 1];
};
