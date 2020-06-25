//From 1486 in LeetCode

/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
function xorOperation(n, start) {
  let nums = [];
  for (let i = 0; i < n; i++) {
    nums.push(start + 2 * i);
  }
  let first = nums.shift();
  return nums.reduce((acc, curr) => acc ^ curr, first);
}

//faster

/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
function xorOperationII(n, start) {
  let nums = start;
  for (let i = 1; i < n; i++) {
    nums = nums ^ (start + 2 * i);
  }
  return nums;
}
