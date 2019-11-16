//From 112 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
function hasPathSum(root, match) {
  if (root === null) {
    return false;
  }
  let result = false;
  function recursion(branch, sum) {
    sum = sum + branch.val;
    if (branch.left === null && branch.right === null) {
      if (sum === match) {
        result = true;
      }
      return;
    }
    if (branch.left) {
      recursion(branch.left, sum);
    }
    if (branch.right) {
      recursion(branch.right, sum);
    }
  }
  recursion(root, 0);
  return result;
}
