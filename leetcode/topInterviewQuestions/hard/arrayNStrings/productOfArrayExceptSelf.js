/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  nums = [1, 0];

  let totalProduct = 1;
  let zeroPositions = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      totalProduct *= nums[i];
    } else {
      zeroPositions.push(i);
    }
  }

  let productArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (zeroPositions.length == 1) {
      if (nums[i] == 0) {
        productArr.push(totalProduct);
      } else {
        productArr.push(0);
      }
    } else if (zeroPositions.length > 1) {
      productArr.push(0);
    } else {
      productArr.push(totalProduct / nums[i]);
    }
  }
  return productArr;
};
