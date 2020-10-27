/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  target = 2;
  //   nums = [5, 7, 7, 8, 8, 10];
  //   nums = [1];
  nums = [1, 2, 2];
  let start = -1;
  let end = -1;
  let startPresent = new Set();
  let endPresent = new Set();
  for (let i = 0, j = nums.length - 1; i <= nums.length; ) {
    if (nums[i] == target && !startPresent.has(target)) {
      start = i;
      startPresent.add(target);
    } else if (nums[i] != target) {
      i++;
    }
    if (nums[j] == target && !endPresent.has(target)) {
      end = j;
      endPresent.add(target);
    } else if (nums[j] != target) {
      j--;
    }
    if (start != -1 && end != -1) {
      break;
    }
  }
  return [start, end];
};
