/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    let currRow = matrix[i];
    for (let j = 0; j < currRow.length; j++) {
      if (target > currRow[currRow.length - 1]) {
        break;
      }
      if (currRow[j] == target) {
        return true;
      }
    }
  }
  return false;
};
