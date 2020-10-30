/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums = [-1, 0, 1, 2, -1, -4, -5, 2, 3, 7];
  nums = nums.sort((a, b) => a - b);
  let i = 0;
  let result = [];
  let resultSet = new Set();
  let current;
  let threeSumHash = {};

  let twoSumArr = Array(nums.length)
    .fill(0)
    .map((_) => Array(nums.length).fill(0));
  // let result = [];

  for (let i = 0; i < nums.length; i++) {
    let passedHash = {};
    for (let j = i + 1; j < nums.length; j++) {
      twoSumArr[i][j] = nums[i] + nums[j];
      let diff = 0 - twoSumArr[i][j];
      if (passedHash[diff] != undefined) {
        result.push([nums[i], nums[j], diff]);
      }
      if (passedHash[nums[j]] == undefined) passedHash[nums[j]] = true;
    }
  }
  let finalRes = result.filter((x) => {
    let sorted = x.sort((a, b) => a - b);
    if (!resultSet.has(sorted.join())) {
      resultSet.add(sorted.join());
      return x;
    }
  });
  // console.log(nums, twoSumArr, finalRes, resultSet);
  return finalRes;
};
