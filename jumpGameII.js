//From 45 in LeetCode

/**
 * @param {number[]} nums
 * @return {number}
 */
function jump(nums) {
  let start = 0;
  let jumps = 0;
  while (start < nums.length - 1) {
    jumps++;
    let moves = nums[start];
    if (moves + start >= nums.length - 1) {
      break;
    }
    let jumpable = nums.slice(start + 1, moves + start + 1);
    let index = jumpable.reduce((acc, curr, i) => {
      if (curr + i >= jumpable[acc] + acc) {
        acc = i;
      }
      return acc;
    }, 0);
    start += index + 1;
  }
  return jumps;
}

//less memory

/**
 * @param {number[]} nums
 * @return {number}
 */
function jumpII(nums) {
  let start = 0;
  let jumps = 0;
  while (start < nums.length - 1) {
    jumps++;
    let moves = nums[start];
    if (moves + start >= nums.length - 1) {
      break;
    }
    let index = 0;
    for (let i = 0; i < moves; i++) {
      let curr = nums[i + start + 1];
      if (curr + i >= nums[index + start + 1] + index) {
        index = i;
      }
    }
    start += index + 1;
  }
  return jumps;
}
