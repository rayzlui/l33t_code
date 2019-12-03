//From 462 in LeetCode

/**
 * @param {number[]} nums
 * @return {number}
 */
function minMoves2(nums) {
  let sorted = nums.sort((x, y) => x - y);
  let median = sorted[Math.floor(sorted.length / 2)];
  return nums.reduce((acc, curr) => {
    let diff = Math.abs(curr - median);
    acc += diff;
    return acc;
  }, 0);
}
