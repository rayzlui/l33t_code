//From 930 in LeetCode

/**
 * @param {number[]} A
 * @param {number} S
 * @return {number}
 */
function numSubarraysWithSum(A, S) {
  let preSum = A.reduce(
    (acc, curr, index) => {
      acc.push(acc[index] + curr);
      return acc;
    },
    [0],
  );
  let holder = {};
  let result = 0;
  for (let a of preSum) {
    result += holder[a] ? holder[a] : 0;
    if (holder[a + S] === undefined) {
      holder[a + S] = 1;
    } else {
      holder[a + S]++;
    }
  }
  return result;
}
