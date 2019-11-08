//From 700 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
function searchBST(root, val) {
  let result = null;
  function recursion(tree) {
    if (tree === null) {
      return null;
    }
    if (tree.val === val) {
      result = tree;
    }

    recursion(tree.left);
    recursion(tree.right);
  }
  recursion(root);
  return result;
}
