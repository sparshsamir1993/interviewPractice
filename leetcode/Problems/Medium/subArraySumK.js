/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var totalSubArraySum = function (nums, k) {
  nums = [0, 6, 2, 1, 4, 5, 8, 7, -2, 4, -1, 6];
  k = 9;
  let dpArr = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    dpArr[i] = dpArr[i - 1] + nums[i];
  }
  // for (let i = 0; i < nums.length - 2;)
  console.log(nums, dpArr);
};
