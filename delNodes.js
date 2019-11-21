//From 1110 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
function delNodes(root, to_delete) {
  let result = [];
  let objectify = to_delete.reduce((acc, curr) => {
    acc[curr] = true;
    return acc;
  }, {});
  function recursion(branch) {
    if (branch === null) {
      return false;
    }
    let cut = false;
    if (objectify[branch.val]) {
      cut = true;
      if (branch.right) {
        result.push(branch.right);
      }
      if (branch.left) {
        result.push(branch.left);
      }
    }
    let right = recursion(branch.right);
    let left = recursion(branch.left);
    if (right) {
      branch.right = null;
    }
    if (left) {
      branch.left = null;
    }
    return cut;
  }
  recursion(root);
  result.push(root);
  return result.filter(x => !objectify[x.val]);
}
