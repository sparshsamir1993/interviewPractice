var moveZeroes = function (nums) {
  nums = [0, 1, 0, 3, 12];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0 && nums[i + 1] && nums[i + 1] > 0) {
      let temp = nums[i + 1];
      nums[i + 1] = 0;
      nums[i] = temps;
    }
  }
  //    let cpy = [...nums]
  //    for (let i = 0, j = 0; i < nums.length; i++) {
  //     if (cpy[j] === 0) {
  //       cpy = [...nums.slice(0, j), ...nums.slice(j + 1, nums.length)];
  //       cpy.push(0);
  //     } else {
  //       j++;
  //     }
  //   }
  //     for(let i=0;i<cpy.length;i++)
  //         nums[i] = cpy[i]
  console.log(nums);
};
