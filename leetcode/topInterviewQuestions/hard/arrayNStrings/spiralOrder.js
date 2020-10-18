/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  matrix = [[7], [9], [6]];
  //   matrix = [
  //     [1, 2, 3, 4],
  //     [5, 6, 7, 8],
  //     [9, 10, 11, 12],
  //   ];
  let spiralArray = [];

  while (matrix.length) {
    spiralArray = [...spiralArray, ...matrix.shift()]; //first row
    let columns = matrix[0] ? matrix[0].length : 0;
    let rows = matrix.length;
    if (columns) {
      for (let i = 0; i < rows; i++) {
        // last column
        spiralArray.push(matrix[i][columns - 1]);
        matrix[i].pop();
      }
    }
    if (matrix[matrix.length - 1]) {
      spiralArray = [...spiralArray, ...matrix[matrix.length - 1].reverse()]; // last row
    }
    matrix.pop();
    if (columns) {
      let rows = matrix.length;
      for (let i = rows - 1; i >= 0; i--) {
        // last column
        if (matrix[i][0] != undefined) {
          spiralArray.push(matrix[i][0]);
        }

        matrix[i].shift();
      }
    }
  }
  console.log(spiralArray);
};
