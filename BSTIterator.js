//From 173 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
class BSTIterator {
  constructor(root) {
    let store = [];
    function recursion(branch) {
      if (branch === null) {
        return;
      }
      if (branch.left === null && branch.right === null) {
        store.push(branch.val);
        return;
      }
      if (branch.left) {
        recursion(branch.left);
      }
      store.push(branch.val);
      if (branch.right) {
        recursion(branch.right);
      }
    }
    recursion(root);
    this.store = store;
  }
}

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  return this.store.shift();
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.store.length > 0;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
