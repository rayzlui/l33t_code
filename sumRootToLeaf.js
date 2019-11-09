//From 1022 in LeetCode

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
function sumRootToLeaf(root) {
  let sum = 0;
  function recursion(branch, curr) {
    curr += branch.val;
    if (branch.left === null && branch.right === null) {
      let num = parseInt(curr, 2);
      sum += num;
      return;
    }
    if (branch.left) {
      recursion(branch.left, curr);
    }
    if (branch.right) {
      recursion(branch.right, curr);
    }
  }
  recursion(root, '');
  return sum;
}
