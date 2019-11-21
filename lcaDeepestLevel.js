//From 1123 in LeetCode

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
function lcaDeepestLeaves(root) {
  let deepest = 0;
  let ancestor;
  function recursion(branch, depth) {
    if (branch.left === null && branch.right === null) {
      if (depth >= deepest) {
        ancestor = branch;
        deepest = depth;
      }
      return depth;
    }

    let left = null;
    let right = null;

    if (branch.right) {
      right = recursion(branch.right, depth + 1);
    }
    if (branch.left) {
      left = recursion(branch.left, depth + 1);
    }
    if (left === right) {
      if (left >= deepest) {
        ancestor = branch;
      }
    }
    return left > right ? left : right;
  }
  recursion(root, 0);
  return ancestor;
}
