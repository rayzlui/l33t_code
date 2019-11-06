//From 226 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

function invert(tree) {
  let rBranch = null;
  let lBranch = null;
  if (tree.left) {
    let isLeft = tree.left;
    lBranch = invert(isLeft);
  }
  if (tree.right) {
    let isRight = tree.right;
    rBranch = invert(isRight);
  }
  tree.left = rBranch;
  tree.right = lBranch;

  return tree;
}
function invertTree(root) {
  if (root === null) {
    return root;
  }

  let tree = invert(root);
  return tree;
};
