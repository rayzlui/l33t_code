//From 1379 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

function getTargetCopy(original, cloned, target) {
  function recursion(branch) {
    if (branch === null) {
      return;
    }
    if (branch.val === target.val) {
      let leftMatch = false;
      let rightMatch = false;
      if (branch.left == target.left || branch.left.val === target.left.val) {
        leftMatch = true;
      }
      if (
        branch.right === target.right ||
        branch.right.val === target.right.val
      ) {
        rightMatch = true;
      }
      if (rightMatch && leftMatch) {
        return branch;
      }
    }
    let left = recursion(branch.left);
    let right = recursion(branch.right);
    if (left) {
      return left;
    }
    if (right) {
      return right;
    }
    return null;
  }
  return recursion(cloned);
}
