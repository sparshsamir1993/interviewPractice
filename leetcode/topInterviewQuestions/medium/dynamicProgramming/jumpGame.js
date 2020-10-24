/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  //   nums = [2, 0, 0];
  //   nums = [3, 2, 1, 0, 4];
  nums = [8, 7, 6, 5, 7, 3, 2, 1, 0, 0, 0];
  let result = { answer: false };
  let distanceHash = {}; //{index: destinationIndex}
  if (nums.length == 1) return true;
  let distanceStack = [];
  figureOutJumps(nums, result, 0, distanceHash, distanceStack);
  return result.answer;
};

function figureOutJumps(
  nums,
  result,
  currentIndex,
  distanceHash,
  distanceStack
) {
  if (currentIndex + nums[currentIndex] >= nums.length - 1) {
    result.answer = true;
  }
  if (result.answer) {
    return;
  }
  let startIndex = currentIndex + nums[currentIndex];
  distanceHash[currentIndex] = startIndex;
  let lastIndex = distanceStack[distanceStack.length - 1];
  if (!lastIndex || lastIndex < startIndex) {
    distanceStack.push(startIndex);
    for (let i = startIndex; i > currentIndex; i--) {
      if (nums[i] && !distanceHash[i]) {
        figureOutJumps(nums, result, i, distanceHash, distanceStack);
      }
    }
  }
}
