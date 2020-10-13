//From 1608 in LeetCode

/**
 * @param {number[]} nums
 * @return {number}
 */
function specialArray(nums) {
  let count = nums.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  let keys = Object.keys(count).reverse();
  keys.push(-1);
  let numGreaterValues = 0;
  for (let i = 0; i < keys.length; i++) {
    let value = keys[i];
    let amount = count[value];
    if (value < numGreaterValues) {
      return numGreaterValues;
    }
    numGreaterValues += amount;
    if (value < numGreaterValues) {
      return -1;
    }
  }
}
