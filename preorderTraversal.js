//From 144 in LeetCode

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
function preorderTraversal(root) {
  let values = [];
  function obtainValues(branch) {
    if (branch === null) {
      return;
    }
    values.push(branch.val);
    obtainValues(branch.left);
    obtainValues(branch.right);
  }
  obtainValues(root);
  return values;
}

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
function preorderTraversalII(root) {
  if (root === null) {
    return [];
  }
  let values = [];
  let queue = [root, 'end'];
  for (let i = 0; i < queue.length; i++) {
    let current = queue[i];
    if (current === 'end') {
      break;
    }
    values.push(current.val);
    if (current.right) {
      queue.splice(i + 1, 0, current.right);
    }
    if (current.left) {
      queue.splice(i + 1, 0, current.left);
    }
  }
  return values;
}
