//From July Challenge

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
 * @return {TreeNode}
 */
function pruneTreeII(root) {
  function recursion(root) {
    if (root.left === null && root.right === null) {
      if (root.val === 1) {
        return true;
      } else {
        root = null;
        return false;
      }
    }
    let left;
    let right;
    if (root.left) {
      left = recursion(root.left);
      if (!left) {
        root.left = null;
      }
    }
    if (root.right) {
      right = recursion(root.right);
      if (!right) {
        root.right = null;
      }
    }
    if (left || right || root.val !== 0) {
      return true;
    } else {
      root = null;
      return false;
    }
  }
  let solve = recursion(root);
  return solve ? root : null;
}
