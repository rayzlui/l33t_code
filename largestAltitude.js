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

//faster

/**
 * @param {number[]} gain
 * @return {number}
 */
function largestAltitudeII(gain) {
  let largest = 0;
  gain.reduce(
    (acc, curr, index) => {
      if (index === 0) {
        largest = Math.max(curr, largest);
        acc.push(curr);
      } else {
        largest = Math.max(curr + acc[index], largest);
        acc.push(curr + acc[index]);
      }
      return acc;
    },
    [0],
  );
  return largest;
}
