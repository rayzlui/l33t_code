//From 1685 in LeetCode

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function getSumAbsoluteDifferences(nums) {
  //subtract nums.length - i  * (difference between previous + current)
  //add i * previous + current
  let start = nums.reduce((acc, curr) => acc + Math.abs(nums[0] - curr), 0);
  let totalNums = nums.length;
  let answer = [start];
  for (let i = 1; i < nums.length; i++) {
    let diff = nums[i] - nums[i - 1];
    if (diff === 0) {
      answer.push(answer[answer.length - 1]);
    } else {
      let add = i * diff;
      let sub = (totalNums - i) * diff;
      let previous = answer[answer.length - 1];
      let newVal = previous + add - sub;
      answer.push(newVal);
    }
  }
  return answer;
}
