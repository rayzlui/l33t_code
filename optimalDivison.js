//From 553 in LeetCode

/**
 * @param {number[]} nums
 * @return {string}
 */
function optimalDivision(nums) {
  if (nums.length === 1) {
    return `${nums}`;
  }
  if (nums.length === 2) {
    return `${nums[0]}/` + `${nums[1]}`;
  }
  let numTop = nums[0];
  let denom = '(';
  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];
    denom += num + '/';
  }
  let sub = denom.substr(0, denom.length - 1);
  sub += ')';
  numTop += '/' + sub;
  return numTop;
}
