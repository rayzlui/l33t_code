//From 378 in LeetCode

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
function kthSmallest(matrix, k) {
  let arr = matrix
    .reduce((acc, curr) => {
      curr.reduce((inside, current) => {
        inside.push(current);
        return inside;
      }, acc);
      return acc;
    }, [])
    .sort((x, y) => x - y);

  return arr[k - 1];
}
