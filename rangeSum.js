//From 1508 in LeetCode

/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
function rangeSum(nums, n, left, right) {
  let sums = nums.reduce((acc, curr) => {
    if (acc.length === 0) {
      acc.push(curr);
    } else {
      acc.push(curr + acc[acc.length - 1]);
    }
    return acc;
  }, []);
  let subSums = [];
  let removed = nums[0];
  for (let i = 1; i < nums.length; i++) {
    for (let j = i; j < sums.length; j++) {
      subSums.push(sums[j] - removed);
    }
    removed += nums[i];
  }
  subSums.push(...sums);
  return subSums
    .sort((x, y) => x - y)
    .slice(left - 1, right)
    .reduce((acc, curr) => acc + curr);
}
