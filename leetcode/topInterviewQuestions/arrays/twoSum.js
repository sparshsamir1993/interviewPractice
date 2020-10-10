var twoSum = function (nums, target) {
  let passedSet = {};
  nums = [2, 7, 11, 15];
  target = 9;
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (passedSet[diff] > -1) {
      return [i, passedSet[diff]];
    } else {
      passedSet[nums[i]] = i;
    }
  }
};
