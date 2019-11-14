//From 235 in LeetCode

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
  //use rule of BST where left is lower than root, right is greater.
  p = p.val;
  q = q.val;
  let smaller = p > q ? q : p;
  let larger = p > q ? p : q;
  function recursion(branch) {
    if (branch.val === null) {
      return null;
    }

    if (branch.val <= larger && branch.val >= smaller) {
      return branch;
    }
    let result;
    if (branch.val < p && branch.val < q) {
      result = recursion(branch.right);
    }
    if (branch.val > p && branch.val > q) {
      result = recursion(branch.left);
    }
    if (result) {
      return result;
    }
  }
  return recursion(root);
}
