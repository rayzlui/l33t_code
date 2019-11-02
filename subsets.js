//From 78 in LeetCode

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
  let check = {};
  let result = [];
  function recursion(array, leftovers) {
    if (check[array] === undefined) {
      result.push(array);
    }
    for (let i = 0; i < leftovers.length; i++) {
      let copy = array.slice();
      let pusher = leftovers[i];
      copy.push(pusher);
      let downer = leftovers.slice(i + 1);
      recursion(copy, downer);
    }
  }
  recursion([], nums);
  return result;
}
