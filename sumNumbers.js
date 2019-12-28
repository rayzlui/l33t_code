//From 129 in LeetCode

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
function sumNumbers(root) {
  if (root === null) {
    return 0;
  }
  let sum = 0;
  function recursion(branch, val) {
    let value = val + branch.val;
    if (branch.left === null && branch.right === null) {
      sum += value / 1;
      return;
    }
    if (branch.left) {
      recursion(branch.left, value);
    }
    if (branch.right) {
      recursion(branch.right, value);
    }
  }
  recursion(root, '');
  return sum;
}
