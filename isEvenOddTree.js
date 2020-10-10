//From 1609 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isEvenOddTree(root) {
  let queue = [root, 'break'];
  let level = 1;
  for (let i = 0; i < queue.length; i++) {
    let branch = queue[i];

    if (branch === 'break') {
      if (queue[i - 1] === 'break') {
        return true;
      }
      queue.push('break');
      level++;
    } else {
      let previous = queue[i - 1];
      let val = branch.val;
      if (previous && previous !== 'break') {
        let preVal = previous.val;
        if (level % 2) {
          if (val <= preVal) {
            return false;
          }
        } else {
          if (preVal <= val) {
            return false;
          }
        }
      }
      if (val % 2 !== level % 2) {
        return false;
      }
      if (branch.left) {
        queue.push(branch.left);
      }
      if (branch.right) {
        queue.push(branch.right);
      }
    }
  }
}
