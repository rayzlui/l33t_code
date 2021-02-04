//From 1672 in LeetCode

/**
 * @param {number[][]} accounts
 * @return {number}
 */
function maximumWealth(accounts) {
  return Math.max(...accounts.map(x => x.reduce((acc, curr) => acc + curr)));
}
