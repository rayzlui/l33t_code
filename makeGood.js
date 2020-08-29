//From 1544 in LeetCode

/**
 * @param {string} s
 * @return {string}
 */
function makeGood(s) {
  let arr = s.split('');
  for (let i = 0; i < arr.length - 1; i++) {
    let compareOne = arr[i];
    let compareTwo = arr[i + 1];
    if (
      compareOne !== compareTwo &&
      compareOne.toLowerCase() === compareTwo.toLowerCase()
    ) {
      arr.splice(i, 2);
      i = i - 2 > 0 ? i - 2 : -1;
    }
    if (arr.length === 0) {
      return '';
    }
  }
  return arr.join('');
}
