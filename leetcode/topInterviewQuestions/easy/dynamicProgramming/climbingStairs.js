/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let first = 0;
  let second = 1;
  if (n == 0) return 0;
  if (n == 1) return 1;
  for (let i = 0; i < n; i++) {
    let temp = first;
    first = second;
    second = first + temp;
  }
  //   console.log(second);
  return second;
};
