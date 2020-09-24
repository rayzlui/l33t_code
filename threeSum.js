//From 15 in LeetCode

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  nums.sort((x, y) => x - y);
  let results = [];
  let seen = {};
  for (let i = 0; i < nums.length - 2; i++) {
    let current = nums[i];
    if (seen[current] === undefined) {
      seen[current] = true;
      let front = i + 1;
      let back = nums.length - 1;
      while (front < back) {
        let num2 = nums[front];
        let num3 = nums[back];
        let sum = num2 + num3 + current;
        if (sum === 0) {
          if (seen[`${current}${num2}${num3}`] === undefined) {
            results.push([current, num2, num3]);
            seen[`${current}${num2}${num3}`] = true;
          }
        }
        if (sum < 0) {
          front++;
        } else if (sum > 0) {
          back--;
        } else {
          front++;
          back--;
        }
      }
    }
  }
  return results;
}
