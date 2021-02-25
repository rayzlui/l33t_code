//From 1770 in LeetCode

/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */
function maximumScore(nums, multipliers) {
  let length = multipliers.length - 1;
  let max = 0;
  //store previous sums of going one direction
  //aka if we go left from nums[4] -> nums[8], store that so we can just add it
  //store the max version and in the end we'll add it to the higher. aka bottom up?
  let calculated = new Array(length + 1)
    .fill(0)
    .map(x => new Array(length + 1));
  function dfs(i, j, x) {
    if (calculated[i][j]) {
      return calculated[i][j];
    }
    if (x === length) {
      let lastMulti = multipliers[x];
      let first = nums[i] * lastMulti;
      let last = nums[j] * lastMulti;
      return Math.max(first, last);
    }
    let front = nums[i] * multipliers[x];
    let back = nums[j] * multipliers[x];
    let next = multipliers[x];
    let left = dfs(i + 1, j, x + 1) + front;
    let right = dfs(i, j - 1, x + 1) + back;
    let best = Math.max(left, right);
    calculated[i][j] = best;
    return best;
  }
  max = dfs(0, nums.length - 1, 0);
  return max;
}
