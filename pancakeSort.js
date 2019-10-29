//From 969 in LeetCode

/**
 * @param {number[]} A
 * @return {number[]}
 */
function pancakeSort(A) {
  let result = [];
  let max = Math.max(...A);
  while (A.length > 0) {
    let index = A.indexOf(max);
    let part = A.splice(0, index + 1);
    part = part.reverse();
    A = part.concat(A);
    A = A.reverse();
    result.push(index + 1);
    result.push(A.length);
    A.pop();
    max = Math.max(...A);
  }
  return result;
}
