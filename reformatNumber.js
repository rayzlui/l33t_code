//From 1694 in LeetCode

/**
 * @param {string} number
 * @return {string}
 */
function reformatNumber(number) {
  let nums = [];
  for (let i = 0; i < number.length; i++) {
    if (number[i] !== ' ' && number[i] !== '-') {
      nums.push(number[i]);
    }
  }
  let result = '';
  let block = '';
  for (let i = 0; i < nums.length; i++) {
    if (block.length === 3) {
      if (nums.length - i > 1) {
        result += block + '-';
        block = nums[i];
      } else if (nums.length - i === 1) {
        result += block[0] + block[1] + '-' + block[2] + nums[i];
        return result;
      } else {
        result += block;
      }
    } else {
      block += nums[i];
    }
  }
  return result + block;
}
