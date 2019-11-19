//From 669 in LeetCode

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
 * @return {TreeNode}
 */
function trimBST(root, L, R) {
  let head = root.val;
  while (head < L || head > R) {
    if (head < L) {
      root = root.right;
    }
    if (head > R) {
      root = root.left;
    }
    head = root.val;
    if (root === null) {
      return null;
    }
  }
  function trim(branch) {
    if (branch === null) {
      return;
    }
    if (branch.left) {
      while (branch.left.val < L) {
        branch.left = branch.left.right;
        if (branch.left === null) {
          break;
        }
      }
    }
    trim(branch.left);
    if (branch.right) {
      while (branch.right.val > R) {
        branch.right = branch.right.left;
        if (branch.right === null) {
          break;
        }
      }
    }
    trim(branch.right);
  }
  trim(root);
  return root;
}
