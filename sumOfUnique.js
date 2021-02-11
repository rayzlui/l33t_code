//From 1748 in LeetCode

/**
 * @param {number[]} nums
 * @return {number}
 */
function sumOfUnique(nums) {
  let sum = 0;
  let count = {};
  nums.forEach(x => {
    if (count[x] === 1) {
      sum -= x;
      count[x]++;
    } else if (count[x] === undefined) {
      count[x] = 1;
      sum += x;
    }
  });
  return sum;
}
