//From 771 in LeetCode

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
function numJewelsInStones(J, S) {
  const jewels = J.split('');
  const stones = S.split('');
  return jewels.reduce(
    (numJewels, jewel) =>
      numJewels + stones.filter(stone => stone === jewel).length,
    0,
  );
}
