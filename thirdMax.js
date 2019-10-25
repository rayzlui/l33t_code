//From 414 in LeetCode

/**
 * @param {number[]} nums
 * @return {number}
 */
function thirdMax(nums) {
  let noDups = Array.from(new Set(nums));
  if (noDups.length < 3) {
    return Math.max(...nums);
  }
  let sorted = noDups.sort((x, y) => x - y);

  return sorted[sorted.length - 3];
}
