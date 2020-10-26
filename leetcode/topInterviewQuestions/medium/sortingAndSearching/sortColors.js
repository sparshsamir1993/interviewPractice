/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let countHash = {};
  nums = [1, 0, 2, 0, 1, 1, 2, 0];
  for (let i = 0; i < nums.length; i++) {
    countHash[nums[i]] != undefined
      ? countHash[nums[i]]++
      : (countHash[nums[i]] = 1);
  }
  for (let i = 0; i < nums.length; i++) {
    if (countHash[0]) {
      nums[i] = 0;
      countHash[0]--;
    } else if (countHash[1]) {
      nums[i] = 1;
      countHash[1]--;
    } else if (countHash[2]) {
      nums[i] = 2;
      countHash[2]--;
    }
  }
  console.log(nums);
};
