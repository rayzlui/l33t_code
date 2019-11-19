//From 1038 in LeetCode

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
function bstToGst(root) {
  let values = [];
  function getValues(branch) {
    if (branch.left === null && branch.right === null) {
      values.push(branch.val);
      return;
    }
    if (branch.left) {
      getValues(branch.left);
    }
    values.push(branch.val);
    if (branch.right) {
      getValues(branch.right);
    }
  }
  getValues(root);
  let sum = values.reduce((acc, curr) => acc + curr, 0);
  let counter = 0;
  function setValues(branch) {
    if (branch.left === null && branch.right === null) {
      branch.val = sum;
      sum = sum - values[counter];
      counter++;
      return;
    }
    if (branch.left) {
      setValues(branch.left, counter);
    }
    branch.val = sum;
    sum = sum - values[counter];
    counter++;
    if (branch.right) {
      setValues(branch.right, counter);
    }
  }
  setValues(root);
  return root;
}
