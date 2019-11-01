//From 347 in LeetCode

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
  let holders = {};
  nums.forEach(x => {
    if (holders[x]) {
      holders[x]++;
    } else {
      holders[x] = 1;
    }
  });
  return (sort = Array.from(new Set(nums))
    .sort((x, y) => holders[y] - holders[x])
    .splice(0, k));
}
