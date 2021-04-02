//From 1799 in LeetCode

/**
 * @param {number[]} nums
 * @return {number}
 */
function gcd(a, b) {
  //a is lower
  if (b % a === 0) {
    return a;
  }
  while (a !== 0) {
    let remainder = b % a;
    b = a;
    a = remainder;
  }
  return b;
}
function maxScore(nums) {
  let memo = {};
  let max = 0;
  function recursion(front, source, gcds) {
    if (source.length === 0) {
      let sum = gcds
        .sort((x, y) => x - y)
        .reduce((acc, curr, index) => {
          acc += curr * (index + 1);
          return acc;
        }, 0);
      max = Math.max(max, sum);
      return;
    }
    for (let i = 0; i < source.length; i++) {
      let current = source[i];
      let [lesser, greater] =
        front > current ? [current, front] : [front, current];
      let greatest = gcd(lesser, greater);
      let copy = source.slice();
      copy.splice(i, 1);
      let nextFront = copy.shift();
      recursion(nextFront, copy, [...gcds, greatest]);
    }
  }
  let first = nums.shift();
  recursion(first, nums, []);
  return max;
}
