//From 117 in LeetCode

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
function connect(root) {
  if (root === null) {
    return root;
  }
  let queue = [root, 'end'];
  let next = [];
  for (let i = 0; i < queue.length; i++) {
    let current = queue[i];

    if (current === 'end') {
      if (next.length === 0) {
        return root;
      }
      let setNext = next.reduce((acc, curr) => {
        if (acc) {
          acc.next = curr;
        } else {
          acc = next;
        }
        return acc.next;
      });
      setNext.next = null;
      queue = queue.concat(next);
      queue.push('end');
      next = [];
    } else {
      if (current.left && current.right) {
        next.push(current.left, current.right);
      } else if (current.left) {
        next.push(current.left);
      } else if (current.right) {
        next.push(current.right);
      }
    }
  }
}
