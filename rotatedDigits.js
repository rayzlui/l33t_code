//From 788 in LeetCode

/**
 * @param {number} N
 * @return {number}
 */
function rotatedDigits(N) {
  let count = 0;
  let goodNums = [0, 1, 2, 5, 6, 8, 9];
  let goodishNums = [0, 1, 8];
  for (let i = 2; i <= N; i++) {
    if (i > 11) {
      let array = i.toString().split('');
      if (
        !array.every(x => goodishNums.includes(x / 1)) &&
        array.every(x => goodNums.includes(x / 1))
      ) {
        count++;
      }
    } else {
      if (goodNums.includes(i) && i !== 8) {
        count++;
      }
    }
  }
  return count;
}
