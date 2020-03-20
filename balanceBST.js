//From 1382 in LeetCode

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
function balanceBST(root) {
  let values = [];
  function recursion(branch) {
    if (branch.left === null && branch.right === null) {
      values.push(branch.val);
      return;
    }
    if (branch.left) {
      recursion(branch.left);
    }
    values.push(branch.val);
    if (branch.right) {
      recursion(branch.right);
    }
  }
  recursion(root);
  function construct(vals) {
    let mid = Math.floor(vals.length / 2);
    let right = vals.splice(mid);
    let middle = right.shift();
    let left = vals;
    let node = new TreeNode(middle);
    if (left.length > 0) {
      node.left = construct(left);
    }
    if (right.length > 0) {
      node.right = construct(right);
    }
    return node;
  }
  return construct(values);
}
