//From 419 in LeetCode

/**
 * @param {character[][]} board
 * @return {number}
 */
function countBattleships(board) {
  let battleships = 0;
  for (let i = 0; i < board.length; i++) {
    let row = board[i];
    let space = true;
    for (let j = 0; j < row.length; j++) {
      let current = row[j];
      if (current === 'X') {
        if (space) {
          if (i > 0) {
            if (board[i - 1][j] !== 'X') {
              battleships++;
            }
          } else {
            battleships++;
          }
        }
        space = false;
      } else {
        space = true;
      }
    }
  }
  return battleships;
}
