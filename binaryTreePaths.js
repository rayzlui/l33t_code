//From 257 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
function binaryTreePaths(root) {
  if (root === null) {
    return [];
  }
  let paths = [];
  function recursion(branch, path) {
    if (branch.left === null && branch.right === null) {
      path += `${branch.val}`;
      paths.push(path);
      return;
    }
    path += `${branch.val}->`;
    if (branch.left) {
      recursion(branch.left, path);
    }
    if (branch.right) {
      recursion(branch.right, path);
    }
  }
  recursion(root, '');
  return paths;
}
