/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums = [
    4,
    -10,
    -11,
    -12,
    -8,
    -12,
    -14,
    -11,
    -6,
    2,
    -4,
    2,
    3,
    12,
    -3,
    -12,
    -14,
    -12,
    -8,
    -9,
    -6,
    -3,
    10,
    2,
    14,
    10,
    7,
    -7,
    -9,
    0,
    -9,
    10,
    -2,
    -5,
    14,
    5,
    -9,
    7,
    9,
    0,
    -14,
    12,
    10,
    4,
    9,
    -8,
    8,
    11,
    -5,
    -15,
    -13,
    -3,
    -11,
    4,
    14,
    11,
    -1,
    -2,
    -11,
    5,
    14,
    -4,
    -8,
    -3,
    6,
    -9,
    9,
    12,
    6,
    3,
    -10,
    7,
    0,
    -15,
    -3,
    -13,
    -8,
    12,
    13,
    -5,
    12,
    -15,
    7,
    8,
    -4,
    -2,
    4,
    2,
    3,
    9,
    -8,
    2,
    -10,
    -1,
    6,
    3,
    -2,
    0,
    -7,
    11,
    -12,
    -2,
    3,
    -4,
    -2,
    7,
    -2,
    -3,
    4,
    -12,
    -1,
    1,
    10,
    13,
    -5,
    -9,
    -12,
    6,
    8,
    7,
    0,
    7,
    -6,
    5,
    13,
    8,
    -14,
    -12,
  ];
  //   nums = nums.sort((a, b) => a - b);
  let i = 0;
  let result = [];
  let current;
  let threeSumHash = {};
  do {
    let copy = [...nums];
    current = copy.splice(i, 1)[0];
    let diff = 0 - current;
    let s;
    do {
      s = findTwoSum(copy, diff);
      if (s) {
        let [first, second] = s;
        if (first != undefined && second != undefined) {
          let threeSum = [nums[i], first, second];
          let threeSumString = [nums[i], first, second]
            .sort((a, b) => a - b)
            .join();
          if (!threeSumHash[threeSumString]) {
            threeSumHash[threeSumString] = threeSum;
          }
        }
      }
    } while (s != undefined);
    i++;
  } while (current != undefined);

  return Object.values(threeSumHash);
};
let findTwoSum = function (nums, target) {
  let passedSet = {};
  for (let i = nums.length - 1; i >= 0; i--) {
    let diff = target - nums[i];
    if (passedSet[diff] > -1) {
      let newReturnArr = [nums[i], diff];
      nums.splice(i, 1);
      if (passedSet[diff] == nums.length) {
        nums.pop();
      } else {
        nums.splice(passedSet[diff] - 1, 1);
      }

      return newReturnArr;
    } else {
      passedSet[nums[i]] = i;
    }
  }
};
