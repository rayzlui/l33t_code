//From 667 in LeetCode

/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
function constructArray(n, k) {
  //we alternate front and back until we reach k-1, then we have it consecutive aka difference === 1
  let array = [];
  let counter = 0;
  for (let i = 1; i <= n; i++) {
    array.push(i);
  }
  if (k === 1) {
    return array;
  }
  let front = array.splice(0, array.length - k);
  let result = [];
  for (let j = 0; j < array.length / 2; j++) {
    if (array[array.length - 1 - j] === array[j]) {
      result.push(array[j]);
    } else {
      result.push(array[array.length - 1 - j], array[j]);
    }
  }
  return front.concat(result);
}
