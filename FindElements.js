//From 1261 in LeetCode

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

class FindElements {
  constructor(root) {
    let holding = [0];
    function recoverTree(branch) {
      let currentVal = branch.val;
      if (branch.left !== null) {
        branch.left.val = currentVal * 2 + 1;
        holding.push(branch.left.val);
        recoverTree(branch.left);
      }
      if (branch.right !== null) {
        branch.right.val = currentVal * 2 + 2;
        holding.push(branch.right.val);
        recoverTree(branch.right);
      }
    }
    root.val = 0;
    recoverTree(root);
    this.root = root;
    this.holding = holding;
  }
}

/**
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
  return this.holding.includes(target);
};

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */

//faster

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

class FindElementsII {
  constructor(root) {
    let holding = { 0: true };
    function recoverTree(branch) {
      let currentVal = branch.val;
      if (branch.left !== null) {
        branch.left.val = currentVal * 2 + 1;
        holding[branch.left.val] = true;
        recoverTree(branch.left);
      }
      if (branch.right !== null) {
        branch.right.val = currentVal * 2 + 2;
        holding[branch.right.val] = true;
        recoverTree(branch.right);
      }
    }
    root.val = 0;
    recoverTree(root);
    this.root = root;
    this.holding = holding;
  }
}

/**
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
  return this.holding[target] !== undefined;
};

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
