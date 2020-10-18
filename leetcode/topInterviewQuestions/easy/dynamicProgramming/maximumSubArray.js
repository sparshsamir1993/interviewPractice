/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  //   nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  //   nums = [-2, -1];
  nums = [-2, -1, -2];
  let finalmax = -1 * 2 ** 31;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (nums[i + 1] != undefined && nums[i + 1] + sum < nums[i + 1]) {
      sum = nums[i + 1] >= 0 ? 0 : sum;
      sum = Math.max(sum, nums[i]);
    } else if (nums[i + 1] == undefined) {
      sum = Math.max(sum, nums[i]);
    }
    finalmax = Math.max(sum, finalmax);
  }
  return finalmax;
};
