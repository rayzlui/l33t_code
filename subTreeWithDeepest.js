//From 865 in LeetCode

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
function subtreeWithAllDeepest(root) {
  let result;
  let lowestDepth = 0;
  function getDeepest(branch, depth) {
    if (branch.left === null && branch.right === null) {
      lowestDepth = Math.max(lowestDepth, depth);
      return;
    }
    if (branch.left) {
      getDeepest(branch.left, depth + 1);
    }
    if (branch.right) {
      getDeepest(branch.right, depth + 1);
    }
  }
  getDeepest(root, 0);
  function getSubtree(branch, depth) {
    if (depth === lowestDepth) {
      result = branch;
      return true;
    }
    if (branch.left === null && branch.right === null) {
      return false;
    }
    let right;
    let left;
    if (branch.right) {
      right = getSubtree(branch.right, depth + 1);
    }
    if (branch.left) {
      left = getSubtree(branch.left, depth + 1);
    }
    if (right && left) {
      result = branch;
    }
    return right || left;
  }
  getSubtree(root, 0);

  return result;
}
