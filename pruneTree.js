//From 814 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function pruneTree(root) {
  function prunes(branch) {
    if (branch.left === null && branch.right === null) {
      if (branch.val === 1) {
        return 1;
      } else {
        return 0;
      }
    }
    let left = null;
    let right = null;
    if (branch.left) {
      left = prunes(branch.left);
      if (left === 0) {
        branch.left = null;
      }
    }
    if (branch.right) {
      right = prunes(branch.right);
      if (right === 0) {
        branch.right = null;
      }
    }
    if (left === 1 || right === 1 || branch.val === 1) {
      return 1;
    } else {
      return 0;
    }
  }
  prunes(root);
  return root;
}
