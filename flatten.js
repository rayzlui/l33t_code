//From 114 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
function flatten(root) {
  let values = [];
  function recursion(branch) {
    if (branch === null) {
      return;
    }
    values.push(branch);
    recursion(branch.left);
    recursion(branch.right);
  }
  recursion(root);
  function construct(root, source) {
    if (source.length === 0) {
      return;
    }
    let current = source.shift();
    root.right = current;
    root.left = null;
    construct(root.right, source);
  }
  let newRoot = values.shift();
  construct(newRoot, values);
  return newRoot;
}
