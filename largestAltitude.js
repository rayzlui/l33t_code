//From 1732 in LeetCode

/**
 * @param {number[]} gain
 * @return {number}
 */
function largestAltitude(gain) {
  return Math.max(
    ...gain.reduce(
      (acc, curr, index) => {
        if (index === 0) {
          acc.push(curr);
        } else {
          acc.push(curr + acc[index]);
        }
        return acc;
      },
      [0],
    ),
  );
}