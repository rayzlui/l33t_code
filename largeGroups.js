//From 830 in LeetCode

/**
 * @param {string} S
 * @return {number[][]}
 */
function largeGroupPositions(S) {
  let result = [];
  let size = 1;
  for (let i = 0; i < S.length - 1; i++) {
    let current = S[i];
    let next = S[i + 1];
    if (current === next) {
      size++;
    } else {
      if (size >= 3) {
        result.push([i - size + 1, i]);
      }
      size = 1;
    }
  }
  if (size >= 3) {
    let length = S.length - 1;
    result.push([length - size + 1, length]);
  }
  return result;
}
