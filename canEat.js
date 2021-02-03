//From 1744 in LeetCode

/**
 * @param {number[]} candiesCount
 * @param {number[][]} queries
 * @return {boolean[]}
 */
function canEat(candiesCount, queries) {
  let preSum = candiesCount.reduce(
    (acc, curr) => {
      acc.push(acc[acc.length - 1] + curr);
      return acc;
    },
    [0],
  );
  preSum.shift();
  let result = [];
  for (let i = 0; i < queries.length; i++) {
    let query = queries[i];
    let candy = query[0];
    let day = query[1];
    let max = query[2];
    let totalCandies = preSum[candy]
      ? preSum[candy]
      : preSum[preSum.length - 1];
    let previousCandy = candy ? preSum[candy - 1] : 0;

    if (totalCandies <= day) {
      //make sure we can eat one a day
      result.push(false);
    } else if (previousCandy > day * max) {
      //make sure we can eat enough until the candy we want
      if (previousCandy - day * max >= max) {
        result.push(false);
      } else {
        result.push(true);
      }
    } else {
      result.push(true);
    }
  }
  return result;
}
