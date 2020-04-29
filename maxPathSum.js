//From 124 in LeetCode

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
function maxPathSum(root) {
  let max = -Infinity;
  function recursion(branch) {
    if (branch === null) {
      return 0;
    }
    let left = recursion(branch.left);

    let right = recursion(branch.right);

    let sum = left + right + branch.val;
    max = Math.max(max, sum, sum - left, sum - right);
    return Math.max(0, sum - left, sum - right);
  }
  recursion(root, 0);
  return max;
}
