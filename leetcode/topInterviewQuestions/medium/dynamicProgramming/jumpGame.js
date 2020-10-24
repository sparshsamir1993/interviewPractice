/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  //   nums = [2, 0, 0];
  //   nums = [3, 2, 1, 0, 4];
  nums = [8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 0];
  let result = { answer: false };
  let distanceHash = {}; //{index: destinationIndex}
  if (nums.length == 1) return true;
  figureOutJumps(nums, result, 0, distanceHash);
  return result.answer;
};

function figureOutJumps(nums, result, currentIndex, distanceHash) {
  if (currentIndex + nums[currentIndex] >= nums.length - 1) {
    result.answer = true;
  }
  if (result.answer) {
    return;
  }
  let startIndex = currentIndex + nums[currentIndex];
  distanceHash[currentIndex] = startIndex;
  for (let i = startIndex; i > currentIndex; i--) {
    if (nums[i] && !distanceHash[i]) {
      figureOutJumps(nums, result, i, distanceHash);
    }
  }
}
