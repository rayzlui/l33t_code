//From 938 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
function rangeSumBST(tree, L, R) {
  let sum = 0;
  function recursion(root) {
    if (root === null) {
      return;
    }
    let val = root.val;
    if (val >= L && val <= R) {
      sum += val;
    }
    recursion(root.left);
    recursion(root.right);
  }
  recursion(tree);
  return sum;
}
