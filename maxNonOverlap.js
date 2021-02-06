//From 1546 in LeetCode

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function maxNonOverlapping(nums, target) {
  let presum = { 0: -1 };
  let indices = [];
  let sum = 0;
  nums.forEach((x, index) => {
    sum += x;
    if (presum[sum - target] !== undefined) {
      indices.push([presum[sum - target] + 1, index]);
    }
    presum[sum] = index;
  });
  let result = 0;
  let last = -1;
  for (let i = 0; i < indices.length; i++) {
    let current = indices[i];
    let start = current[0];
    let end = current[1];
    if (start > last) {
      result++;
      last = end;
    }
  }
  return result;
}

//faster

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function maxNonOverlappingII(nums, target) {
  let presum = {};
  let sum = 0;
  let result = 0;
  nums.forEach(x => {
    sum += x;
    if (presum[sum - target] || sum === target) {
      result++;
      sum = 0;
      presum = {};
    } else {
      presum[sum] = true;
    }
  });
  return result;
}

//faster

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function maxNonOverlappingIII(nums, target) {
  let presum = new Set();
  let sum = 0;
  let result = 0;
  nums.forEach(x => {
    sum += x;
    if (presum.has(sum - target) || sum === target) {
      result++;
      sum = 0;
      presum = new Set();
    } else {
      presum.add(sum);
    }
  });
  return result;
}
