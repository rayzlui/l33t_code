//From 529 in LeetCode

/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
function updateBoard(board, click) {
  let x = click[0];
  let y = click[1];
  if (board[x][y] === 'M') {
    board[x][y] = 'X';
    return board;
  }
  function recursion(x, y) {
    if (board[x][y] !== 'E') {
      return;
    }
    let left = null;
    let right = null;
    let up = null;
    let down = null;
    let upleft = null;
    let downleft = null;
    let upright = null;
    let downright = null;

    if (y > 0) {
      left = board[x][y - 1];
    }
    if (y < board[0].length - 1) {
      right = board[x][y + 1];
    }
    if (x > 0) {
      up = board[x - 1][y];
      if (y < board[0].length - 1) {
        upright = board[x - 1][y + 1];
      }
      if (y > 0) {
        upleft = board[x - 1][y - 1];
      }
    }
    if (x < board.length - 1) {
      down = board[x + 1][y];
      if (y < board[0].length - 1) {
        downright = board[x + 1][y + 1];
      }
      if (y > 0) {
        downleft = board[x + 1][y - 1];
      }
    }
    let adjacents = [
      left,
      right,
      up,
      down,
      upleft,
      upright,
      downleft,
      downright,
    ];
    adjacents = adjacents.filter(x => x === 'M');
    if (adjacents.length > 0) {
      board[x][y] = adjacents.length.toString();
    } else {
      board[x][y] = 'B';
      if (y > 0) {
        recursion(x, y - 1);
      }
      if (y < board[0].length - 1) {
        recursion(x, y + 1);
      }
      if (x > 0) {
        up = recursion(x - 1, y);
        if (y < board[0].length - 1) {
          recursion(x - 1, y + 1);
        }
        if (y > 0) {
          recursion(x - 1, y - 1);
        }
      }
      if (x < board.length - 1) {
        recursion(x + 1, y);
        if (y < board[0].length - 1) {
          recursion(x + 1, y + 1);
        }
        if (y > 0) {
          recursion(x + 1, y - 1);
        }
      }
    }
  }
  recursion(x, y);
  return board;
}
