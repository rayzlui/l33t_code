//From 978 in LeetCode

/**
 * @param {number[]} A
 * @return {number}
 */
function maxTurbulenceSize(A) {
  if (A.every(x => x === A[0])) {
    return 1;
  }
  let max = 0;
  let currentVal = 0;
  let wasDecrease = null;
  for (let i = 1; i < A.length; i++) {
    let current = A[i];
    let previous = A[i - 1];
    if (current > previous) {
      if (wasDecrease === null) {
        currentVal += 2;
        wasDecrease = false;
      } else {
        if (wasDecrease) {
          currentVal++;
          wasDecrease = !wasDecrease;
        } else {
          max = Math.max(max, currentVal);
          currentVal = 0;
          i -= 1;
          wasDecrease = null;
        }
      }
    }
    if (current < previous) {
      if (wasDecrease === null) {
        currentVal += 2;
        wasDecrease = true;
      } else {
        if (!wasDecrease) {
          currentVal++;
          wasDecrease = !wasDecrease;
        } else {
          max = Math.max(max, currentVal);
          currentVal = 0;
          i -= 1;
          wasDecrease = null;
        }
      }
    }
    if (current === previous) {
      max = Math.max(max, currentVal);
      currentVal = 0;
      wasDecrease = null;
    }
  }
  max = Math.max(max, currentVal);
  return max;
}
