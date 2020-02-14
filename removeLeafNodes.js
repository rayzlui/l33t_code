//From 1325 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */
function removeLeafNodes(root, target) {
  function recursion(branch) {
    if (branch.left === null && branch.right === null) {
      if (branch.val === target) {
        return true;
      }
      return false;
    }
    let left = true;
    let right = true;
    if (branch.left) {
      left = recursion(branch.left);
      if (left) {
        branch.left = null;
      }
    }
    if (branch.right) {
      right = recursion(branch.right);
      if (right) {
        branch.right = null;
      }
    }
    if (left && right) {
      if (branch.val === target) {
        return true;
      }
    }
    return false;
  }
  return recursion(root) ? null : root;
}
