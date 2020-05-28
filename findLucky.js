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

//faster

/**
 * @param {number[]} arr
 * @return {number}
 */
function findLuckyII(arr) {
  let count = arr.reduce(
    (acc, curr) => {
      if (acc[0][curr]) {
        acc[0][curr]++;
      } else {
        acc[0][curr] = 1;
      }
      if (acc[0][curr] === curr) {
        acc[1][curr] = true;
      } else {
        if (acc[1][curr]) {
          delete acc[1][curr];
        }
      }
      return acc;
    },
    [{}, {}],
  );
  let nums = Object.keys(count[1]);
  return nums.length > 0 ? nums[nums.length - 1] : -1;
}
