//From 1979 in LeetCode

/**
 * @param {number[]} nums
 * @return {number}
 */

function gcd(a, b) {
  //assume a > b
  while (b !== 0) {
    let remainder = a % b;
    a = b;
    b = remainder;
  }
  return a;
}
function findGCD(nums) {
  let min = Infinity;
  let max = 0;
  nums.forEach(x => {
    min = Math.min(min, x);
    max = Math.max(max, x);
  });
  return gcd(max, min);
}
