//From 289 in LeetCode

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function gameOfLife(board) {
  let copy = board.map(x => x.slice());
  for (let i = 0; i < copy.length; i++) {
    let row = board[i];
    for (let j = 0; j < row.length; j++) {
      let current = row[j];
      if (current === 0) {
        let ones = 0;
        if (i > 0) {
          if (copy[i - 1][j] === 1) {
            ones++;
          }
          if (j > 0) {
            if (copy[i - 1][j - 1] === 1) {
              ones++;
            }
          }
          if (j < row.length - 1) {
            if (copy[i - 1][j + 1] === 1) {
              ones++;
            }
          }
        }
        if (i < copy.length - 1) {
          if (copy[i + 1][j] === 1) {
            ones++;
          }
          if (j > 0) {
            if (copy[i + 1][j - 1] === 1) {
              ones++;
            }
          }
          if (j < row.length - 1) {
            if (copy[i + 1][j + 1] === 1) {
              ones++;
            }
          }
        }
        if (j > 0) {
          if (copy[i][j - 1] === 1) {
            ones++;
          }
        }
        if (j < row.length - 1) {
          if (copy[i][j + 1] === 1) {
            ones++;
          }
        }
        if (ones === 3) {
          row[j] = 1;
        } else {
          row[j] = 0;
        }
      } else {
        let ones = 0;
        if (i > 0) {
          if (copy[i - 1][j] === 1) {
            ones++;
          }
          if (j > 0) {
            if (copy[i - 1][j - 1] === 1) {
              ones++;
            }
          }
          if (j < row.length - 1) {
            if (copy[i - 1][j + 1] === 1) {
              ones++;
            }
          }
        }
        if (i < copy.length - 1) {
          if (copy[i + 1][j] === 1) {
            ones++;
          }
          if (j > 0) {
            if (copy[i + 1][j - 1] === 1) {
              ones++;
            }
          }
          if (j < row.length - 1) {
            if (copy[i + 1][j + 1] === 1) {
              ones++;
            }
          }
        }
        if (j > 0) {
          if (copy[i][j - 1] === 1) {
            ones++;
          }
        }
        if (j < row.length - 1) {
          if (copy[i][j + 1] === 1) {
            ones++;
          }
        }
        if (ones === 2 || ones === 3) {
          row[j] = 1;
        } else {
          row[j] = 0;
        }
      }
    }
  }
  return;
}
