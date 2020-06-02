//From 1018 in LeetCode

/**
 * @param {number[]} A
 * @return {boolean[]}
 */
function prefixesDivBy5(A) {
  let result = [];
  let num = 0;
  for (let i = 0; i < A.length; i++) {
    let curr = A[i];
    num = (num * 2 + curr) % 5;
    result.push(num === 0);
  }
  return result;
}
