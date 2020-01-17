//From 222 in LeetCode

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
function countNodes(root) {
  let queue = [root];
  let count = 0;
  for (let i = 0; i < queue.length; i++) {
    if (queue[i] === null) {
      break;
    }
    queue.push(queue[i].left, queue[i].right);
    count++;
  }
  return count;
}
