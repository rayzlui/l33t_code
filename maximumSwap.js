//From 670 in LeetCode

/**
 * @param {number} num
 * @return {number}
 */
function maximumSwap(num) {
  let split = num.toString().split('');
  let result = '';
  while (split.length > 0) {
    let first = split.shift() / 1;
    let max = Math.max(...split);
    if (first >= max) {
      result += first;
    } else {
      let copy = split.slice();
      let index = copy.reverse().indexOf(max.toString());
      result += copy[index];
      copy[index] = first;
      result += copy.reverse().join('');
      return result;
    }
  }
  return result;
}
