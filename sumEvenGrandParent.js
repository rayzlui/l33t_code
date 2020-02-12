//From 1315 in LeetCode

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
function sumEvenGrandparent(root) {
  let sum = 0;
  function recursion(branch, prev) {
    if (branch.left === null && branch.right === null) {
      return branch.val;
    }
    let left = 0;
    let right = 0;
    if (branch.left) {
      left = recursion(branch.left, branch.val);
    }
    if (branch.right) {
      right = recursion(branch.right, branch.val);
    }
    if (prev % 2 === 0) {
      sum += right + left;
    }
    return branch.val;
  }
  recursion(root, 1);
  return sum;
}
