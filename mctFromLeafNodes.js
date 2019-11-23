//From 1130 in LeetCode

/**
 * @param {number[]} arr
 * @return {number}
 */
function mctFromLeafValues(arr) {
  //go deeper with lower value nodes because they're cheaper.
  //keep highest value near root
  //group lower nums together to reduce their interactions with higher nums
  //recursion, split at the highest value, go with left and right again until either its the highest value is second to corner or corner, return higher value
  let result = 0;
  function recursion(array) {
    if (array.length === 0) {
      return 0;
    }
    if (array.length == 2) {
      result += array.reduce((acc, curr) => acc * curr);
      return Math.max(...array);
    }
    let max = Math.max(...array);
    let index = array.indexOf(max);
    let right = array.splice(index + 1);
    let left = array;
    left.pop();
    let hiRight = recursion(right);
    let hiLeft = recursion(left);
    result += hiRight * max + hiLeft * max;
    return max;
  }
  recursion(arr);
  return result;
};
