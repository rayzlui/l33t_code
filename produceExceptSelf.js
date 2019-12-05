//From 238 in LeetCode

/**
 * @param {number[]} nums
 * @return {number[]}
 */

function productExceptSelf(nums) {
  let hasZero = false;
  let zeroCount = 0;
  let total = nums.reduce((acc, curr) => {
    if (curr === 0) {
      hasZero = true;
      zeroCount++;
      return acc;
    } else {
      acc = acc * curr;
      return acc;
    }
  }, 1);
  if (zeroCount > 1) {
    return nums.map(x => 0);
  }
  return nums.map(x => {
    if (x === 0) {
      return total;
    } else {
      if (hasZero) {
        return 0;
      } else {
        return x ** -1 * total;
      }
    }
  });
}
