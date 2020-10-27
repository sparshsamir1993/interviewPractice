/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  //   nums = [1, 2, 3, 1];
  nums = [-2147483647, -2147483648];
  if (nums.length == 1) return 0;
  nums = [2 ** 32 * -1, ...nums, 2 ** 32 * -1];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
      return i - 1;
    }
  }
};
