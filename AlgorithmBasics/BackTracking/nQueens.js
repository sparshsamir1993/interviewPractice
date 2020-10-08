function nQueens(n) {
  let board = Array(n)
    .fill(0)
    .map((_) => Array(n).fill("."));
  let result = [];
  let currPlace = {};
  solve(0, [], n, board, result, currPlace);
  console.log(result);
}

function solve(row, columns, n, board, result, currPlace) {
  if (row == n) {
    console.log(columns);
    result.push([...board]);
  } else {
    for (let i = 0; i < n; i++) {
      placeQueen(row, i, board);
      if (isValid(i, columns, n)) {
        currPlace[row] = i;
        if (!solve(row + 1, columns, n, board, result, currPlace)) {
          columns.pop();
          board[row] = Array(n).fill(".");
          if (row != n) {
            i = currPlace.hasOwnProperty(row) ? currPlace[row] : n + 1;
            if (currPlace.hasOwnProperty(row) && currPlace[row] == n) {
              break;
            }
          }
          if (row == n) {
            break;
          }
        }
      } else {
        removeQueen(row, i, columns, n, board);
        if (i == n - 1) {
          return false;
        }
      }
    }
  }
}
function placeQueen(row, col, board) {
  board[row][col] = "Q";
}
function removeQueen(row, col, columns, n, board) {
  board[row][col] = ".";
}
function isValid(selPos, columns, n) {
  columns.push(selPos);
  let rowId = columns.length - 1;
  for (let i = 0; i < rowId; i++) {
    let diff = Math.abs(columns[i] - columns[rowId]);
    let diffCheck = rowId - i;
    if (diff == 0 || diff == diffCheck) {
      columns.pop();
      return false;
    }
  }
  return true;
}
