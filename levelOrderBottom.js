//From 107 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrderBottom(root) {
  if (root === null) {
    return [];
  }
  let holder = {};
  function recursion(branch, depth) {
    if (holder[depth]) {
      holder[depth].push(branch.val);
    } else {
      holder[depth] = [branch.val];
    }
    depth = depth + 1;
    if (branch.left === null && branch.right === null) {
      return;
    }
    if (branch.left) {
      recursion(branch.left, depth);
    }
    if (branch.right) {
      recursion(branch.right, depth);
    }
  }
  recursion(root, 0);
  let result = [];
  for (let a in holder) {
    result.unshift(holder[a]);
  }
  return result;
}
