//From 998 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */

function obtain(branch) {
  if (branch === null) {
    return false;
  }
  let current = [branch.val];
  let left = obtain(branch.left);
  let right = obtain(branch.right);
  if (left) {
    current = left.concat(current);
  }
  if (right) {
    current.push(...right);
  }
  return current;
}

function construct(branch, array) {
  if (array.length === 0) {
    return null;
  }
  let max = Math.max(...array);
  let index = array.indexOf(max);
  let right = array.splice(index + 1);
  let left = array;
  left.pop();
  branch.val = max;
  let newLeft = new TreeNode();
  let newRight = new TreeNode();
  branch.left = construct(newLeft, left);
  branch.right = construct(newRight, right);
  return branch;
}
function insertIntoMaxTree(root, val) {
  let A = obtain(root);
  A.push(val);
  let newRoot = new TreeNode();
  construct(newRoot, A);
  return newRoot;
};
