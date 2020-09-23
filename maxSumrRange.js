//From 1589 in LeetCode

/**
 * @param {number[]} nums
 * @param {number[][]} requests
 * @return {number}
 */
function maxSumRangeQuery(nums, requests) {
  let result = 0;
  let counts = requests.reduce((acc, curr) => {
    let start = curr[0];
    let end = curr[1];
    acc[start]++;
    if (end + 1 < nums.length) {
      acc[end + 1]--;
    }
    return acc;
  }, new Array(nums.length).fill(0));

  counts = counts.reduce((acc, curr, index) => {
    if (index > 0) {
      acc.push(curr + acc[index - 1]);
    } else {
      acc.push(curr);
    }
    return acc;
  }, []);
  counts.sort((x, y) => y - x);
  nums = nums.sort((x, y) => y - x);
  counts.forEach((x, index) => (result += x * nums[index]));
  return result % (10 ** 9 + 7);
}
