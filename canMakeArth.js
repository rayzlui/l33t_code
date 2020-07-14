//From 1502 in LeetCode

/**
 * @param {number[]} arr
 * @return {boolean}
 */
function canMakeArithmeticProgression(arr) {
  arr.sort((x, y) => x - y);
  let prog = arr[1] - arr[0];
  for (let i = 2; i < arr.length; i++) {
    let diff = arr[i] - arr[i - 1];
    if (diff !== prog) {
      return false;
    }
  }
  return true;
}
