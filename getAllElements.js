//From 1305 in LeetCode

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
 * @return {number[]}
 */
function getAllElements(root1, root2) {
  let result = [];
  function recursion(branch) {
    if (branch === null) {
      return;
    }
    result.push(branch.val);
    if (branch.left) {
      recursion(branch.left);
    }
    if (branch.right) {
      recursion(branch.right);
    }
  }
  recursion(root1);
  recursion(root2);
  return result.sort((x, y) => x - y);
}
