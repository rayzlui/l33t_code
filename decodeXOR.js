//From 1720 in LeetCode

/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
function decode(encoded, first) {
  return encoded.reduce(
    (acc, curr, index) => {
      acc.push(acc[index] ^ curr);
      return acc;
    },
    [first],
  );
}
