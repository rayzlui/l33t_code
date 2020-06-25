//From 1402 in LeetCode

/**
 * @param {number[]} satisfaction
 * @return {number}
 */
function maxSatisfaction(satisfaction) {
  satisfaction.sort((x, y) => x - y);
  let sum = satisfaction.reduce(
    (acc, curr, index) => {
      acc[0] = acc[0] + curr * (index + 1);
      acc[1] = acc[1] + curr;
      return acc;
    },
    [0, 0],
  );
  let result = sum[0];
  let sub = sum[1];
  let removed = result - sub;
  while (removed > result) {
    sub = sub - satisfaction.shift();
    result = removed;
    removed = result - sub;
  }
  return result;
}
