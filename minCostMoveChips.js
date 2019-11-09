//From 1217 from LeetCode

/**
 * @param {number[]} chips
 * @return {number}
 */
function minCostToMoveChips(chips) {
  let evens = chips.filter(x => x % 2 === 0).length;
  let odds = chips.filter(x => x % 2 === 1).length;
  return evens > odds ? odds : evens;
}
