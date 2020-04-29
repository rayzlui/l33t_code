//From 98 in LeetCode

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
function isValidBST(root) {
  if (root === null) {
    return true;
  }
  let previous = null;
  function recursion(node) {
    if (node.left === null && node.right === null) {
      if (previous) {
        if (node.val <= previous) {
          return false;
        } else {
          return node.val;
        }
      }
    }
    if (node.left) {
      let left = recursion(node.left);
      if (left === false) {
        return false;
      }
      if (left >= node.val) {
        return false;
      }
    }
    if (node.right) {
      if (previous === null) {
        previous = node.val;
      }
      if (node.right.val <= node.val) {
        return false;
      }
      let right = recursion(node.right);
      if (right === false) {
        return false;
      }
      return right;
    }
    return node.val;
  }
  let val = recursion(root);
  return val === false ? false : true;
}
