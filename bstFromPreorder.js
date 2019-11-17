//From 1008 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
function bstFromPreorder(preorder) {
  let root = preorder.shift();
  let newTree = new TreeNode(root);

  function recursion(tree, nums, previous) {
    if (nums.length === 0) {
      return;
    }
    let rightIndex = nums.findIndex(x => x > previous);
    let rightSide = rightIndex >= 0 ? nums.splice(rightIndex) : [];

    if (nums.length > 0) {
      let firstLeft = nums.shift();
      let newLeft = new TreeNode(firstLeft);
      tree.left = newLeft;
      recursion(newLeft, nums, firstLeft);
    } else {
      tree.left = null;
    }

    if (rightSide.length > 0) {
      let firstRight = rightSide.shift();
      let newRight = new TreeNode(firstRight);
      tree.right = newRight;
      recursion(newRight, rightSide, firstRight);
    } else {
      tree.right = null;
    }
  }

  recursion(newTree, preorder, root);
  return newTree;
}
