//From 1457 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function pseudoPalindromicPaths(root) {
  let num = 0;
  function recursion(count, branch) {
    count[branch.val] ? count[branch.val]++ : (count[branch.val] = 1);
    if (branch.left === null && branch.right === null) {
      let values = Object.values(count);
      let odd = values.filter(x => x % 2 === 1);
      if (odd.length <= 1) {
        num++;
      }
      return;
    }
    if (branch.left) {
      recursion(Object.assign({}, count), branch.left);
    }
    if (branch.right) {
      recursion(Object.assign({}, count), branch.right);
    }
  }
  recursion({}, root);
  return num;
}
