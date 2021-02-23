//From 1764 in LeetCode

/**
 * @param {number[][]} groups
 * @param {number[]} nums
 * @return {boolean}
 */
function canChoose(groups, nums) {
  for (let i = 0; i < groups.length; i++) {
    let current = groups[i];
    let first = current[0];
    let searching = true;
    while (searching) {
      searching = false;
      let index = nums.findIndex(x => x === first);

      if (index === -1) {
        return false;
      }
      //console.log(nums,current)
      let subArr = nums.slice(index, index + current.length);
      for (let j = 0; j < current.length; j++) {
        if (subArr[j] !== current[j]) {
          searching = true;
        }
      }

      if (searching) {
        nums = nums.splice(index + 1);
      } else {
        nums = nums.splice(index + current.length);
      }
    }
  }
  return true;
}
