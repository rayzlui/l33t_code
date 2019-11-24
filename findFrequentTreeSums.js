//From 508 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function findFrequentTreeSum(root) {
  if (root === null) {
    return [];
  }
  let holder = {};
  function recursion(branch) {
    if (branch.left === null && branch.right === null) {
      if (holder[branch.val]) {
        holder[branch.val]++;
      } else {
        holder[branch.val] = 1;
      }
      return branch.val;
    }
    let left = 0;
    if (branch.left) {
      left = recursion(branch.left);
    }
    let right = 0;
    if (branch.right) {
      right = recursion(branch.right);
    }
    let sum = left + right + branch.val;
    if (holder[sum]) {
      holder[sum]++;
    } else {
      holder[sum] = 1;
    }
    return sum;
  }
  recursion(root);
  let keys = Object.keys(holder);
  keys = keys.sort((x, y) => holder[y] - holder[x]);
  keys = keys.filter(x => holder[x] === holder[keys[0]]);
  return keys;
}
