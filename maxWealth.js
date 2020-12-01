//From 1672 in LeetCode

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  return Math.max(...accounts.map(x => x.reduce((acc, curr) => acc + curr)));
};
