/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];
  k = 4;
  return findKthLarge(nums, k, -1);
};

function findKthLarge(nums, k, prevMax) {
  let index = 0;
  let max = nums[index];
  if (k == 0) return prevMax;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
      index = i;
    }
  }
  nums.splice(index, 1);
  return findKthLarge(nums, k - 1, max);
}
