//From 77 in LeetCode

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
function combine(n, k) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    let array = [i];
    let seen = { i: true };
    function recursion(array, seen) {
      if (array.length === k) {
        result.push(array);
        return;
      }
      for (let j = array[array.length - 1] + 1; j <= n; j++) {
        let copy = array.slice();
        let seened = Object.assign({}, seen);
        if (seen[j] === undefined) {
          copy.push(j);
          seened[j] = true;
          recursion(copy, seened);
        }
      }
    }
    recursion(array, seen);
  }
  return result;
}
