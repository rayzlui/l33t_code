//From 563 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function findTilt(root) {
  if (root === null) {
    return 0;
  }
  let sum = 0;
  function recursion(branch) {
    if (branch.left === null && branch.right === null) {
      return branch.val;
    }
    let left = 0;
    let right = 0;
    if (branch.left) {
      left = recursion(branch.left);
    }
    if (branch.right) {
      right = recursion(branch.right);
    }
    sum += Math.abs(left - right);
    return left + right + branch.val;
  }
  recursion(root);
  return sum;
}
