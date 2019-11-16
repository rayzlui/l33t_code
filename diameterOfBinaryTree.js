//From 543 in LeetCode

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
function diameterOfBinaryTree(root) {
  if (root === null) {
    return 0;
  }
  let max = 0;
  function recursion(branch, depth) {
    if (branch.left === null && branch.right === null) {
      return depth;
    }
    let left = 0;
    let right = 0;
    if (branch.right) {
      right = recursion(branch.right, depth + 1);
    }
    if (branch.left) {
      left = recursion(branch.left, depth + 1);
    }
    max = Math.max(max, left + right - 2 * depth);
    return right > left ? right : left;
  }
  recursion(root, 0);
  return max;
}
