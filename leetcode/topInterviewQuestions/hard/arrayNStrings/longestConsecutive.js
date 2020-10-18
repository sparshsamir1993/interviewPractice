/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  //   nums = [100, 4, 200, 1, 3, 2];
  nums = [0, 1, 2, 1];
  nums = [...new Set(nums)];
  nums = nums.sort((a, b) => a - b);
  let maxLen = 1;
  if (nums.length == 0) return 0;
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    let consLen = 1;
    if (nums[i + 1] != undefined && nums[i + 1] - nums[i] == 1) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] - nums[j - 1] == 1) {
          consLen++;
        } else {
          break;
        }
      }
      maxLen = Math.max(consLen, maxLen);
    }
  }
  return maxLen;
};
