//From 145 in LeetCode

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
function postorderTraversal(root) {
  let order = [];
  function recursion(branch) {
    if (branch === null) {
      return;
    }
    recursion(branch.left);
    recursion(branch.right);
    order.push(branch.val);
  }
  recursion(root);
  return order;
}
