//From 965 in LeetCode

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
function isUnivalTree(root) {
  let val;
  let uni = true;
  function recursion(tree) {
    if (tree === null) {
      return;
    }
    if (val === undefined) {
      val = tree.val;
    } else {
      if (val !== tree.val) {
        uni = false;
        return;
      }
    }
    recursion(tree.left);
    recursion(tree.right);
  }
  recursion(root);
  return uni;
}
