//From 1296 in LeetCode

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function isPossibleDivide(nums, k) {
  if (nums.length % k === 0) {
    nums = nums.sort((x, y) => x - y);
    while (nums.length > 0) {
      let start = nums.shift();
      for (let i = 1; i < k; i++) {
        let index = nums.indexOf(start + i);
        if (index === -1) {
          return false;
        }
        nums.splice(index, 1);
      }
    }
    return true;
  }
  return false;
}

//faster

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function isPossibleDivideII(nums, k) {
  if (nums.length % k === 0) {
    let count = nums.reduce((acc, curr) => {
      if (acc[curr]) {
        acc[curr]++;
      } else {
        acc[curr] = 1;
      }
      return acc;
    }, {});
    let keys = Object.keys(count);
    let i = 0;
    while (keys.length > i) {
      let start = keys[i];
      if (count[start]) {
        count[start]--;

        for (let i = 1; i < k; i++) {
          let next = start / 1 + i;
          if (count[next]) {
            count[next]--;
          } else {
            return false;
          }
        }
      } else {
        i++;
      }
    }

    return true;
  }
  return false;
}
