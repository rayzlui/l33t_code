//From 1658 in LeetCode

/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
function minOperations(nums, x) {
  let leftVal = 0;
  let rightVal = 0;
  let leftStart = 0;
  let rightStart = nums.length - 1;
  let addLeft = true;
  let leastAmount = Infinity;
  let breakPoint = 0;
  let leftStore = {};
  let rightStore = {};
  while (
    (leftVal < x || rightVal < x) &&
    (leftStart < nums.length && rightStart > 0)
  ) {
    let remainder = x;
    if (addLeft) {
      if (nums[leftStart] + leftVal <= x) {
        leftVal += nums[leftStart];

        leftStart++;
        leftStore[leftVal] = leftStart;
        remainder -= leftVal;
        if (rightStore[remainder] !== undefined) {
          leastAmount = Math.min(
            leastAmount,
            leftStart + nums.length - rightStore[remainder],
          );
        }
      } else {
        breakPoint++;
      }
    } else {
      if (rightVal + nums[rightStart] <= x) {
        rightVal += nums[rightStart];
        rightStore[rightVal] = rightStart;
        rightStart--;
        remainder -= rightVal;
        if (leftStore[remainder] !== undefined) {
          leastAmount = Math.min(
            leastAmount,
            nums.length - rightStart + leftStore[remainder] - 1,
          );
        }
      } else {
        breakPoint++;
      }
    }
    if (leftVal === x) {
      leastAmount = Math.min(leastAmount, leftStart);
    }
    if (rightVal === x) {
      leastAmount = Math.min(leastAmount, nums.length - rightStart - 1);
    }

    if (breakPoint > 1) {
      return leastAmount < Infinity ? leastAmount : -1;
    }
    addLeft = !addLeft;
  }

  return leastAmount < Infinity ? leastAmount : -1;
}
