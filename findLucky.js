//From 1394 in LeetCode

/**
 * @param {number[]} arr
 * @return {number}
 */
function findLucky(arr) {
  let count = arr.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  let nums = Object.keys(count);
  let luckys = nums.filter(x => x / 1 === count[x]);
  return luckys.length > 0 ? luckys[luckys.length - 1] : -1;
}