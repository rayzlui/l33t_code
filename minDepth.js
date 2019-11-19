//From 111 in LeetCode

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
function minDepth(root) {
  if (root === null) {
    return 0;
  }
  function recursion(branch, depth) {
    depth = depth + 1;
    if ((branch.left === null) & (branch.right === null)) {
      return depth;
    }
    let leftDepth = Infinity;
    let rightDepth = Infinity;
    if (branch.left) {
      leftDepth = recursion(branch.left, depth);
    }
    if (branch.right) {
      rightDepth = recursion(branch.right, depth);
    }

    return Math.min(leftDepth, rightDepth);
  }
  return recursion(root, 0);
}
