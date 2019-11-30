//From 1007 in LeetCode

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
function minDominoRotations(A, B) {
  if (A.length === 1 || B.length === 1) {
    return 0;
  }
  let countA = A.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  let countB = B.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  for (let a in countA) {
    if (countA[a] + countB[a] >= A.length) {
      let changeA = A.length - countA[a];
      let changeB = B.length - countB[a];
      if (
        A.every((x, index) => {
          return x === a / 1 || B[index] === a / 1;
        })
      ) {
        return changeA > changeB ? changeB : changeA;
      }
    }
  }
  return -1;
}
