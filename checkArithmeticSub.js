//From 1630 in LeetCode

/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
function checkArithmeticSubarrays(nums, l, r) {
  let result = [];
  for (let i = 0; i < l.length; i++) {
    let left = l[i];
    let right = r[i] === nums.length - 1 ? nums.length - 1 : r[i];
    let subArray = nums.slice(left, right + 1);

    subArray.sort((x, y) => x - y);
    let diff = subArray[1] - subArray[0];
    let isGood = true;
    for (let j = 1; j < subArray.length - 1; j++) {
      if (subArray[j + 1] - subArray[j] !== diff) {
        result.push(false);
        isGood = false;
        break;
      }
    }
    if (isGood) {
      result.push(true);
    }
  }
  return result;
}
