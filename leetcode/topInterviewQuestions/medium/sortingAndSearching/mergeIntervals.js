/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals = [
    [1, 4],
    [0, 2],
    [3, 5],
  ];
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < intervals.length; i++) {
    for (let j = i + 1; j < intervals.length; ) {
      if (
        intervals[i][1] >= intervals[j][0] &&
        intervals[j][1] >= intervals[i][1]
      ) {
        intervals[i][1] = intervals[j][1];
        intervals.splice(j, 1);
      } else if (
        intervals[i][1] >= intervals[j][0] &&
        intervals[j][1] <= intervals[i][1]
      ) {
        intervals.splice(j, 1);
      } else {
        j++;
      }
    }
  }
  return intervals;
};
