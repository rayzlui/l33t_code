//From 872 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
function leafSimilar(root1, root2) {
  let leaf1 = [];
  let leaf2 = [];
  function recursion(branch, leaf) {
    if ((branch.left === null) & (branch.right === null)) {
      leaf.push(branch.val);
      return;
    }
    if (branch.left) {
      recursion(branch.left, leaf);
    }
    if (branch.right) {
      recursion(branch.right, leaf);
    }
  }
  recursion(root1, leaf1);
  recursion(root2, leaf2);
  return leaf1.every((x, index) => x === leaf2[index]);
}
