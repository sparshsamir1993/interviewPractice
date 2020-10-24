/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  board = [
    ["b", "a", "a", "b", "a", "b"],
    ["a", "b", "a", "a", "a", "a"],
    ["a", "b", "a", "a", "a", "b"],
    ["a", "b", "a", "b", "b", "a"],
    ["a", "a", "b", "b", "a", "b"],
    ["a", "a", "b", "b", "b", "a"],
    ["a", "a", "b", "a", "a", "b"],
  ];
  word = "abaabbbaaaaababbbaaaaabbbaab";

  if (board.length == 1 && board[0].length == 1 && board[0][0] == word) {
    return true;
  } else if (board.length == 1 && board[0].length == 1 && board[0][0] != word) {
    return false;
  }
  let result = { data: false };
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] == word[0]) {
        findWord([...board], word, "", i, j, undefined, undefined, 0, result);
        if (result.data) {
          break;
        }
      }
    }
    if (result.data) {
      break;
    }
  }

  return result.data;
};

function findWord(
  board,
  word,
  currentWord,
  currentRow,
  currentColumn,
  lastRow,
  lastColumn,
  index,
  result
) {
  if (currentWord == word) {
    result.data = true;
    return;
  }
  if (board[currentRow]) {
    // for (let i = currentColumn; i < board[currentRow].length; i++) {
    if (result.data) {
      return;
    }
    if (
      lastColumn != undefined &&
      lastRow != undefined &&
      (Math.abs(currentColumn - lastColumn) > 1 ||
        Math.abs(currentRow - lastRow) > 1 ||
        (Math.abs(currentColumn - lastColumn) == 1 &&
          Math.abs(currentRow - lastRow) != 0) ||
        (Math.abs(currentRow - lastRow) == 1 &&
          Math.abs(currentColumn - lastColumn) != 0))
    ) {
      return;
    }

    if (
      (board[currentRow + 1] &&
        board[currentRow + 1][currentColumn] &&
        currentWord + board[currentRow + 1][currentColumn] == word) ||
      (board[currentRow - 1] &&
        board[currentRow - 1][currentColumn] &&
        currentWord + board[currentRow - 1][currentColumn] == word) ||
      (board[currentRow] &&
        // board[currentRow][i+1] &&
        currentWord + board[currentRow][currentColumn + 1] == word) ||
      (board[currentRow] &&
        // board[currentRow][i] &&
        currentWord + board[currentRow][currentColumn - 1] == word)
    ) {
      result.data = true;
      return;
    }
    if (board[currentRow][currentColumn] == word[index]) {
      let runningWord = currentWord + word[index];
      if (runningWord == word) {
        result.data = true;
        return;
      }
      board[currentRow][currentColumn] = "-";
      lastColumn = currentColumn;
      lastRow = currentRow;

      if (
        board[currentRow + 1] &&
        currentRow + 1 < board.length &&
        board[currentRow + 1][currentColumn] == word[index + 1]
      ) {
        findWord(
          board,
          word,
          currentWord + word[index],
          currentRow + 1,
          currentColumn,
          lastRow,
          lastColumn,
          index + 1,
          result
        );
      }
      if (
        board[currentRow - 1] &&
        currentRow - 1 > -1 &&
        board[currentRow - 1][currentColumn] == word[index + 1]
      ) {
        findWord(
          board,
          word,
          currentWord + word[index],
          currentRow - 1,
          currentColumn,
          lastRow,
          lastColumn,
          index + 1,
          result
        );
      }
      if (
        board[currentRow][currentColumn + 1] &&
        board[currentRow][currentColumn + 1] == word[index + 1]
      ) {
        findWord(
          board,
          word,
          currentWord + word[index],
          currentRow,
          currentColumn + 1,
          lastRow,
          lastColumn,
          index + 1,
          result
        );
      }
      if (
        board[currentRow] &&
        currentColumn - 1 > -1 &&
        board[currentRow][currentColumn - 1] == word[index + 1]
      ) {
        findWord(
          board,
          word,
          currentWord + word[index],
          currentRow,
          currentColumn - 1,
          lastRow,
          lastColumn,
          index + 1,
          result
        );
      }
      board[currentRow][currentColumn] = word[index];
      lastRow = undefined;
      lastColumn = undefined;
      // index--;
    } else if (currentRow + 1 < board.length) {
      findWord(
        board,
        word,
        currentWord,
        currentRow,
        currentColumn + 1,
        lastRow,
        lastColumn,
        index,
        result
      );
      findWord(
        board,
        word,
        currentWord,
        currentRow + 1,
        currentColumn,
        lastRow,
        lastColumn,
        index,
        result
      );
    }
    // }
  }
}
