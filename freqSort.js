//From 1636 in LeetCode

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function frequencySort(nums) {
  let count = nums.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  let keys = Object.keys(count);
  keys.sort((x, y) => {
    if (count[x] === count[y]) {
      return y - x;
    } else {
      return count[x] - count[y];
    }
  });
  return keys.reduce((acc, curr) => {
    for (let i = 0; i < count[curr]; i++) {
      acc.push(curr);
    }
    return acc;
  }, []);
}
