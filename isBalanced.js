//From 110 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isBalanced(root) {
  if (root === null) {
    return true;
  }

  let isBalanced = true;
  function recursion(branch, depth) {
    if (branch.left === null && branch.right === null) {
      return depth;
    }

    let rightDepth = depth;
    let leftDepth = depth;
    if (branch.right) {
      rightDepth = recursion(branch.right, depth + 1);
    }
    if (branch.left) {
      leftDepth = recursion(branch.left, depth + 1);
    }
    if (Math.abs(leftDepth - rightDepth) > 1) {
      isBalanced = false;
      return;
    }
    return rightDepth > leftDepth ? rightDepth : leftDepth;
  }
  recursion(root, 0);
  return isBalanced;
}
