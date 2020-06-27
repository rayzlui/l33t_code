//From 1448 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function goodNodes(root) {
  let count = 0;
  function recursion(max, branch) {
    if (branch === null) {
      return;
    }
    if (branch.val >= max) {
      count++;
    }
    let newMax = Math.max(max, branch.val);
    if (branch.left) {
      recursion(newMax, branch.left);
    }
    if (branch.right) {
      recursion(newMax, branch.right);
    }
  }
  recursion(root.val, root);
  return count;
}
