//From 951 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
function flipEquiv(root1, root2) {
  if (root1 === null && root2 === null) {
    return true;
  } else if (root1 === null) {
    return false;
  } else if (root2 === null) {
    return false;
  }
  if (root1.val !== root2.val) {
    return false;
  }
  let queue1 = [root1];
  let queue2 = [root2];
  for (let i = 0; i < queue1.length; i++) {
    let current1 = queue1[i];
    let current2 = queue2[i];
    if (current1.val !== current2.val) {
      return false;
    } else {
      let ones = [current1.right, current1.left].filter(x => x !== null);
      let twos = [current2.right, current2.left].filter(x => x !== null);

      if (ones.length !== twos.length) {
        return false;
      } else {
        if (ones.length !== 0) {
          twos = ones[0].val === twos[0].val ? twos : twos.reverse();
          queue1.push(...ones);
          queue2.push(...twos);
        }
      }
    }
  }
  return true;
}
