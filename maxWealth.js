//From 1672 in LeetCode

/**
 * @param {number[][]} accounts
 * @return {number}
 */
function maximumWealth(accounts) {
  return Math.max(...accounts.map(x => x.reduce((acc, curr) => acc + curr)));
}

//faster

/**
 * @param {number[][]} accounts
 * @return {number}
 */
function maximumWealthII(accounts) {
  let max = 0;
  accounts.forEach(x => {
    max = Math.max(max, x.reduce((acc, curr) => acc + curr));
  });
  return max;
}
