/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = [];
  nums = [1, 2, 3, 4];
  solveNumberPermutation(nums, result, 0, nums.length - 1);
  return result;
};

function solveNumberPermutation(nums, result, startIndex, endIndex) {
  if (startIndex == endIndex) {
    result.push(nums);
  } else if (startIndex < endIndex) {
    for (let i = startIndex; i <= endIndex; i++) {
      nums = swap([...nums], startIndex, i);
      solveNumberPermutation(nums, result, startIndex + 1, endIndex);
      nums = swap([...nums], startIndex, i);
    }
  }
}

function swap(nums, startIndex, endIndex) {
  let temp = nums[endIndex];
  nums[endIndex] = nums[startIndex];
  nums[startIndex] = temp;
  return nums;
}
