//From 1302 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function deepestLeavesSum(root) {
  let holder = {};
  function recursion(branch, depth) {
    if (branch.left === null && branch.right === null) {
      if (holder[depth]) {
        holder[depth].push(branch.val);
      } else {
        holder[depth] = [branch.val];
      }
      return;
    }
    if (branch.left) {
      recursion(branch.left, depth + 1);
    }
    if (branch.right) {
      recursion(branch.right, depth + 1);
    }
  }
  recursion(root, 0);
  let keys = Object.keys(holder);
  let last = keys[keys.length - 1];
  return holder[last].reduce((acc, curr) => acc + curr);
}
