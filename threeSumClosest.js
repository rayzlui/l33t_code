//From 16 in LeetCode

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function threeSumClosest(nums, target) {
  let holder = {};
  let start = nums.slice(0, nums.length - 2);
  let diff = start.forEach((x, index) => {
    let slice1 = nums.slice(index + 1, nums.length - 1);
    slice1.forEach((y, index2) => {
      if (index + 2 <= nums.length - 1) {
        let slice2 = nums.slice(index + 1 + index2 + 1);
        slice2.forEach(z => {
          let totalDiff = Math.abs(x + y + z - target);

          holder[totalDiff] = x + y + z;
        });
      }
    });
  });
  let keys = Object.keys(holder);
  return holder[keys[0]];
}

//faster

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function threeSumClosestII(nums, target) {
  let holder = {};
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let x = nums[i];
        let y = nums[j];
        let z = nums[k];
        let totalDiff = Math.abs(x + y + z - target);
        if (totalDiff === 0) {
          return x + y + z;
        }
        holder[totalDiff] = x + y + z;
      }
    }
  }

  let keys = Object.keys(holder);
  return holder[keys[0]];
}
