//From 919 in LeetCode

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
class CBTInserter {
  constructor(root) {
    this.tree = root;
    this.vals = [];
    let queue = [root];
    for (let i = 0; i < queue.length; i++) {
      this.vals.push(queue[i].val);
      if (queue[i].left) {
        queue.push(queue[i].left);
      }
      if (queue[i].right) {
        queue.push(queue[i].right);
      }
    }
  }
}

/**
 * @param {number} v
 * @return {number}
 */
CBTInserter.prototype.insert = function(v) {
  this.vals.push(v);
  let root = new TreeNode(this.vals[0]);
  let copy = this.vals.slice();
  copy.shift();
  let nodes = [root];
  let parent;
  for (let i = 0, j = 0; i < copy.length; i += 2, j++) {
    if (copy[i] === v || copy[i + 1] === v) {
      parent = nodes[j].val;
    }
    let left = new TreeNode(copy[i]);
    nodes[j].left = left;
    nodes.push(left);
    if (copy[i + 1] !== undefined) {
      let right;
      right = new TreeNode(copy[i + 1]);
      nodes[j].right = right;
      nodes.push(right);
    }
  }
  console.log(root);
  this.tree = root;
  return parent;
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function() {
  return this.tree;
};

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(v)
 * var param_2 = obj.get_root()
 */
