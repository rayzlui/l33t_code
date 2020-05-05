//From 1431 in LeetCode

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
function kidsWithCandies(candies, extraCandies) {
  let max = Math.max(...candies);
  return candies.map(x => x + extraCandies >= max);
}
