//From 569 in LeetCode

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function isPossible(nums) {
  let subarrays = [];
  let last = [];
  for (let i = 0; i < nums.length; i++) {
    let value = nums[i];
    let end = last.reverse().findIndex(x => x === value - 1);
    if (end === -1) {
      last.reverse().push(value);
      subarrays.push([value]);
    } else {
      subarrays.reverse();
      last[end] = value;
      last.reverse();
      subarrays[end].push(value);
      subarrays.reverse();
    }
  }
  let smallerSubs = subarrays.reduce((acc, curr, index) => {
    if (curr.length < 3) {
      acc.push(index);
    }
    return acc;
  }, []);
  if (smallerSubs.length > 0) {
    for (let i = 0; i < smallerSubs.length; i++) {
      let idx = smallerSubs[i];
      let sub = subarrays[idx];
      let index = last.findIndex(x => x === sub[0] - 1);
      if (index === -1) {
        return false;
      } else {
        subarrays[index].concat(sub);
        last[index] = sub[sub.length - 1];
        subarrays.splice(idx, 1);
        last.splice(idx, 1);
        smallerSubs.map(x => x - 1);
      }
    }
  }
  smallerSubs = subarrays.reduce((acc, curr, index) => {
    if (curr.length < 3) {
      acc.push(index);
    }
    return acc;
  }, []);
  return smallerSubs.length === 0;
}
