//From 565 in LeetCode

/**
 * @param {number[]} nums
 * @return {number}
 */
function arrayNesting(nums) {
  let holder = {};
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    if (holder[current] === undefined) {
      holder[current] = true;
      let count = 1;
      let next = nums[current];
      while (holder[next] === undefined) {
        holder[next] = true;
        count++;
        next = nums[next];
      }
      max = Math.max(count, max);
    }
  }
  return max;
}
