//From 450 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
function constructBST(left, right) {
  let current = right;
  if (right === null && left === null) {
    return null;
  }
  if (left === null) {
    return right;
  }
  if (right === null) {
    return left;
  }
  while (current.left) {
    current = current.left;
  }
  current.left = left;
  return right;
}
function deleteNode(root, key) {
  function recursion(branch) {
    if (branch === null) {
      return false;
    }
    let value = branch.val;
    if (value === key) {
      let newBranch = constructBST(branch.left, branch.right);
      if (branch === root) {
        root = newBranch;
      }
      branch = newBranch;

      return branch;
    }
    if (value < key) {
      let right = recursion(branch.right);
      if (right !== false) {
        branch.right = right;
      }
      return false;
    }
    if (value > key) {
      let left = recursion(branch.left);
      if (left !== false) {
        branch.left = left;
      }
      return false;
    }
  }
  recursion(root);
  return root;
}
