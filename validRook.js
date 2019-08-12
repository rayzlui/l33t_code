//From 999 in LeetCode

/**
 * @param {character[][]} board
 * @return {number}
 */
function numRookCaptures(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let moves = 0;
      if (board[i][j] === 'R') {
        for (let n = i - 1; n >= 0; n--) {
          if (board[n][j] === 'p') {
            moves++;
            break;
          }

          if (board[n][j] === 'B') {
            break;
          }
        }
        for (let m = i + 1; m < 8; m++) {
          if (board[m][j] === 'p') {
            moves++;
            break;
          }

          if (board[m][j] === 'B') {
            break;
          }
        }
        for (let o = j - 1; o >= 0; o--) {
          if (board[i][o] === 'p') {
            moves++;
            break;
          }

          if (board[i][o] === 'B') {
            break;
          }
        }
        for (let p = j + 1; p < 8; p++) {
          if (board[i][p] === 'p') {
            moves++;
            break;
          }

          if (board[i][p] === 'B') {
            break;
          }
        }
        return moves;
      }
    }
  }
}
