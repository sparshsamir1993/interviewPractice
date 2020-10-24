/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  // nums = [1, 2, 3, 4];
  let result = [];
  generateSubsets(nums, result, [], 0);
  return result;
};

function generateSubsets(nums, result, currentNumber, index) {
  result.push([...currentNumber]);

  for (let i = index; i < nums.length; i++) {
    currentNumber.push(nums[i]);
    generateSubsets(nums, result, currentNumber, i + 1);
    currentNumber.pop();
  }
}
