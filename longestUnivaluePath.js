//From 687 in LeetCode

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
function longestUnivaluePath(root) {
  if (root === null) {
    return 0;
  }
  let max = 0;
  function recursion(previous, branch) {
    if (branch === null) {
      return 0;
    }
    let left = recursion(branch.val, branch.right);
    let right = recursion(branch.val, branch.left);
    max = Math.max(max, left + right);

    return branch.val === previous ? Math.max(left, right) + 1 : 0;
  }
  recursion(root.val, root);
  return max;
}
