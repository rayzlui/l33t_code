//From 236 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {
  let result = null;
  function recursion(branch) {
    if (branch === null) {
      return false;
    }
    let possibleAnc = false;
    if (branch.val === p.val || branch.val === q.val) {
      possibleAnc = true;
    }

    let left = recursion(branch.left);
    let right = recursion(branch.right);
    if ((left && right) || (possibleAnc && (left || right))) {
      if (result === null) {
        result = branch;
      }
    }
    if (result) {
      return;
    }
    return left || right || possibleAnc;
  }
  recursion(root);
  return result;
}
