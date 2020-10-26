/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let countHash = {};
  //   nums = [1, 1, 1, 2, 2, 3];
  nums = [3, 0, 1, 0];
  k = 2;
  result = [];
  for (let i = 0; i < nums.length; i++) {
    countHash[nums[i]] != undefined
      ? countHash[nums[i]]++
      : (countHash[nums[i]] = 1);
  }

  let keys = Object.keys(countHash);
  for (let i = 0; i < k; i++) {
    let max = -1;
    let index = 0;
    keys.map((x) => {
      if (countHash[x] > max) {
        max = countHash[x];
        index = x;
      }
    });
    result.push(index);
    countHash[index] = -1;
  }
  return result;
};
