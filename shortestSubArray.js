//From 697 of leetcode

/**
 * @param {number[]} nums
 * @return {number}
 */
function findShortestSubArray(nums) {
  let largestDegree = nums[0];
  let smallestContig =
    nums.lastIndexOf(largestDegree) - nums.indexOf(largestDegree);
  let counter = {};
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    counter[current] =
      counter[current] === undefined ? 1 : (counter[current] += 1);
    if (counter[current] > counter[largestDegree]) {
      largestDegree = current;
      smallestContig = nums.lastIndexOf(current) - nums.indexOf(current);
    } else if (counter[current] === counter[largestDegree]) {
      let currSubArr = nums.lastIndexOf(current) - nums.indexOf(current);
      if (smallestContig > currSubArr) {
        smallestContig = currSubArr;
        largestDegree = current;
      }
    }
  }
  return smallestContig + 1;
}
