//From 904 in LeetCode

/**
 * @param {number[]} tree
 * @return {number}
 */
function totalFruit(tree) {
  //want greatest subarray with two elements
  let result = 0;
  let frontNum = null;
  let lastFrontIndex = null;
  let secondNum = null;
  let secondIndex = null;
  let count = 0;
  for (let i = 0; i < tree.length; i++) {
    let current = tree[i];
    if (frontNum === null) {
      frontNum = current;
      lastFrontIndex = i;
      count++;
    } else if (secondNum === null) {
      if (current === frontNum) {
        count++;
      } else {
        secondNum = current;
        secondIndex = i - 1;
        count++;
      }
    } else {
      if (current === frontNum) {
        lastFrontIndex = i;
        count++;
      } else if (current !== secondNum) {
        result = Math.max(result, count);
        i = secondIndex;
        frontNum = null;
        secondNum = null;
        lastFrontIndex = null;
        secondIndex = null;
        count = 0;
      } else {
        count++;
      }
    }
  }
  return Math.max(result, count);
}
