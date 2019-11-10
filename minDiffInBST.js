//From 783 in LeetCode

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

function minDiffInBST(root) {
  let vals = [];
  function recursion(branch) {
    if (branch.left === null && branch.right === null) {
      vals.push(branch.val);
      return;
    }
    if (branch.left) {
      recursion(branch.left);
    }
    vals.push(branch.val);
    if (branch.right) {
      recursion(branch.right);
    }
  }
  recursion(root);
  let min = Infinity;
  for (let i = 0; i < vals.length - 1; i++) {
    min = Math.min(min, vals[i + 1] - vals[i]);
  }
  return min;
}
