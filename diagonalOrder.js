//From 498 in LeetCode

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function findDiagonalOrder(matrix) {
  if (matrix.length === 0) {
    return [];
  }
  if (matrix.length === 1) {
    return matrix[0];
  }
  if (matrix[0].length === 1) {
    return matrix.reduce((acc, curr) => {
      acc.push(curr[0]);
      return acc;
    }, []);
  }
  let result = [];
  function recursion(x, y, isUp) {
    result.push(matrix[x][y]);
    if (x === matrix.length - 1 && y === matrix[0].length - 1) {
      return;
    }
    if (isUp) {
      if (x === 0) {
        if (y === matrix[0].length - 1) {
          recursion(x + 1, y, !isUp);
        } else {
          recursion(x, y + 1, !isUp);
        }
      } else {
        if (y === matrix[0].length - 1) {
          recursion(x + 1, y, !isUp);
        } else {
          recursion(x - 1, y + 1, isUp);
        }
      }
    } else {
      if (y === 0) {
        if (x === matrix.length - 1) {
          recursion(x, y + 1, !isUp);
        } else {
          recursion(x + 1, y, !isUp);
        }
      } else {
        if (x === matrix.length - 1) {
          recursion(x, y + 1, !isUp);
        } else {
          recursion(x + 1, y - 1, isUp);
        }
      }
    }
  }
  recursion(0, 0, true);

  return result;
}
