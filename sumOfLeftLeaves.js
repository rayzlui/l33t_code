//From 404 in LeetCode

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
function sumOfLeftLeaves(root) {
  if (root === null) {
    return 0;
  }
  let hold = [];
  function recursion(branch, type) {
    if (branch.left === null && branch.right === null) {
      if (type === 'left') {
        hold.push(branch.val);
      }
      return;
    }
    if (branch.left) {
      recursion(branch.left, 'left');
    }
    if (branch.right) {
      recursion(branch.right, 'right');
    }
  }
  recursion(root);
  return hold.reduce((acc, curr) => acc + curr, 0);
}
