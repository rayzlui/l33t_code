//From 1664 in LeetCode

/**
 * @param {number[]} nums
 * @return {number}
 */
function waysToMakeFair(nums) {
  //presum all with odd/even index, go through array again removing current, and reverse odd/even presum and check if equal
  let sums = nums.reduce(
    (acc, curr, index) => {
      let previous = acc[acc.length - 1].slice();
      if (index % 2 === 0) {
        previous[0] += curr;
      } else {
        previous[1] += curr;
      }
      acc.push(previous);
      return acc;
    },
    [[0, 0]],
  );
  sums.shift();
  let max = sums[sums.length - 1];
  let maxEven = max[0];
  let maxOdd = max[1];
  let results = 0;
  for (let i = 0; i < nums.length; i++) {
    let current = sums[i];
    let currentVal = nums[i];
    let evenIndex = current[0];
    let oddIndex = current[1];
    if (i % 2 === 0) {
      let removedEven = evenIndex - currentVal;
      let removedMaxEven = maxEven - evenIndex;
      let removedMaxOdd = maxOdd - oddIndex;
      if (removedMaxOdd + removedEven === removedMaxEven + oddIndex) {
        results++;
      }
    } else {
      let removedOdd = oddIndex - currentVal;
      let removedMaxOdd = maxOdd - oddIndex;
      let removedMaxEven = maxEven - evenIndex;
      if (removedMaxEven + removedOdd === removedMaxOdd + evenIndex) {
        results++;
      }
    }
  }
  return results;
}
