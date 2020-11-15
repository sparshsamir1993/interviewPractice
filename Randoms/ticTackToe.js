let ticTackToe = function () {
  let log = console.log;
  let winner;
  let player1 = "X";
  let player2 = "0";
  let board = Array(3)
    .fill(0)
    .map((_) => Array(3).fill(" "));
  log(board);

  let move = (row, col, player) => {
    if (winner) {
      log("winner is " + winner);
      return;
    }
    if (board[row][col] != "*") return;
    if (player == 2) {
      board[row][col] = player2;
      log(board);
    } else if (player == 1) {
      board[row][col] = player1;
      log(board);
    }
    checkWinner();
  };
  let checkWinner = () => {
    for (i in board) {
      if (board[i][0] == board[i][1] && board[i][1] == board[i][2]) {
        if (board[i][0] == player1) {
          console.log("Player 1 wins");
          winner = player1;
          return;
        } else if (board[i][0] == player2) {
          console.log("Player 2 wins");
          winner = player2;
          return;
        }
      }
      if (board[0][i] == board[1][i] && board[1][i] == board[2][i]) {
        if (board[0][i] == player1) {
          console.log("Player 1 wins");
          winner = player1;
          return;
        } else if (board[0][i] == player2) {
          console.log("Player 2 wins");
          winner = player2;
          return;
        }
      }
    }
    if (board[0][0] == board[1][1] && board[1][1] == board[2][2]) {
      if (board[0][0] == player1) {
        console.log("Player 1 wins");
        winner = player1;
        return;
      } else if (board[0][0] == player2) {
        console.log("Player 2 wins");
        winner = player2;
        return;
      }
    }
    if (board[0][2] == board[1][1] && board[1][1] == board[2][0]) {
      if (board[1][1] == player1) {
        console.log("Player 1 wins");
        winner = player1;
        return;
      } else if (board[1][1] == player2) {
        console.log("Player 2 wins");
        winner = player2;
        return;
      }
    }
  };

  return move;
};
