//From 1237 in LeetCode

/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 *
 * };
 */
/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
function findSolution(customfunction, z) {
  let result = [];
  for (let i = 1; i <= z; i++) {
    for (let j = 1; j <= z; j++) {
      if (customfunction.f(i, j) === z) {
        result.push([i, j]);
      }
    }
  }
  return result;
}
