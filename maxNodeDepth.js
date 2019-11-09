//From 104 in LeetCode

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
function maxDepth(root) {
  if (root === null) {
    return 0;
  }
  let max = 0;
  function recursion(branch, count, max) {
    count = count + 1;
    if (branch.left === null && branch.right === null) {
      max = Math.max(max, count);
      return;
    }
    if (branch.left) {
      recursion(branch.left, count);
    }
    if (branch.right) {
      recursion(branch.right, count);
    }
  }
  recursion(root, 0);
  return max;
}
