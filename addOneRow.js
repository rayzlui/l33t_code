//From 623 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
function addOneRow(root, v, d) {
  if (d === 1) {
    let newHead = new TreeNode(v);
    newHead.left = root;
    return newHead;
  }

  let count = 1;
  let queue = [root, 'end'];
  let parents = [root];
  let offspring = [];
  let i = 0;
  while (count !== d - 1) {
    let current = queue[i];

    if (current === 'end') {
      count++;
      queue.push('end');
      parents = offspring;
      offspring = [];
    } else {
      if (current.left) {
        queue.push(current.left);
        offspring.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
        offspring.push(current.right);
      }
    }
    i++;
  }
  parents.forEach(x => {
    let newLeft = new TreeNode(v);
    let newRight = new TreeNode(v);
    newLeft.left = x.left;
    newRight.right = x.right;
    x.left = newLeft;
    x.right = newRight;
  });

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
   * @param {number} v
   * @param {number} d
   * @return {TreeNode}
   */
  function addOneRow(root, v, d) {
    if (d === 1) {
      let newHead = new TreeNode(v);
      newHead.left = root;
      return newHead;
    }

    let count = 1;
    let parents = [root];
    let offspring = [];
    let i = 0;
    while (count !== d - 1) {
      let current = parents[i];

      if (i === parents.length) {
        count++;
        parents = offspring;
        offspring = [];
        i = 0;
      } else {
        i++;
        if (current.left) {
          offspring.push(current.left);
        }
        if (current.right) {
          offspring.push(current.right);
        }
      }
    }
    parents.forEach(x => {
      let newLeft = new TreeNode(v);
      let newRight = new TreeNode(v);
      newLeft.left = x.left;
      newRight.right = x.right;
      x.left = newLeft;
      x.right = newRight;
    });

    return root;
  }

  return root;
}
