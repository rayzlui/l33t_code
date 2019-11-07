//From 617 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
function mergeTrees(t1, t2) {
  if (t1 === null && t2 === null) {
    return null;
  }
  let merged = new TreeNode();
  function recursion(merging, tree1, tree2) {
    if (tree1 === null && tree2 === null) {
      return null;
    }

    if (tree1 === null) {
      merging.val = tree2.val;
    } else if (tree2 === null) {
      merging.val = tree1.val;
    } else {
      merging.val = tree1.val + tree2.val;
    }
    merging.right = recursion(
      new TreeNode(),
      tree1 ? tree1.right : tree1,
      tree2 ? tree2.right : tree2,
    );
    merging.left = recursion(
      new TreeNode(),
      tree1 ? tree1.left : tree1,
      tree2 ? tree2.left : tree2,
    );
    return merging;
  }
  recursion(merged, t1, t2);
  return merged;
}
