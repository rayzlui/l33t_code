//From 1080 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} limit
 * @return {TreeNode}
 */
function sufficientSubset(root, limit) {
  function recursion(branch, sum) {
    if (branch.left === null && branch.right === null) {
      if (sum + branch.val < limit) {
        return false;
      }
      return true;
    }
    let left = false;
    if (branch.left) {
      left = recursion(branch.left, sum + branch.val);
    }
    let right = false;
    if (branch.right) {
      right = recursion(branch.right, sum + branch.val);
    }
    if (!left) {
      branch.left = null;
    }
    if (!right) {
      branch.right = null;
    }
    return left || right;
  }
  let gone = recursion(root, 0);
  if (!gone) {
    root = null;
  }
  return root;
}
