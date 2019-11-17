//From 654 in LeetCode

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
function getMaxIndex(arr) {
  let max = Math.max(...arr);
  return arr.indexOf(max);
}
function constructMaximumBinaryTree(nums) {
  let newTree = new TreeNode();
  function recursion(tree, values) {
    if (values.length === 1) {
      tree.val = values[0];
      return;
    }

    let max = getMaxIndex(values);
    tree.val = values.splice(max, 1)[0];
    let right = values.splice(max);

    let left = values;
    let newRight = new TreeNode();
    let newLeft = new TreeNode();
    if (right.length > 0) {
      tree.right = newRight;
      recursion(newRight, right);
    } else {
      newRight = null;
      tree.right = newRight;
    }
    if (left.length > 0) {
      tree.left = newLeft;
      recursion(newLeft, left);
    } else {
      newLeft = null;
      tree.left = newLeft;
    }
  }
  recursion(newTree, nums);
  return newTree;
}
