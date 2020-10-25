/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  //   nums = [10, 9, 2, 5, 3, 7, 101, 18];
  //   nums = [10, 9, 2, 5, 3, 4];
  //   nums = [4, 10, 4, 3, 8, 9];
  //   nums = [3, 5, 6, 2, 5, 4, 19, 5, 6, 7, 12];
  //   nums = [1, 3, 6, 7, 9, 4, 10, 5, 6];
  nums = [1, 2, 3, 4, 5, 6];
  let finalMax = 1;
  let result = { length: 0 };
  if (nums.length == 0) return 0;
  if (nums.length == 1) return 1;
  for (let i = 0; i < nums.length; i++) {
    let lenArr = [nums[i]];
    findPaths(nums[i], nums, i, lenArr, result);
  }
  return result.length;
};

function findPaths(currentNumber, nums, currentIndex, lenArr, result) {
  result["length"] = Math.max(result.length, lenArr.length);
  if (result["lenght"] > nums.length / 2) return;
  for (let j = currentIndex + 1; j < nums.length; j++) {
    if (nums[j] > currentNumber) {
      lenArr.push(nums[j]);
      findPaths(nums[j], nums, j, lenArr, result);
      lenArr.pop();
    }
  }
}
