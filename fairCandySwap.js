//From 888 in LeetCode

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
function fairCandySwap(A, B) {
  let sumA = A.reduce((x, y) => x + y, 0);
  let sumB = B.reduce((a, b) => a + b, 0);
  let dif = (sumA + sumB) / 2 - sumA;
  for (let i = 0; i < A.length; i++) {
    let x = A[i];
    for (let j = 0; j < B.length; j++) {
      let y = B[j];
      if (y - x === dif) {
        return [x, y];
      }
    }
  }
}
