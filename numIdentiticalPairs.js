//From 1512 in LeetCode

/**
 * @param {number[]} nums
 * @return {number}
 */
function summation(num) {
  let answer = 0;
  for (let i = 1; i < num; i++) {
    answer += i;
  }
  return answer;
}
function numIdenticalPair(nums) {
  let count = nums.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  let noDups = new Set(nums);
  let arr = Array.from(noDups);
  return arr.reduce((acc, curr) => {
    if (count[curr] > 1) {
      acc = acc + summation(count[curr]);
    }
    return acc;
  }, 0);
}