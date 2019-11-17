//From 701 in LeetCode

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
function insertIntoBST(root, val) {
  let leaf = new TreeNode(val);
  function recursion(branch) {
    if (branch.left === null && branch.right === null) {
      if (branch.val < val) {
        branch.right = leaf;
      } else {
        branch.left = leaf;
      }
      return;
    }
    let value = branch.val;
    if (value > val) {
      if (branch.left === null) {
        branch.left = leaf;
        return;
      }
      recursion(branch.left);
    } else {
      if (branch.right === null) {
        branch.right = leaf;
        return;
      }
      recursion(branch.right);
    }
  }
  recursion(root);
  return root;
}
