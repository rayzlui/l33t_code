//From 575 in LeetCode

/**
 * @param {number[]} candies
 * @return {number}
 */
function distributeCandies(candies) {
  let set = new Set(candies);
  return Math.min(candies.length / 2, set.size);
}
