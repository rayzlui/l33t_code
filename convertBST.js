//From 538 in LeetCode

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
function getVals(branch, func) {
  if (branch === null) {
    return;
  }
  branch.val = func(branch.val);
  getVals(branch.left, func);
  getVals(branch.right, func);
}
function convertBST(root) {
  let values = [];

  getVals(root, val => {
    values.push(val);
    return val;
  });
  getVals(root, val => {
    let greater = values.filter(x => x > val);
    return greater.reduce((acc, curr) => curr + acc, val);
  });
  return root;
}
