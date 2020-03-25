//From 1387 in LeetCode

/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
function getKth(lo, hi, k) {
  let powers = {};
  let nums = [];
  for (let i = lo; i <= hi; i++) {
    let count = 0;
    let num = i;
    nums.push(i);
    while (num !== 1) {
      if (num % 2 === 0) {
        num = num / 2;
      } else {
        num = num * 3 + 1;
      }
      count++;
    }
    powers[i] = count;
  }
  return nums.sort((x, y) => {
    if (powers[x] === powers[y]) {
      return x - y;
    } else {
      return powers[x] - powers[y];
    }
  })[k - 1];
}
