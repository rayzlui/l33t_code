//From 1470 in LeetCode

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
function shuffle(nums, n) {
  let holder = {};
  let cycle = 0;
  let i = 0;
  while (i < nums.length) {
    if (holder[cycle]) {
      holder[cycle].push(nums[i]);
    } else {
      holder[cycle] = [nums[i]];
    }
    i++;
    cycle = (cycle + 1) % n;
  }
  let values = Object.values(holder);
  return values.reduce((acc, curr) => {
    acc = acc.concat(curr);
    return acc;
  }, []);
}

//faster

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
function shuffleII(nums, n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    for (let j = i; j < nums.length; j += n) {
      result.push(nums[j]);
    }
  }
  return result;
}
