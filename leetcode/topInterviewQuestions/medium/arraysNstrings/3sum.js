/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // nums = [-1, 0, 1, 2, -1, -4, -5, 2, 3, 7];
  nums = [-1, 0, 1, 2, -1, -4];
  let numsSet = {};
  // nums = [];
  // numsSet.forEach((x) => nums.push(x));
  nums = nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != nums[i - 1]) {
      let toFind = 0 - nums[i];
      if (nums[i] > 0) break;
      let low = i + 1,
        high = nums.length - 1;
      while (low < high) {
        if (nums[low] + nums[high] == toFind) {
          result.push([nums[i], nums[low], nums[high]]);
          // numsSet[[nums[i], nums[low], nums[high]].toString()] = [
          //   nums[i],
          //   nums[low],
          //   nums[high],
          // ];
          while (low < high && nums[low] == nums[low + 1]) low++;
          while (low < high && nums[high] == nums[high - 1]) high--;
          low++;
          high--;
        } else if (nums[low] + nums[high] < toFind) {
          low++;
        } else if (nums[low] + nums[high] > toFind) {
          high--;
        }
      }
    }
  }
  return result;
  // return Object.values(numsSet);
};
