//From 36 in LeetCode

/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
  let rows = {};
  let columns = {};
  for (let i = 0; i < board.length; i++) {
    let row = board[i];

    for (let j = 0; j < row.length; j++) {
      if (row[j] !== '.') {
        if (rows[i]) {
          if (rows[i].includes(row[j])) {
            return false;
          }
          rows[i].push(row[j]);
        } else {
          rows[i] = [row[j]];
        }
        if (columns[j]) {
          if (columns[j].includes(row[j])) {
            return false;
          }
          columns[j].push(row[j]);
        } else {
          columns[j] = [row[j]];
        }
      }
    }
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let check = [];
      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          let value = board[l + 3 * j][k + 3 * i];
          if (value !== '.') {
            if (check.includes(value)) {
              return false;
            }
            check.push(value);
          }
        }
      }
    }
  }
  return true;
}
