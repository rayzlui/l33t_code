//From 371 in LeetCode

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    let currentNum = numbers[i];
    let dif = target - currentNum;
    let nums = numbers.slice(i + 1);
    let index = nums.indexOf(dif);
    if (index !== -1) {
      return [i + 1, index + 1 + (i + 1)];
    }
  }
}
