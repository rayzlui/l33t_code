//From 1362 in LeetCode

/**
 * @param {number} num
 * @return {number[]}
 */
function closestDivisors(num) {
  let add1 = num + 1;
  let add2 = num + 2;
  let sqrt1 = Math.floor(Math.sqrt(add1));
  let sqrt2 = Math.floor(Math.sqrt(add2));
  while (add1 % sqrt1 !== 0) {
    sqrt1--;
  }
  while (add2 % sqrt2 !== 0) {
    sqrt2--;
  }
  let low1 = [sqrt1, add1 / sqrt1];
  let low2 = [sqrt2, add2 / sqrt2];
  return low1[1] - low1[0] > low2[1] - low2[0] ? low2 : low1;
}
