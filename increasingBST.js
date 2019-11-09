//From 897 in LeetCode

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
function increasingBST(tree) {
  let newTree = [];
  function recursion(root) {
    let returnBranch;
    let newBranch = new TreeNode();
    newBranch.val = root.val;
    newBranch.left = null;
    if (root.left === null && root.right === null) {
      newTree.push(newBranch);
      return;
    }

    if (root.left) {
      recursion(root.left);
    }

    newTree.push(newBranch);
    if (root.right) {
      recursion(root.right);
    }
  }
  recursion(tree);
  let first = newTree.shift();
  newTree.reduce((acc, curr) => {
    acc.right = curr;
    acc = curr;
    return acc;
  }, first);
  return first;
}
