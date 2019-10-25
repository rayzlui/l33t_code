//From 686 in LeetCode

/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
function repeatedStringMatch(A, B) {
  let length = Math.ceil(B.length / A.length);
  if (length <= 1) {
    if (A.includes(B)) {
      return 1;
    }
  }
  let newA = '';
  let i = 0;
  for (; i < length + 1; i++) {
    newA = newA + A;
    if (newA.includes(B)) {
      return i + 1;
    }
  }

  return -1;
}
