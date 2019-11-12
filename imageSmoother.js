//From 661 in LeetCode

/**
 * @param {number[][]} M
 * @return {number[][]}
 */

function checks(i, j) {
  return [
    [i - 1, j - 1],
    [i - 1, j],
    [i - 1, j + 1],
    [i, j - 1],
    [i, j],
    [i, j + 1],
    [i + 1, j - 1],
    [i + 1, j],
    [i + 1, j + 1],
  ];
}

function imageSmoother(M) {
  let result = [];
  for (let i = 0; i < M.length; i++) {
    let row = [];
    for (let j = 0; j < M[0].length; j++) {
      let check = checks(i, j);
      let smoothed = check.reduce(
        (acc, curr) => {
          if (
            curr[0] >= 0 &&
            curr[0] < M.length &&
            curr[1] >= 0 &&
            curr[1] < M[0].length
          ) {
            acc[0] += M[curr[0]][curr[1]];
            acc[1]++;
          }
          return acc;
        },
        [0, 0],
      );
      row.push(Math.floor(smoothed[0] / smoothed[1]));
    }
    result.push(row);
  }
  return result;
}
