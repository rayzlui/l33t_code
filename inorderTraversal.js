//From 94 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function inorderTraversalI(root) {
  let result = [];
  function inorder(branch) {
    if (branch === null) {
      return;
    }
    inorder(branch.left);
    result.push(branch.val);
    inorder(branch.right);
  }
  inorder(root);
  return result;
};

//iterative

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function inorderTraversal(root) {
  if (root === null) {
    return [];
  }
  let result = [];
  let queue = [root];
  for (let i = 0; i < queue.length; i++) {
    let current = queue[i];
    if (typeof current === 'number') {
      //if current is num we just push it
      result.push(current);
    } else {
      if (current.left === null && current.right === null) {
        result.push(current.val);
      } else {
        if (current.right) {
          queue.splice(i + 1, 0, current.right);
        }
        queue.splice(i + 1, 0, current.val);
        if (current.left) {
          queue.splice(i + 1, 0, current.left);
        }
      }
    }
  }
  return result;
};
