//From 1417 in LeetCode

/**
 * @param {string} s
 * @return {string}
 */
function reformat(s) {
  s = s.split('');
  let nums = s.reduce(
    (acc, curr) => {
      if (0 * (curr / 1) === 0) {
        acc[0].push(curr);
      } else {
        acc[1].push(curr);
      }
      return acc;
    },
    [[], []],
  );
  if (Math.abs(nums[0].length - nums[1].length) > 1) {
    return '';
  }
  let longer = nums[0].length > nums[1].length ? nums[0] : nums[1];
  let shorter = nums[0].length > nums[1].length ? nums[1] : nums[0];

  let string = '';
  for (let i = 0; i < longer.length; i++) {
    string += longer[i];
    string += shorter[i];
  }
  string =
    shorter.length < longer.length
      ? string.substr(0, string.length - 9)
      : string;
  return string;
}

//faster

/**
 * @param {string} s
 * @return {string}
 */
function reformatII(s) {
  s = s.split('');
  let nums = s.filter(x => 0 * (x / 1) === 0);
  let chars = s.filter(x => 0 * (x / 1) !== 0);
  if (Math.abs(nums.length - chars.length) > 1) {
    return '';
  }
  let longer = nums.length > chars.length ? nums : chars;
  let shorter = nums.length > chars.length ? chars : nums;

  let string = '';
  for (let i = 0; i < longer.length; i++) {
    string += longer[i];
    string += shorter[i];
  }
  string =
    shorter.length < longer.length
      ? string.substr(0, string.length - 9)
      : string;
  return string;
}
