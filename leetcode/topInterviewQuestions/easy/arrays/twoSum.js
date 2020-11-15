/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let passedSet = {};
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in passedSet) {
      return [i, passedSet[target - nums[i]]];
    }
    passedSet[nums[i]] = i;
  }
};
