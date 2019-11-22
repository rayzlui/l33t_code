//From 513 in LeetCode

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
function findBottomLeftValue(root) {
  let result;
  let maxDepth = -Infinity;
  function recursion(branch, depth) {
    if (branch === null) {
      return;
    }
    if (maxDepth < depth) {
      if (branch.left) {
        result = branch.left.val;
        maxDepth = depth;
      } else {
        if (branch.right) {
          result = branch.right.val;
          maxDepth = depth;
        }
      }
    }
    recursion(branch.left, depth + 1);
    recursion(branch.right, depth + 1);
  }
  recursion(root, 0);
  if (result === undefined) {
    return root.val;
  }
  return result;
}
