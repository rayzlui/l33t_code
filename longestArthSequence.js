//From 1027 in LeetCode

/**
 * @param {number[]} A
 * @return {number}
 */
function longestArithSeqLength(A) {
  let max = 2;
  for (let i = 0; i < A.length; i++) {
    let start = [A[i]];
    for (let j = i + 1; j < A.length; j++) {
      let second = A[j];
      let diff = start - second;
      let copy = start.slice();
      copy.push(second);
      for (let k = j + 1; k < A.length; k++) {
        let next = A[k];
        if (second - next === diff) {
          copy.push(next);
          second = next;
          max = Math.max(max, copy.length);
        }
      }
    }
  }
  return max;
}
