//From 108 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function sortedArrayToBST(starting) {
  if (starting.length === 0) {
    return null;
  }
  let tree = new TreeNode(null);
  function recursion(branch, nums) {
    let right = nums.splice(Math.floor(nums.length / 2) + 1);
    branch.val = nums.pop();
    if (nums.length === 0 && right.length === 0) {
      return;
    }
    if (right.length > 0) {
      let newRight = new TreeNode(null);
      branch.right = newRight;
      recursion(newRight, right);
    }
    if (nums.length > 0) {
      let newLeft = new TreeNode(null);
      branch.left = newLeft;
      recursion(newLeft, nums);
    }
  }
  recursion(tree, starting);
  return tree;
}
