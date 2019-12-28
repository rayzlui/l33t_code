//From 113 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
function pathSum(root, sum) {
  if (root === null) {
    return [];
  }
  let results = [];
  function recursion(branch, value, array) {
    value = value + branch.val;
    array.push(branch.val);

    if (branch.left === null && branch.right === null) {
      if (sum === value) {
        results.push(array);
      }
      return;
    }

    if (branch.left) {
      recursion(branch.left, value, array.slice());
    }
    if (branch.right) {
      recursion(branch.right, value, array.slice());
    }
  }
  recursion(root, 0, []);
  return results;
}
