/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  nums = [1, 2, 0];
  nums = nums.sort((a, b) => a - b);
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = 1;
  }
  nums = Object.keys(hash);
  let start = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 1) continue;
    if (nums[i] != start) return start;
    start++;
  }
  return start;
};
