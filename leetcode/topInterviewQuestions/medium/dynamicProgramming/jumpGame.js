/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  //   let crossedIndex = {}; // {index: value}
  //   nums = [2, 0, 0];
  //   nums = [3, 2, 1, 0, 4];
  nums = [2, 3, 1, 1, 4];
  let result = { answer: false };
  if (nums.length == 1) return true;
  //   figureOutJumps(nums, result, 0, nums[0]);
  figureOutJumps(nums, result, 0);
  return result.answer;
};

function figureOutJumps(nums, result, currentIndex) {
  if (currentIndex + nums[currentIndex] >= nums.length - 1) {
    result.answer = true;
  }
  if (result.answer) {
    return;
  }
  let startIndex = currentIndex + nums[currentIndex];
  for (let i = startIndex; i > currentIndex; i--) {
    if (nums[i]) {
      figureOutJumps(nums, result, i);
    }
  }
}

// function figureOutJumps(nums, result, currentIndex, currentJump) {
//   if (currentIndex == nums.length - 1) result.answer = true;
//   if (result.answer) return true;
//   for (let i = currentIndex; i < currentIndex + currentJump; i++) {
//     if (i >= nums.length) {
//       break;
//     }
//     if (currentJump) {
//       figureOutJumps(nums, result, i + 1, nums[i + 1]);
//     }
//   }
// }
