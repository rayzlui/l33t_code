//From 979 in LeetCode

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
function distributeCoins(root) {
  let result = 0;
  function recursion(branch) {
    if (branch === null) {
      return 0;
    }
    let left = recursion(branch.left);
    let right = recursion(branch.right);
    result += Math.abs(left) + Math.abs(right);
    return branch.val + left + right - 1;
  }
  recursion(root);
  return result;
}
