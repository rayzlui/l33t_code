//From 671 in LeetCode

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
function findSecondMinimumValue(root) {
  let holder = {};
  function recursion(branch) {
    if (branch === null) {
      return;
    }
    holder[branch.val] = true;

    if (branch.left) {
      recursion(branch.left);
    }
    if (branch.right) {
      recursion(branch.right);
    }
  }
  recursion(root);
  let keys = Object.keys(holder);
  if (keys.length < 2) {
    return -1;
  } else {
    return keys[1];
  }
}
