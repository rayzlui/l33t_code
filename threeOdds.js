//From 1550 in LeetCode

/**
 * @param {number[]} arr
 * @return {boolean}
 */
function threeConsecutiveOdds(arr) {
  let odds = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      odds++;
      if (odds === 3) {
        return true;
      }
    } else {
      odds = 0;
    }
  }
  return false;
}
