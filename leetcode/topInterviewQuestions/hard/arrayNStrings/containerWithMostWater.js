/**
 * @param {number[]} height
 * @return {number}
 */
let maxArea = function (height) {
  height = [1, 2, 1];
  let high = -1;
  let positionHash = {};
  let maxArea = -1;
  for (let i = 0, j = height.length - 1; i < height.length; ) {
    let frontBar = height[i];
    let hindBar = height[j];
    let min = frontBar > hindBar ? hindBar : frontBar;
    let area = min * Math.abs(j - i);
    if (area > high) {
      high = area;
      positionHash["high"] = i;
    }
    frontBar > hindBar ? j-- : i++;
    if (j < i) break;
  }

  return high;
};
