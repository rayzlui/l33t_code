//From 413 in LeetCode

/**
 * @param {number[]} A
 * @return {number}
 */
function numberOfArithmeticSlices(A) {
  let result = 0;
  for (let i = 0; i < A.length - 2; i++) {
    let start = A[i + 1] - A[i];
    function recursion(array) {
      if (array[1] - array[0] === start) {
        result++;
      } else {
        return;
      }
      recursion(array.slice(1));
    }
    recursion(A.slice(i + 1));
  }
  return result;
}
