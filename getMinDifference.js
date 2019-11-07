//From 530 in LeetCode

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
function getMinimumDifference(root) {
  let min = Infinity;
  let values = {};
  function recursion(tree) {
    if (tree === null) {
      return;
    }
    let right = tree.right;
    let left = tree.left;
    values[tree.val] = 'hi';
    recursion(left);
    recursion(right);
  }
  recursion(root);
  let keys = Object.keys(values);
  keys.forEach((val, index) => {
    if (index !== keys.length - 1) {
      min = Math.min(min, Math.abs(val - keys[index + 1]));
    }
  });
  return min;
}
